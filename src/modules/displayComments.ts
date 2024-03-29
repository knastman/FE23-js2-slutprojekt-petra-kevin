import { ThreadType } from "../types/threadType";
import { CommentType }  from "../types/commentType";

import { formatTimestamp } from "../utils/utils";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/renderLogin";
import { getImagePath } from "../utils/imageIdentifier";

const postsContainer = document.querySelector('#posts') as HTMLDivElement;

function displayThreadPost(thread: ThreadWithId, topic:string): void {
  clearPosts()
  const dateTime = formatTimestamp(thread.date);
  const imgUrl = getImagePath(thread.user);
  const postBox = document.createElement('article'); 
  postBox.classList.add('post');
  const threadHeader = document.createElement('h2'); 
  threadHeader.innerText = thread.title;
  postBox.innerHTML = `
    <div class="postHeader">
        <div class="postDate">${dateTime.date} | ${dateTime.time}</div>
        <div class="postSubject"><a href="/topic/thread/${thread.id}" data-navigo>${thread.title}</a></div>
    </div>
    <div class="postBody">
      <div class="postUserInfo">
          <div class="postUserName">
            ${thread.user}
          </div>
          <div class="postUserImg">
            <img src="${imgUrl}" alt="userImage">
          </div>
      </div>
      <div class="postText">
        <p>${thread.postText}</p>
      </div>
    </div>
    <div class="postFooter">
      <div>
        <span class="postTopic" data-navigo><a href="/topic/${topic}">${topic}</a></span>
      </div>
      <div>
        <a href="#">Redigera inlägg</a> | <a href="#">Radera inlägg</a>
      </div>
    </div>
`;
  postsContainer.append(threadHeader, postBox);

}

export function displayComments(threadArray: CommentType[], threadObject:ThreadType, topic:string):void{
  displayThreadPost(threadObject, topic);

  for(const commentObject of threadArray){
    displayComment(commentObject, topic);  
  }
}
 
export function displayComment(comment:CommentType, topic:string):void{
  postsContainer.classList.remove('hide');
  
  const postBox = document.createElement('article'); 
  postBox.classList.add('post');

  const postHeader = document.createElement('div'); 
  postHeader.classList.add('postHeader');
  const postDateContainer = document.createElement('div'); 
  postDateContainer.classList.add('postDate');
  const postHeaderSubject = document.createElement('div'); 
  postHeaderSubject.classList.add('postSubject');

  const postBody = document.createElement('div'); 
  postBody.classList.add('postBody');
  
  const userInfo = document.createElement('div');
  userInfo.classList.add('postUserInfo');
  const postUserName = document.createElement('div');
  postUserName.classList.add('postUserName');
  const postUserImg = document.createElement('div'); 
  const postUserImgSrc = document.createElement('img'); 
  postUserImg.classList.add('postUserImg');

  const postTextDiv = document.createElement('div'); 
  const postText = document.createElement('p'); 
  postText.classList.add('postText');

  const postFooter = document.createElement('div'); 
  postFooter.classList.add('postFooter');
  const postFooterDivleft = document.createElement('div'); 
  const postTopic = document.createElement('span'); 
  postTopic.classList.add('postTopic');
  const postSubject = document.createElement('span'); 
  const postFooterDivRight = document.createElement('div'); 
  const postFooterRightEdit = document.createElement('span'); 
  const postFooterRightDelete = document.createElement('span'); 
  postFooter.classList.add('footerLink');

  postHeaderSubject.innerText = comment.title;
  const commentDate = formatTimestamp(comment.timeStamp);
  const time = commentDate.time;
  const date = commentDate.date;
  let postdateAndTime = `${time} | ${date}`;
  postDateContainer.innerText = postdateAndTime;
  postUserName.innerText = comment.userName;
  postUserImgSrc.src = getImagePath(comment.userName);
  postText.innerText = comment.comment;
  postTopic.innerText = topic;
  postFooterRightEdit.innerText = 'Redigera inlägg';
  postFooterRightDelete.innerText =  '| Radera inlägg';

  postsContainer.append(postBox);
  postBox.append(postHeader, postBody, postFooter);
  postHeader.append(postDateContainer, postHeaderSubject);
  postBody.append(userInfo, postTextDiv);
  userInfo.append(postUserName, postUserImg);
  postUserImg.append(postUserImgSrc);
  postTextDiv.append(postText);
  postFooter.append(postFooterDivleft, postFooterDivRight);
  postFooterDivleft.append(postTopic);
  postFooterDivRight.append(postFooterRightEdit, postFooterRightDelete);
}



export function clearPosts():void{
  postsContainer.innerHTML = '';
}


