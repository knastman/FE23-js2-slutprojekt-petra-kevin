
import { CommentType2 }  from "../types/commentType";
import { ThreadType2 } from "../types/threadType";
import { displayPosts, createAndAddClass } from "./displayComments";
import { clearAll, clearMain, clearPosts} from "./clearContent";
import { getCommentData } from "../services/servicesv2/commentService2";
import { sortComments2 } from "../utils/sortComments";
import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { ForumType } from "../types/forumType";

import Navigo from "navigo";

/*********************************
  Display Threads in Topic
**********************************/

// export function displayThreads(threads:threadType2[]):void{
export function displayThreads(threads:ThreadType2[], topic:ForumType, router: Navigo): void{
  
  if (isLoggedIn()) {

    for(const thread of threads.slice(0, 5)){    
      getCommentData()
      // .then(console.log)
      .then(sortComments2)
      .then(commentData => commentData.find((comment) => comment.threadId === thread.id!)) 
      .then(comment => {displayThread(thread, comment!, topic)})
      router.updatePageLinks();
    }

  } 
  else {
    showToast('Du måste vara inloggad för att se forumet!');
    return;
  }
}


const threadsContainer = document.querySelector('.subjects') as HTMLDivElement;
let threadTitle:string; //Kolla om det går få med threadtitle på bättre sätt
let topicId:number;//Kolla om det går få med threadtitle på bättre sätt

function displayThread(thread:ThreadType2, threadComment:CommentType2, topic:ForumType):void{  
  threadTitle = thread.title;
  topicId = topic.id;

  const subjectBox = document.createElement('div');
  const subjectTitle = document.createElement('h4');
  const subjectLink = document.createElement('a'); 
  // subjectTitle.setAttribute('id', topic.title);

  subjectLink.setAttribute('id', thread.id.toString() );
  subjectLink.setAttribute('href', `/thread/${thread.id}`);        
  subjectLink.setAttribute('data-navigo', '');  
  subjectLink.setAttribute('title', topic.title );

  const subjectIncipient = document.createElement('p');
  const postUser = document.createElement('p')
  subjectLink.innerText = thread.title;

  if(threadComment !== undefined) {
    subjectIncipient.innerText = (threadComment.comment.slice(0, 50)).trim() + '...';
  }

  threadsContainer.append(subjectBox);
  subjectBox.append(subjectTitle, subjectIncipient );
  subjectTitle.append(subjectLink );
}


threadsContainer.addEventListener('click', (event) => {
  // const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  const formContainer = document.querySelector('#formContainer') as HTMLDivElement;
  event.preventDefault();
  clearPosts();
  formContainer.innerHTML = '';

  const threadId = parseInt(((event.target as HTMLAnchorElement).id));
  const topic = ((event.target as HTMLElement).title); 


  getCommentData()
  .then(commentdata => commentdata.filter((comment) => comment.threadId === threadId))
  .then(sortComments2)
  .then((comments) => displayPosts(comments, topic, threadTitle ));  

});











