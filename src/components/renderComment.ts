import { getTopics } from "../services/topicService";
import { CommentType } from "../types/commentType";
import { UserType } from "../types/userType";
import { formatTimestamp, showToast } from "../utils/utils";
import { getThreadsFromTopic } from "../services/threadService";
import { getAllCommentsFromThread } from "../services/commentService";
import { getImagePath } from "../utils/imageIdentifier";

// Kevin's code
type UserCommentWithTopic = {
    comment: CommentType;
    topicName: string
};

// Kevin's code
export function commentTemplate(comment: UserCommentWithTopic, user: UserType): string {
    const dateTime = formatTimestamp(comment.comment.timeStamp);

  return `
    <div class="comment">
        <div class="commentHeader">
            <p>${dateTime.date} | ${dateTime.time}</p>
            <p>${comment.comment.title}</p>
        </div>
        <div class="commentBody">
            <div class="commentUser">
                <h3>${user.name}</h3>
                <img src="${user.image}" alt="userImage">
            </div>
            <div class="commentText">
                <p>${comment.comment.comment}</p>
            </div>
        </div>
        <div class="commentFooter">
            <a href="/topic/${comment.topicName}">${comment.topicName}</a>
        </div>
    </div>
  `;
}

// Kevin's code
async function getUserCommentsFromThread(topicName: string, threadId: string, userName:string): Promise<UserCommentWithTopic[]>{
    const comments= await getAllCommentsFromThread(topicName, threadId);
    if (!comments) return [];
    return comments
        .filter((comment: { userName: string; }) => comment.userName === userName)
        .map((comment: any) => ({comment, topicName}));
}

// Kevin's code
async function getUserCommentsFromTopic(topicName: string, userName: string): Promise<UserCommentWithTopic[]> {
    const threads = await getThreadsFromTopic(topicName);
    if (!threads) return [];
    const commentsPromises = threads.map(thread => getUserCommentsFromThread(topicName, thread.id, userName));
    const commentsArrays = await Promise.all(commentsPromises);
    return commentsArrays.flat(); 
}

// Kevin's code
export async function getAllCommentsByUser(userName: string): Promise<UserCommentWithTopic[]> {
    const topics = await getTopics();
    if (!topics) {
        showToast("Kunde inte hämta ämnen, försök igen", 5000);
        return [];
    }

    const commentsPromises = Object.keys(topics).map(topicName => getUserCommentsFromTopic(topicName, userName));
    const commentsArrays = await Promise.all(commentsPromises);
    return commentsArrays.flat(); 
}