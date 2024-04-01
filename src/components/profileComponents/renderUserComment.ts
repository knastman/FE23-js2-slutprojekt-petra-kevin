import { formatTimestamp, showToast } from "../../utils/utils";
import { CommentType2 } from "../../types/typesv2/commentType2";
import { UserType2 } from "../../types/typesv2/userType2";


// Kevin's code
export function commentTemplate(comment: CommentType2, user: UserType2): string {
    const dateTime = formatTimestamp(comment.timeStamp);
    console.log(comment.timeStamp);

    return `
        <div class="comment">
            <div class="commentHeader">
                <p class="commentDate">${dateTime.date} | ${dateTime.time}</p>
                <div class="commentSubject">
                    <a href="/thread/${comment.threadId}">Tråd</a>
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
                <div class="commentFooter">
                    <div>
                        <a href="#">Redigera inlägg</a> | <a href="#">Radera inlägg</a>
                    </div>
                </div>

        </div>
    `;
}


