import { getAllCommentsFromThread } from "../services/commentService";
import { formatTimestamp } from "../utils/utils";
import { CommentType } from "../types/commentType";
import { getUserByName } from "../services/userService";
import { getImagePath } from "../utils/imageIdentifier";
import Navigo from "navigo";

// Adjusted function to render comments with user info and images
export const renderComments = async (
  topicName: string,
  threadId: string,
  router: Navigo
): Promise<void> => {
  const comments: CommentType[] = await getAllCommentsFromThread(
    topicName,
    threadId
  );

  const commentsContainer = document.querySelector(".commentsContainer");
  if (!commentsContainer) {
    console.error("Comments container not found");
    return;
  }

  commentsContainer.innerHTML = "";

  for (const comment of comments) {
    const user = await getUserByName(comment.userName);
    const userImage = getImagePath(user.image);
    const commentDate = formatTimestamp(comment.timeStamp);
    const time = commentDate.time;
    const date = commentDate.date;

    // Creating an article element for each comment/post
    const commentElement = document.createElement("article");
    commentElement.className = "post";

    commentElement.innerHTML = `
      <div class="postHeader">
        <div>
          <span class="postDate">${time} | ${date}</span>
        </div>
        <div>
          <span class="postSubject">${comment.title}</span>
        </div>
      </div>
      <div class="postBody">
        <div class="postserInfo">
          <div class="postUserName">${user.name}</div>
          <div class="PostUserImg">
            <img src="${userImage}">
          </div>
        </div>
        <div class="postText">
          <p>${comment.comment}</p>
        </div>
      </div>
      <footer class="postFooter">
        <div>
          <span class="postTopic">Datorer & IT</span>
        </div>
        <div>
          <a href="#">Redigera inlägg</a> | <a href="#">Radera inlägg</a>
        </div>
      </footer>
    `;

    commentsContainer.appendChild(commentElement);
  }
};
