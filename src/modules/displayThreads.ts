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
import { getThreadData, newThread } from "../services/servicesv2/threadService2";

import { showToast } from "../utils/utils";
import { getLoggedInUser, isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { ForumType } from "../types/forumType";


import { getUserData } from "../services/servicesv2/userService2";
import { UserType2 } from "../types/userType";

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
  createThreadForm();

  const threadId = parseInt(((event.target as HTMLAnchorElement).id));
  const topic = ((event.target as HTMLElement).title);  

  getCommentData()
  .then(commentdata => commentdata.filter((comment) => comment.threadId === threadId))
  .then(sortComments2)
  .then((comments) => displayPosts(comments, topic, threadTitle ));  

  // formContainer.innerHTML = '';

});


/*********************************
  Form for threads
**********************************/

//EJ KLAR
const formContainer = document.querySelector('#createThreadFormContainer') as HTMLDivElement;
// const form = document.querySelector('#createThreadForm') as HTMLDivElement;

function createThreadForm():void{
  const form = document.createElement('form');
  form.setAttribute('id', 'createThreadForm');

  form.innerHTML = `
      <div>
      <label for="subjectHeaderInput">Ämne:</label>
      <input class="" type="text" name="subjectHeaderInput" placeholder="Vad handlar ditt inlägg om" id="subjectHeaderInput">
    </div>
    <div>
      <label for="postText">Inlägg:</label>
      <textarea id="postTextInput" name="Meddelande" placeholder="Ditt inlägg här" rows="5" cols="33" required minlength="4" maxlength="600"></textarea>
    </div>
    <div><button type="submit" id="postSendButton">Skicka</button></div>
  `
  formContainer.append(form);

  //EJ KLAR
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const currentUser = getLoggedInUser();
    console.log(currentUser);

    getUserData()
    .then(userData => userData.find((user) => user.name === currentUser)) 
    .then();
    
    const subjectInput:string = (form.querySelector('#subjectHeaderInput') as HTMLInputElement).value.trim();
    const postTextInput = (form.querySelector('#postTextInput') as HTMLInputElement);

    // newThread({
    //   title: subjectInput,
    //   description: '',
    //   userId: user.id,
    //   forumId: topicId
    // })

    newThread(subjectInput, '', 8688981, topicId) //Denna måste innehålla postdata också
    // .then(displayPosts)


    form.reset();
  })

}




// export function getThreadsAfterPosting(){
//   // clearAll();
//   clearPosts();

//   getThreadById(threadId, topic)
//   .then(displayThreadPost);
//   // .catch(displayError)

// }
