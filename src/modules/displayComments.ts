import { ThreadType, ThreadWithId } from "../types/threadType";
// import { CommentType }  from "../types/commentType";
import { CommentType2 }  from "../types/typesv2/commentType2";
import { formatTimestamp } from "../utils/utils";
// import { getThreadById } from "../services/threadService";
import { getLoggedInUser, isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { showToast } from "../utils/utils";
import { getImagePath } from "../utils/imageIdentifier";


import { getUserData } from "../services/servicesv2/userService2";
import { UserType2 } from "../types/userType";


const postsContainer = document.querySelector('#posts') as HTMLDivElement;


// function renderUser(user: UserType2): string {
//   user.image = getImagePath(user.image);
//   return `
//   <div class="userContainer">
//       <div class="userProfile">
//           <h1> Profil </h1>
//           <div class="userProfileInfo">
//               <img src="${user.image}" alt="${user.name}'s image">
//               <h2>${firstLetterToUpperCase(user.name)}</h2>
//           </div>
//       </div>
//       <div class="userProfileThreads"></div>
//   </div>  
//   <div class="userProfileComments"></div>
// `
// }


export function displayPosts(comments: CommentType2[], topic:string, threadTitle:string):void{
   clearPosts();

  //  const userData: UserType2[] = await getUserData();
  //  const user = userData.find((user) => user.name === userName);

  for(const commentObject of comments){
    getUserData()
    .then(userData => userData.find((user) => user.id === commentObject.userId)) 
    .then(user => {displayComment(commentObject, topic, threadTitle, user!)})
    // displayComment(commentObject, topic, threadTitle);  
  }
}
 
export function displayComment(comment:CommentType2, topic:string, threadTitle:string, user:UserType2):void{
  postsContainer.classList.remove('hide');

  const postBox = createAndAddClass('article', 'post'); 
  // const postBox = document.createElement('article'); 
  // postBox.classList.add('post');
  
  const postHeader =  createAndAddClass('div', 'postHeader'); 
  // const postHeader = document.createElement('div'); 
  // postHeader.classList.add('postHeader');
  const postHeaderSubject = document.createElement('div'); 
  const postSubjectLink = createAndAddClass('a', 'postSubject'); 
  // const postSubjectLink = document.createElement('a'); 
  // postSubjectLink.classList.add('postSubject');
  postSubjectLink.setAttribute('href', `/topic/thread/${comment.threadId}`);   
  postSubjectLink.setAttribute('data-navigo', '');        

  const postDateContainer = document.createElement('div'); 
  postDateContainer.classList.add('postDate');

  const postBody = document.createElement('div'); 
  postBody.classList.add('postBody');
  
  const userInfo = document.createElement('div');
  userInfo.classList.add('postUserInfo');
  const postUserName = document.createElement('a');
  postUserName.classList.add('postUserName');
  postUserName.setAttribute('href', `/user/${user.name}`);  
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

