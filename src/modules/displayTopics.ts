import { TopicType } from "../types/topicType.ts";
import { CommentType }  from "../types/commentType.ts";
import { getCommentsFromTopic } from "../services/commentService.ts";
import { displayPosts } from "../modules/displayPosts.ts";


const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;
 
// export function displayTopics(topics: object):void{
export function displayTopicsTitles(topics: TopicType[]):void{
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

    getCommentsFromTopic(topicChoice)
    .then(displayPosts);
    // .catch(displayError);

  });
}



/*********************************
  Display Subjects in Topic
**********************************/

export function displaySubjects(post:CommentType):void{
  console.log('inne i subject');
  
  const subjectsContainer = document.querySelector('.subjects') as HTMLDivElement;
  const subjectBox = document.createElement('div');
  const subjectTitle = document.createElement('h4');
  const subjectIncipient= document.createElement('p');
  const postUser = document.createElement('p')

  subjectTitle.innerText = post.title;
  subjectIncipient.innerText = post.comment;
  subjectIncipient.innerText = post.comment.slice(0, 50) + '...';
  // postUser.innerText = post.userName;

  subjectsContainer.append(subjectBox);
  subjectBox.append(subjectTitle, subjectIncipient );

}


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



