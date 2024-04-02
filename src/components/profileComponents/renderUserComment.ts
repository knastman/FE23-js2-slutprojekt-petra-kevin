import { formatTimestamp, showToast } from "../../utils/utils";
import { CommentType2 } from "../../types/typesv2/commentType2";
import { UserType2 } from "../../types/typesv2/userType2";
import { threadType2 } from "../../types/typesv2/threadType2";
import { getThreadById } from "../../services/servicesv2/threadService2";
import { getLoggedInUser, isLoggedIn } from "../credentialsComponents/renderLogin";
import { deleteCommentData, getCommentData } from "../../services/servicesv2/commentService2";
import { getForumData } from "../../services/servicesv2/forumService2";


// Kevin's code
function commentTemplate(comment: CommentType2, user: UserType2, thread: threadType2, topicTitle:string): string {
    const dateTime = formatTimestamp(comment.timeStamp);
    const isCurrentUser = user.name === getLoggedInUser();
    return `
        <div class="comment">
            <div class="commentHeader">
                <p class="commentDate">${dateTime.date} | ${dateTime.time}</p>
                <div class="commentSubject">
                    <a href="/thread/${comment.threadId}">${thread.title}</a>
                </div>
            </div>
            <div class="commentBody">
                <div class="commentUserInfo">
                    <div class="commentUserName">
                        <a href="/user/${comment.userId}">${user.name}</a>
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
                    <a href="/topic/${thread.forumId}">${topicTitle}</a>
                <div class="commentButtonContainer">
                    <button class="editUserComment" data-comment-id="${comment.id}" ${isCurrentUser ? '' : 'style="display:none;"'}>Redigera</button> | 
                    <button class="deleteUserComment" data-comment-id="${comment.id}" ${isCurrentUser ? '' : 'style="display:none;"'}>Radera</button>
                </div>
            </div>
        </div>
    `;
}



// Kevin's code
export async function renderUserComments(user: UserType2): Promise<void> {
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
            const thread: threadType2 | null = await getThreadById(comment.threadId);
            const topicObject = await getForumData();
            const topic = topicObject.find((topic) => topic.id === thread?.forumId);
            if(!thread || !topic) return;
            mainUserProfileComments.innerHTML += commentTemplate(comment, user, thread, topic.title);
            attachListeners(user);
        } 
    }catch(error){
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
async function attachListeners(user: UserType2): Promise<void>{
    const editButton = document.querySelectorAll(".editUserComment");
    const deleteButton = document.querySelectorAll(".deleteUserComment");
    if(!editButton || !deleteButton) return;

    editButton.forEach((button) => {
        button.addEventListener("click", (event)=>{
            const commentId = (event.target as HTMLElement).dataset.commentId;
            if(!commentId) return;
            const commentNumber = parseInt(commentId);
            showToast("Inte implementerat ännu ", 5000);

        }); 
    });
    deleteButton.forEach((button) => {
        button.addEventListener("click", (event)=>{
            const commentId = (event.target as HTMLElement).dataset.commentId;
            if(!commentId) return;
            const commentNumber = parseInt(commentId);
            deleteButtonClickHandler(commentNumber, user);
        });
    });
}

function deleteButtonTemplate(commentId: number): string {
    return `
        <p>Är du säker på att du vill radera inlägget?</p>
        <button class="deleteUserComment" data-comment-id="${commentId}">Ja</button>
        <button class="cancelDeleteComment">Nej</button>
    `;
}

function deleteButtonClickHandler(commentId: number, user: UserType2): void{
    const buttonContainer = document.querySelector(".commentButtonContainer");
    if(!buttonContainer) return;
    buttonContainer.innerHTML = deleteButtonTemplate(commentId);

    const deleteButton = document.querySelector(".deleteUserComment");
    const cancelButton = document.querySelector(".cancelDeleteComment");
    if(!deleteButton || !cancelButton) return;

    deleteButton.addEventListener("click", async ()=>{
        try{
            await deleteCommentData(commentId);
            renderUserComments(user);
        }catch(error){
            showToast("Kunde inte radera inlägget", 5000);
            console.log(error);
        }
    });
    cancelButton.addEventListener("click", ()=>{
        renderUserComments(user);
    });
    
}