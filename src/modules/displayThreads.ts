// import { CommentType }  from "../types/commentType";
import { CommentType2 }  from "../types/typesv2/commentType2";
import { ThreadType2 } from "../types/threadType";
// import { displayComments, displayThreadPost, clearPosts } from "./displayComments";
import { displayPosts, clearPosts } from "./displayComments";
import { clearAll, clearMain} from "./displayTopics";

// import { getAllCommentsFromThread } from "../services/commentService";
import { getCommentData } from "../services/servicesv2/commentService2";
import { sortComments2 } from "../utils/sortComments";

// import { getThreadById, createNewThread, createNewThreadWithText, addThreadToTopic } from "../services/threadService";
import { getThreadData } from "../services/servicesv2/threadService2";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { ForumType } from "../types/forumType";

/*********************************
  Display Threads in Topic
**********************************/

// export function displayThreads(threads:threadType2[]):void{
export function displayThreads(threads:ThreadType2[], topic:ForumType):void{
  for(const thread of threads.slice(0, 5)){    
    getCommentData()
    // .then(console.log)
    .then(sortComments2)
    .then(commentData => commentData.find((comment) => comment.threadId === thread.id!)) 
    .then(comment => {displayThread(thread, comment!, topic)})
  }
}


const threadsContainer = document.querySelector('.subjects') as HTMLDivElement;
let threadTitle:string; //Kolla om det går få med threadtitle på bättre sätt

function displayThread(thread:ThreadType2, threadComment:CommentType2, topic:ForumType):void{  
  threadTitle = thread.title;

  const subjectBox = document.createElement('div');
  const subjectTitle = document.createElement('h4');
  const subjectLink = document.createElement('a'); 
  // subjectTitle.setAttribute('id', topic.title);

  subjectLink.setAttribute('id', thread.id.toString() );
  subjectLink.setAttribute('href', `/thread/${thread.id}`);        
  subjectLink.setAttribute('data-navigo', '');  
  subjectLink.setAttribute('title', topic.title );
  // subjectLink.setAttribute('title', thread.title );

  const subjectIncipient = document.createElement('p');
  const postUser = document.createElement('p')
  subjectLink.innerText = thread.title;

  if(threadComment !== undefined) {
    subjectIncipient.innerText = threadComment.comment.slice(0, 50) + '...';
  }

  threadsContainer.append(subjectBox);
  subjectBox.append(subjectTitle, subjectIncipient );
  subjectTitle.append(subjectLink );

}


threadsContainer.addEventListener('click', (event) => {
  // const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  event.preventDefault();
  clearPosts();

  const threadId = parseInt(((event.target as HTMLAnchorElement).id));
  const topic = ((event.target as HTMLElement).title);  

  getCommentData()
  .then(commentdata => commentdata.filter((comment) => comment.threadId === threadId))
  .then(sortComments2)
  .then((comments) => displayPosts(comments, topic, threadTitle ));  


});




// // Formulär för threads
// const form = document.querySelector('#createThreadForm') as HTMLDivElement;

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const subjectInput:string = (form.querySelector('#subjectHeaderInput') as HTMLInputElement).value.trim();
//   const postTextInput:string = (form.querySelector('#postText') as HTMLInputElement).value.trim();

//   createNewThreadWithText(subjectInput, postTextInput, 'Petra'); //Lägg till dynamiskt

//   form.reset();
// })


// export function getThreadsAfterPosting(){
//   // clearAll();
//   clearPosts();

//   getThreadById(threadId, topic)
//   .then(displayThreadPost);
//   // .catch(displayError)

// }


  // addThreadToTopic({user:'Petra', title:'Testar göra thread', postText:'Testar lite Text'}, 'Samhälle');

 
  // const newTask = {
  //   assigned: "",
  //   category: category, 
  //   status: "to do", 
  //   task: task 
  // }

  // postTask(newTask)
  //   .then(clearAndGetTasks)

// }