import { CommentType }  from "../types/commentType";
import { ThreadType, ThreadWithId } from "../types/threadType";
import { displayComments, clearPosts } from "./displayComments";
import { getAllCommentsFromThread } from "../services/commentService";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/renderLogin";

/*********************************
  Display Threads in Topic
**********************************/

export function displayThreads(topic:string, threads:any | undefined):void{
  for(const thread in threads.slice(0, 5) ){
    const threadObject = threads[thread];
    const threadId = threadObject.id;
    displayThread(threadObject, threadObject.id, topic); 
  }
}

const threadsContainer = document.querySelector('.subjects') as HTMLDivElement;

function displayThread(thread:ThreadWithId, threadId:string, topic:string):void{  
  const subjectBox = document.createElement('div');
  const subjectTitle = document.createElement('h4');
  subjectTitle.setAttribute('id', threadId);
  subjectTitle.setAttribute('data-navigo', '');
  const subjectIncipient= document.createElement('p');
  const postUser = document.createElement('p')

  subjectTitle.innerText = thread.title;
  subjectIncipient.innerText = thread.postText.slice(0, 50) + '...';

  threadsContainer.append(subjectBox);
  subjectBox.append(subjectTitle, subjectIncipient );


  threadsContainer.addEventListener('click', (event) => {
    // const postsContainer = document.querySelector('#posts') as HTMLDivElement;
    event.preventDefault();
    clearPosts();
  
    // if (!isLoggedIn()) {
    //   showToast('Du måste vara inloggad för att se inlägg!');
    //   return;
    // }
  
    const threadId = ((event.target as HTMLInputElement).id);

    getAllCommentsFromThread(topic, threadId)
    .then(threads => displayComments(threads, thread, topic)); 
  
  });
}









