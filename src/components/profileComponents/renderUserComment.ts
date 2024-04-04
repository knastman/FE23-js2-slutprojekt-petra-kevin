import { formatTimestamp, showToast } from "../../utils/utils";
import { CommentType2 } from "../../types/commentType";
import { UserType2 } from "../../types/userType";
import { ThreadType2 } from "../../types/threadType";
import { getThreadById } from "../../services/servicesv2/threadService2";
import { getLoggedInUser, isLoggedIn } from "../credentialsComponents/renderLogin";
import { deleteCommentData, getCommentData } from "../../services/servicesv2/commentService2";
import { getForumData } from "../../services/servicesv2/forumService2";
import Navigo from "navigo";

// Kevin's code
function commentTemplate(comment: CommentType2, user: UserType2, thread: ThreadType2, topicTitle:string): string {
    const dateTime = formatTimestamp(comment.timeStamp);
    const isCurrentUser = user.name === getLoggedInUser();
    return `
        <div class="comment" data-comment-id="${comment.id}">
            <div class="commentHeader">
                <p class="commentDate">${dateTime.date} | ${dateTime.time}</p>
                <div class="commentSubject">
                    <a href="/thread/${comment.threadId}" data-navigo>${thread.title}</a>
                </div>
            </div>
            <div class="commentBody">
                <div class="commentUserInfo">
                    <div class="commentUserName">
                        <a href="/user/${user.name}" data-navigo>${user.name}</a>
                    </div>
                    <div class="commentUserImg">
                        <img src="${user.image}" alt="userImage">
                    </div>
                </div>
                <div class="commentText">
                    <p>${comment.comment}</p>
                </div>
            </div>
            <div class="commentFooter">
                <a id="${thread.forumId}" href="/topic/${thread.forumId}" data-navigo>${topicTitle}</a>
                <div class="commentButtonContainer">
                    <button class="editUserComment" data-comment-id="${comment.id}" ${isCurrentUser ? '' : 'style="display:none;"'}>Redigera</button>  
                    <button class="deleteUserComment" data-comment-id="${comment.id}" ${isCurrentUser ? '' : 'style="display:none;"'}>Radera</button>
                </div>
            </div>
        </div>
    `;
}

// Kevin's code
export async function renderUserComments(user: UserType2, router: Navigo): Promise<void> {
    const mainUserProfileComments = document.querySelector(".userProfileComments");
    if (!mainUserProfileComments) return;
    mainUserProfileComments.innerHTML = "";

    try {
        if(!isLoggedIn()){
            showToast("Du måste vara inloggad för att se profiler", 5000);
            return;
        }
        const commentData: CommentType2[] = await getCommentData();
        const userComments: CommentType2[] = commentData.filter((comment) => comment.userId === user.id);
        const sortedComments: CommentType2[] = sortCommentsByDate(userComments);
        const slicedComments: CommentType2[] = sortedComments.slice(0, 3);
        
        for (const comment of slicedComments) {
            const thread: ThreadType2 | null = await getThreadById(comment.threadId);
            const topicObject = await getForumData();
            const topic = topicObject.find((topic) => topic.id === thread?.forumId);
            if(!thread || !topic) return;
            mainUserProfileComments.innerHTML += commentTemplate(comment, user, thread, topic.title);
            attachListeners(user,router);
        } 
        router.updatePageLinks();
    } catch(error){
        showToast("Kunde inte hämta kommentarer", 5000);
        console.log(error);
    }
}

// Kevin's code
function sortCommentsByDate(commentData: CommentType2[]): CommentType2[] {
    return commentData.sort((a, b) => {
        return b.timeStamp - a.timeStamp;
    });
}

// Kevin's code
async function attachListeners(user: UserType2, router: Navigo): Promise<void>{
    const deleteButtons = document.querySelectorAll(".deleteUserComment");
    if(!deleteButtons) return;
    const editButtons = document.querySelectorAll(".editUserComment");

    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", async (event) => {
            const commentId = deleteButton.getAttribute('data-comment-id');
            if(!commentId) return;
            const commentNumber = parseInt(commentId);
            deleteButtonClickHandler(commentNumber, user, router);
        });
    });

    editButtons.forEach((editButton) => {
        editButton.addEventListener("click", async (event) => {
            const commentId = editButton.getAttribute('data-comment-id');
            if(!commentId) return;
            const commentNumber = parseInt(commentId);
            editButtonClickHandler();
        });
    });
}

// Kevin's code
function deleteButtonTemplate(commentId: number): string {
    return `
        <p>Är du säker på att du vill radera inlägget?</p>
        <button class="deleteUserComment" data-comment-id="${commentId}">Ja</button>
        <button class="cancelDeleteComment">Nej</button>
    `;
}
function restoreButtonTemplate(commentId: number): string {
    return `
        <button class="editUserComment" data-comment-id="${commentId}">Redigera</button>  
        <button class="deleteUserComment" data-comment-id="${commentId}">Radera</button>
    `;
}

// Kevin's code
function deleteButtonClickHandler(commentId: number, user: UserType2, router: Navigo): void {
    const commentElement = document.querySelector(`.comment[data-comment-id="${commentId}"]`);
    if (!commentElement) return;

    const buttonContainer = commentElement.querySelector('.commentButtonContainer');
    if (!buttonContainer) return;

    buttonContainer.innerHTML = deleteButtonTemplate(commentId);

    const deleteButton = commentElement.querySelector('.deleteUserComment');
    const cancelButton = commentElement.querySelector('.cancelDeleteComment');
    if (!deleteButton || !cancelButton) return;

    deleteButton.addEventListener("click", async () => {
        try {
            await deleteCommentData(commentId);
            commentElement.remove();
        } catch (error) {
            showToast("Kunde inte radera inlägget", 5000);
            console.log(error);
        }
    });

    cancelButton.addEventListener("click", () => {
        // Restore the original button container HTML
        console.log("cancel");
        buttonContainer.innerHTML = restoreButtonTemplate(commentId);

        // Reattach event listeners for this comment
        attachListeners(user, router);
    });
}

function editButtonClickHandler(): void{
     const editButton = document.querySelector('.editUserComment');
        if(!editButton) return;
        editButton.addEventListener("click", async (event) => {
            const commentId = editButton.getAttribute('data-comment-id');
            if(!commentId) return;
            showToast("Funktionen är inte implementerad", 5000);
        }
    );
}