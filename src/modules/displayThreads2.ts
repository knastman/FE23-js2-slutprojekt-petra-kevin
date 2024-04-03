// import { CommentType }  from "../types/commentType";
import { CommentType2 }  from "../types/typesv2/commentType2";
import { ThreadType, ThreadWithId } from "../types/threadType";
import { threadType2 } from "../types/typesv2/threadType2";
// import { displayComments, displayThreadPost, clearPosts } from "./displayComments";
import { displayPosts, clearPosts } from "./displayComments2";
import { clearAll} from "./displayTopics2";

// import { getAllCommentsFromThread } from "../services/commentService";
import { getCommentData } from "../services/servicesv2/commentService2";
import { sortComments2 } from "../utils/sortComments";

// import { getThreadById, createNewThread, createNewThreadWithText, addThreadToTopic } from "../services/threadService";
import { getThreadData } from "../services/servicesv2/threadService2";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/credentialsComponents/renderLogin";

/*********************************
  Display Threads in Topic
**********************************/





//Petra's code
export function displayThreads(threads:threadType2[]):void{
  for(const thread of threads.slice(0, 5)){
    // displayThread(thread, thread.id, topic); 
    console.log(thread);
    
    getCommentData()
    // .then(console.log)
    .then(sortComments2)
    .then(commentData => commentData.find((comment) => comment.threadId === thread.id))
    .then(comment => {
      if(comment !== undefined) {
        displayThread(thread, comment)
      }
    })
    // .then(comment => comment !== undefined ifsantgör: displayThread(thread, comment) annars:  null)
    // .then(displayThread)
    // .then(console.log)
    // .then(commentData => commentData.filter((comment) => comment.id === thread.id))

    // displayThread(thread); 
  }
}

//Petra's code
const threadsContainer = document.querySelector('.subjects') as HTMLDivElement;

function displayThread(thread:threadType2, comment:CommentType2):void{  

  const subjectBox = document.createElement('div');
  const subjectTitle = document.createElement('h4');
  subjectTitle.setAttribute('id', thread.id.toString());
  subjectTitle.setAttribute('data-navigo', '');
  const subjectIncipient= document.createElement('p');
  const postUser = document.createElement('p')

  subjectTitle.innerText = thread.title;
  subjectIncipient.innerText = comment.comment.slice(0, 50) + '...';

  threadsContainer.append(subjectBox);
  subjectBox.append(subjectTitle, subjectIncipient );

  threadsContainer.addEventListener('click', (event) => {
    // const postsContainer = document.querySelector('#posts') as HTMLDivElement;
    event.preventDefault();
    clearPosts();
  
    // const threadId = ((event.target as HTMLInputElement).id);

    getCommentData()
    .then(commentdata => commentdata.filter((comment) => comment.threadId
     === thread.id))
    .then(displayPosts);


    
    // findThreadById(threadId, topic)
    // .then(displayThreadPost);

    // getAllCommentsFromThread(topic, threadId)
    // .then(threads => displayPosts(threads, thread, topic, threadId));

  });
}

