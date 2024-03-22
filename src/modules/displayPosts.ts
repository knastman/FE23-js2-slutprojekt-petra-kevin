import { CommentType}  from "../types/commentType.ts";
import { UserType } from "../types/userType.ts";


/*********************************
  Display Posts
**********************************/




// export function displayPosts(comments: CommentType[]):void{
// export function displayPosts(comments: CommentType[], user: UserType[]):void{
export function displayPosts(comments: CommentType[]):void{
  // console.log(comments);
  // console.log(user);
  for(const post in comments){
    // console.log(post);
    const postObject = comments[post];
    // console.log(postObject);
    // console.log(postObject.userName);
    // console.log(postObject.title);
    displayPost(postObject);
  }
}


function displayPost(post:CommentType):void{
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  console.log(post);
  console.log(post.title);
  console.log(post.userName);
  console.log(post.comment);
  console.log(post.timeStamp);
  const postThreadTitle = document.createElement('h2'); 
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
  userInfo.classList.add('userInfo');
  const userName = document.createElement('div'); 
  userName.classList.add('userName');
  const userImg = document.createElement('div'); 
  const userImgSrc = document.createElement('img'); 
  userImg.classList.add('userImg');

  const postTextDiv = document.createElement('div'); 
  const postText = document.createElement('p'); 
  postText.classList.add('postText');

  const postFooter = document.createElement('div'); 
  postFooter.classList.add('postFooter');
  const postFooterDivleft = document.createElement('div'); 
  const postFooterDivRight = document.createElement('div'); 
  const postFooterRightEdit = document.createElement('span'); 
  const postFooterRightDelete = document.createElement('span'); 
  postFooter.classList.add('footerLink');

  postHeaderSubject.innerText = post.title;

  const postTimestamp = post.timeStamp;
  let date = new Date(postTimestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  let postTime = `${hours}:${minutes}`;
  let postDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  // let postdateAndTime = `${hours}:${minutes} | ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  let postdateAndTime = `${postTime} | ${postDate}`;

  postDateContainer.innerText = postdateAndTime;
  postThreadTitle.innerText = post.title;
  userName.innerText = post.userName;
  // userImgSrc.src = post.userImg;
  // userImgSrc.src = user.userImg;
  if (post.userImg === undefined){
    userImgSrc.src = './babirusa.e25ca78f.png';
  }
  postText.innerText = post.comment;
  // postFooterDivleft.innerText = post.topic;
  // postFooterDivleft.innerText = topics.topic;
  postFooterDivleft.innerText = 'Datorer/IT';
  postFooterRightEdit.innerText = 'Redigera inlägg';
  postFooterRightDelete.innerText =  '| Radera inlägg';



  postsContainer.append(postBox);
  postBox.append(postHeader, postBody, postFooter);

  postHeader.append(postDateContainer, postHeaderSubject);
  postBody.append(userInfo, postTextDiv);
  userInfo.append(userName, userImg);
  userImg.append(userImgSrc);
  postTextDiv.append(postText);

  postFooter.append(postFooterDivleft, postFooterDivRight);
  postFooterDivRight.append(postFooterRightEdit, postFooterRightDelete);
}







