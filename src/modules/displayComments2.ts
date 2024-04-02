import { ThreadType, ThreadWithId } from "../types/threadType";
// import { CommentType }  from "../types/commentType";
import { CommentType2 }  from "../types/typesv2/commentType2";
import { formatTimestamp } from "../utils/utils";
import { getThreadById } from "../services/threadService";


import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/renderLogin";
import { getImagePath } from "../utils/imageIdentifier";

//Petra's code
const postsContainer = document.querySelector('#posts') as HTMLDivElement;

//Petra's code
// export function displayPosts(comments: CommentType2[], threadObject:ThreadWithId, topic:string, threadId:string):void{
export function displayPosts(comments: CommentType2[]):void{
  // console.log(threadId);
  //  clearPosts();
  for(const commentObject of comments){
    displayComment(commentObject, topic);  
  }
}
 
//Petra's code
export function displayComment(comment:CommentType2, topic:string):void{
  postsContainer.classList.remove('hide');
  
  const postBox = document.createElement('article'); 
  postBox.classList.add('post');

  const postHeader = document.createElement('div'); 
  postHeader.classList.add('postHeader');
  const postHeaderSubject = document.createElement('div'); 
 
  const postSubjectLink = document.createElement('a'); 
  postSubjectLink.classList.add('postSubject');
  // postSubjectLink.setAttribute('href', `/topic/thread/${thread.id}`); 
  postSubjectLink.setAttribute('href', '#');        
  postSubjectLink.setAttribute('data-navigo', '');        

  const postDateContainer = document.createElement('div'); 
  postDateContainer.classList.add('postDate');

  const postBody = document.createElement('div'); 
  postBody.classList.add('postBody');
  
  const userInfo = document.createElement('div');
  userInfo.classList.add('postUserInfo');
  // const postUserName = document.createElement('div');
  const postUserName = document.createElement('a');
  postUserName.classList.add('postUserName');
  postUserName.setAttribute('href', `/user/${comment.userName}`);  //Hämta nytt username      
  postUserName.setAttribute('data-navigo', ''); 

  const postUserImg = document.createElement('div'); 
  const postUserImgSrc = document.createElement('img'); 
  postUserImg.classList.add('postUserImg');

  const postTextDiv = document.createElement('div'); 
  const postText = document.createElement('p'); 
  postText.classList.add('postText');

  const postFooter = document.createElement('div'); 
  postFooter.classList.add('postFooter');
  const postFooterDivleft = document.createElement('div'); 
  const postTopic = document.createElement('a');
  postTopic.setAttribute('href', `/topic/${topic}`);        
  postTopic.setAttribute('data-navigo', '');      
  postTopic.classList.add('postTopic');
 
  const postFooterDivRight = document.createElement('div'); 
  const postFooterRightEdit = document.createElement('a'); 
  const postFooterRightDelete = document.createElement('a'); 
  const postFooterRight = document.createElement('a'); 

  postFooterRightEdit.classList.add('postFooterLink');
  postFooterRightEdit.setAttribute('href', "#");        
  postFooterRightEdit.setAttribute('data-navigo', '');

  postFooterRightDelete.classList.add('postFooterLink');      
  postFooterRightDelete.setAttribute('href', "#");        
  postFooterRightDelete.setAttribute('data-navigo', '');      


  postSubjectLink.innerText = comment.title;   
  const commentDate = formatTimestamp(comment.timeStamp);
  const time = commentDate.time;
  const date = commentDate.date;
  let postdateAndTime = `${time} | ${date}`;
  postDateContainer.innerText = postdateAndTime;
  postUserName.innerText = comment.userName; //Hämta nya userinfo
  postUserImgSrc.src = getImagePath(comment.userName); //Hämta nya userinfo
  postText.innerText = comment.comment;
  postTopic.innerText = topic;
  postFooterRightEdit.innerText = 'Redigera inlägg';
  postFooterRightDelete.innerText = 'Radera inlägg';

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
  Clean before display
**********************************/
// 
//Petra's code
export function clearPosts():void{
  postsContainer.innerHTML = '';
}


/*********************************
  Form for comments
**********************************/

// // Formulär för comments
// const form = document.querySelector('#createCommentsForm') as HTMLDivElement;

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const commentText:string = (createThreadForm.querySelector('#postText') as HTMLInputElement).value.trim();

//   createNewThreadWithText(subjectIntput, subjectText, 'Petra'); //Lägg till dynamiskt

//   form.reset();
// })

