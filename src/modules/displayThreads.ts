import { CommentType }  from "../types/commentType";
// import { UserType } from "../types/userType.ts";
import { ThreadType, ThreadWithId } from "../types/threadType";
// import { ThreadWithId } from "../types/threadType";
import { displayComments } from "./displayComments";
import { getThreadsFromTopic } from "../services/threadService";
import { getAllCommentsFromThread } from "../services/commentService";

import { showToast } from "../utils/utils";
import {isLoggedIn } from "../components/renderLogin";

/*********************************
  Display Threads in Topic
**********************************/

// export function displayThreads(threads: ThreadType[]):void{
export function displayThreads(threads: ThreadWithId[]):void{
  
  for(const thread in threads ){   
  // for(const thread in threads.slice(0, 5) ){
    const threadObject = threads[thread];
    const threadText = threadObject.postText;
    const threadId = threadObject.id;
    // console.log(threadId);
    // getThreadById(threadId, topicName);
    displayThread(threadObject, threadId); 
  }
}

const threadsContainer = document.querySelector('.subjects') as HTMLDivElement;
let threadText='';


function displayThread(thread:ThreadType, threadId:string):void{
  // console.log(threadId);
    // const url= 
  
  // const threadsContainer = document.querySelector('.subjects') as HTMLDivElement;
  const subjectBox = document.createElement('div');
  const subjectTitle = document.createElement('h4');
  subjectTitle.setAttribute('id', threadId);
  const subjectIncipient= document.createElement('p');
  const postUser = document.createElement('p')

  subjectTitle.innerText = thread.title;
  threadText = thread.postText;
  subjectIncipient.innerText = threadText.slice(0, 50) + '...';
  // postUser.innerText = post.userName;

  threadsContainer.append(subjectBox);
  subjectBox.append(subjectTitle, subjectIncipient );

  const postContainer = document.querySelector('#posts') as HTMLDivElement;
}

threadsContainer.addEventListener('click', (event) => {
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  event.preventDefault();
  clearPosts();

  // if (!isLoggedIn()) {
  //   showToast('Du måste vara inloggad för att se inlägg!');
  //   return;
  // }

  const threadId = ((event.target as HTMLInputElement).id);
  // console.log(threadChoice); //Nummer på vilken thread
  console.log(threadId);
  
  // const threadH2 = document.createElement('h2'); 
  // threadH2.innerText = thread.title;
  // clearThread();
  // postsContainer.append(threadH2);

  // getComments('Resor', threadId) //Fixa in så att topic följer med hit
  getAllCommentsFromThread('Resor', threadId)
  .then(displayComments); 

});

function clearPosts():void{
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  postsContainer.innerHTML = '';

}









