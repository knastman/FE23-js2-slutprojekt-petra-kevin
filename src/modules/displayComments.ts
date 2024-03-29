import { TopicType } from "../types/topicType";
import { ThreadType } from "../types/threadType";
import { CommentType }  from "../types/commentType";
import { UserType }  from "../types/userType";

import { getThreadsFromTopic } from "../services/threadService";
import { getUserByName } from "../services/userService";

// import { UserType } from "../types/userType.ts";
import { formatTimestamp } from "../utils/utils";

import { showToast } from "../utils/utils";
import {isLoggedIn } from "../components/renderLogin";
import { getImagePath } from "../utils/imageIdentifier";




export function displayComments(threadArray: string):void{
  console.log(threadArray);
  // const threadComments = threadArray.comments;
  // const threadText = 
  for(const threadObject of threadArray){
  // for(const threadCommentsId in threadId){
    // console.log(threadObject);// Inte ett object, är 0 elelr 1 osv
    displayComment(threadObject);
    
  }

}
 


// export function displayComment(comment:CommentType):void{
export function displayComment(commentId:CommentType):void{
  console.log(commentId);
  console.log(commentId.userName);
  
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  // console.log(postsContainer);
  postsContainer.classList.remove('hide');
  
  // console.log(comment);
  // console.log(comment.title);
  // console.log(comment.userName);
  // console.log(comment.comment);
  // console.log(comment.timeStamp);
  
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
  const postSubject = document.createElement('span'); 
  const postFooterDivRight = document.createElement('div'); 
  const postFooterRightEdit = document.createElement('span'); 
  const postFooterRightDelete = document.createElement('span'); 
  postFooter.classList.add('footerLink');

  postHeaderSubject.innerText = commentId.title;

  const commentDate = formatTimestamp(commentId.timeStamp);
  const time = commentDate.time;
  const date = commentDate.date;

  let postdateAndTime = `${time} | ${date}`;

  postDateContainer.innerText = postdateAndTime;
  postUserName.innerText = commentId.userName;
  postUserImgSrc.src = getImagePath(commentId.userName);
  postText.innerText = commentId.comment;
  // postFooterDivleft.innerText = post.topic;
  // postFooterDivleft.innerText = topics.topic;
  postFooterDivleft.innerText = 'Datorer/IT'; //Hämta dynamiskt
  // postFooterDivleft.innerText = Topic; //Hämta dynamiskt
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
  postFooterDivRight.append(postFooterRightEdit, postFooterRightDelete);
}


