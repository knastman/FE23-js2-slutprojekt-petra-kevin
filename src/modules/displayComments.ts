import { ThreadType, ThreadWithId } from "../types/threadType";
import { CommentType }  from "../types/commentType";
import { formatTimestamp } from "../utils/utils";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/renderLogin";
import { getImagePath } from "../utils/imageIdentifier";

// import {serverTimestamp, ref, set} from 'firebase/database';
// import { db } from '../services/firebaseConfig';

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
            <a href="/user/${thread.user}">${thread.user}</a>
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

export function displayComments(comments: CommentType[], threadObject:ThreadWithId, topic:string):void{
  
  displayThreadPost(threadObject, topic);

  for(const commentObject of comments){
    displayComment(commentObject, topic);  
  }
}
 
export function displayComment(comment:CommentType, topic:string):void{
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
  postUserName.setAttribute('href', `/user/${comment.userName}`);        
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
  postUserName.innerText = comment.userName;
  postUserImgSrc.src = getImagePath(comment.userName);
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

  // //Test för editering av meddelande direkt i meddelandet
  // postText.addEventListener('keypress',  (event) => {
  //   if (!event.shiftKey && event.key === 'Enter' ) {
  //     postText.blur();
  //     const updatedPostData = {
  //       ...comment,
  //       comment: postText,  
  //       edited: true,//edited indikation som är en string förre timestamp
  //       timestamp: serverTimestamp(),
  //     };
  //     postText.style.height= postText.scrollHeight+10+"px";
  //     postText.scrollTop=0;
  //     // await set(ref(db, 'posts/' + messageid), postData, newPostRef);
  //     set(ref(db, `topics/${topic}/threads/${threadId}/comments`), updatedPostData);
  //   }
  // });
}


export function clearPosts():void{
  postsContainer.innerHTML = '';
}


