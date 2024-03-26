import { TopicType } from "../types/topicType.ts";
import { getThreadsFromTopic } from "../services/threadService.ts";
import { displayThreads } from "../modules/displayThreads.ts";

const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;
 
// export function displayTopics(topics: object):void{
export function displayTopicsTitles(topics: TopicType):void{
  for(const topic in topics){
    const topicTitle = topics[topic].title;
    // const topicDescription = topics[topic].description; //If needed
    displayTopicTitle(topicTitle);
  }
}


function displayTopicTitle(topic:string):void{
  const topicsContainer = document.querySelector('.topicsMenuWrapper') as HTMLDivElement;
  
  const topicHeaderBox = document.createElement('div'); 
  topicHeaderBox.classList.add('topicMenubox');
  topicHeaderBox.setAttribute('id', topic);
  topicHeaderBox.innerText = topic;
  topicsContainer.append(topicHeaderBox);

  topicHeaderBox.addEventListener('click', (event) => {
    event.preventDefault();
  
    const topicChoice = ((event.target as HTMLInputElement).id);
    const topicH2 = document.createElement('h2'); 
    topicH2.innerText = topic;
 
    clearTopic();
    topicHeaderContainer.append(topicH2);

    getThreadsFromTopic(topicChoice)
    .then(displayThreads);

  });
}








// export function displayComment(comment:CommentType):void{
//   console.log(comment);
//   console.log(comment.title);
//   console.log(comment.id);
//   console.log(comment[0].comments[0]);
  
//   console.log('inne i threads');
  
//   const threadsContainer = document.querySelector('.subjects') as HTMLDivElement;
//   const subjectBox = document.createElement('div');
//   const subjectTitle = document.createElement('h4');
//   const subjectIncipient= document.createElement('p');
//   const postUser = document.createElement('p')

//   subjectTitle.innerText = thread.title;
//   // subjectIncipient.innerText = post.comment.slice(0, 50) + '...';
//   // postUser.innerText = post.userName;

//   threadsContainer.append(subjectBox);
//   subjectBox.append(subjectTitle, subjectIncipient );

//   // for(const comment in comments){
//   //   console.log(thread);
//   //   const threadObject = threads[thread];
//   //   const threadComments = threads[thread].comments;
//   //   console.log(threadComments);
//   //   console.log(threadObject.comments);
//   //   // displayThread(threadObject);    
//   // }
// }



/*********************************
  Display Subjects in Topic
**********************************/

// export function displaySubjects(post:CommentType):void{
//   console.log('inne i subject');
  
//   const subjectsContainer = document.querySelector('.subjects') as HTMLDivElement;
//   const subjectBox = document.createElement('div');
//   const subjectTitle = document.createElement('h4');
//   const subjectIncipient= document.createElement('p');
//   const postUser = document.createElement('p')

//   subjectTitle.innerText = post.title;
//   subjectIncipient.innerText = post.comment;
//   subjectIncipient.innerText = post.comment.slice(0, 50) + '...';
//   // postUser.innerText = post.userName;

//   subjectsContainer.append(subjectBox);
//   subjectBox.append(subjectTitle, subjectIncipient );

// }


/*********************************
 Clear before get
**********************************/

function clearTopic():void{
  console.log('clearAll');
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  const subjects = document.querySelector('.subjects') as HTMLDivElement;

  postsContainer.innerHTML = '';
  subjects.innerHTML = '';
  topicHeaderContainer.innerHTML = '';
}



