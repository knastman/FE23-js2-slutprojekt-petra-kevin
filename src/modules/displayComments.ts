import { CommentType2 }  from "../types/commentType";
import { formatTimestamp } from "../utils/utils";
// import { getThreadById } from "../services/threadService";
import { getLoggedInUser, isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { showToast } from "../utils/utils";
import { getImagePath } from "../utils/imageIdentifier";

import { getUserData } from "../services/servicesv2/userService2";
import { UserType2 } from "../types/userType";


const postsContainer = document.querySelector('#posts') as HTMLDivElement

export function displayPosts(comments: CommentType2[], topic:string, threadTitle:string):void{
   clearPosts();
   clearThreadForm();
  //  createCommentForm();

  for(const commentObject of comments){
    getUserData()
    .then(userData => userData.find((user) => user.id === commentObject.userId)) 
    .then(user => {displayComment(commentObject, topic, threadTitle, user!)})
  }
}
 
export function displayComment(comment:CommentType2, topic:string, threadTitle:string, user:UserType2):void{
  postsContainer.classList.remove('hide');

  const postBox = createAndAddClass('article', 'post'); 
  const postHeader = createAndAddClass('div', 'postHeader'); 
  const postHeaderSubject = document.createElement('div'); 
  const postSubjectLink = createAndAddClass('a', 'postSubject'); 
  postSubjectLink.setAttribute('href', `/topic/thread/${comment.threadId}`);   
  postSubjectLink.setAttribute('data-navigo', '');   
  const postDateContainer = createAndAddClass('div', 'postDate'); 

  const postBody = createAndAddClass('div', 'postBody'); 
  const userInfo = createAndAddClass('div', 'postUserInfo');
  const postUserName = createAndAddClass('a', 'postUserName');
  postUserName.setAttribute('href', `/user/${user.name}`);  
  postUserName.setAttribute('data-navigo', ''); 
  const postUserImg = document.createElement('div'); 
  const postUserImgSrc = createAndAddClass('img', 'postUserImg'); 
  const postTextDiv = document.createElement('div'); 
  const postText = createAndAddClass('p', 'postText');

  const postFooter = createAndAddClass('div', 'postFooter');
  const postFooterDivleft = document.createElement('div'); 
  const postTopic = createAndAddClass('a', 'postTopic');
  postTopic.setAttribute('href', `/topic/${topic}`);        
  postTopic.setAttribute('data-navigo', '');      
  const postFooterDivRight = document.createElement('div'); 
  const postFooterRightEdit =  createAndAddClass('a', 'postFooterLink');
  const postFooterRightDelete = createAndAddClass('a', 'postFooterLink');
  postFooterRightEdit.setAttribute('href', "#");        
  postFooterRightEdit.setAttribute('data-navigo', '');
  postFooterRightDelete.setAttribute('href', "#");        
  postFooterRightDelete.setAttribute('data-navigo', '');      


  postSubjectLink.innerText = threadTitle;   
  const commentDate = formatTimestamp(comment.timeStamp);
  postDateContainer.innerText = `${commentDate.time} | ${commentDate.date}`;;
  postUserName.innerText = user.name;
  postUserImgSrc.src = getImagePath(user.image);
  postText.innerText = comment.comment;
  postTopic.innerText = topic;

  // postFooterRightEdit.innerText = 'Redigera inlägg';
  //postFooterRightDelete.innerHTML = 'Radera inägg';

  //Kopierat från usercomment med liten ändring
  const isCurrentUser = user.name === getLoggedInUser();
  postFooterRightEdit.innerHTML = `<a href class="editUserComment" data-comment-id="${comment.id}" ${isCurrentUser ? '' : 'style="display:none;"'}>Redigera</a> `;
  postFooterRightDelete.innerHTML = `<span class="deleteUserComment" data-comment-id="${comment.id}" ${isCurrentUser ? '' : 'style="display:none;"'}>Radera</span>`;

  postsContainer.append(postBox);
  postBox.append(postHeader, postBody, postFooter);
  postHeader.append(postDateContainer, postHeaderSubject);
  postHeaderSubject.append(postSubjectLink);
  postBody.append(userInfo, postTextDiv);
  userInfo.append(postUserName, postUserImg);
  postUserImg.append(postUserImgSrc);
  postTextDiv.append(postText);
  postFooter.append(postFooterDivleft, postFooterDivRight);
  postFooterDivleft.append(postTopic);
  postFooterDivRight.append(postFooterRightEdit, postFooterRightDelete);

}


/*********************************
  Clear before display
**********************************/

export function clearPosts():void{
  postsContainer.innerHTML = '';
}
export function clearThreadForm():void{
  const createThreadForm = document.querySelector('#createThreadForm') as HTMLDivElement;
  createThreadForm.innerHTML = '';
}


/*********************************
  Form for comments
**********************************/




/*********************************
  Create append and attribute
**********************************/


export function createAndAddClass(type:string, className:string){
  const element = document.createElement(type);
  // container.append(element);
  if(className !== undefined) {
    element.classList.add(className);
  }

  return element;
}

