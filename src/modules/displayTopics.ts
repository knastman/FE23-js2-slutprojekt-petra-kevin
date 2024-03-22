import { TopicType } from "../types/topicType.ts";
import { displayPosts } from "../modules/displayPosts.ts";
import { getCommentsFromTopic } from "../services/commentService.ts";

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
    // .then(displayTopicSubjects)
    .then(displayPosts);
    // .catch(displayError);

  });

}

/*********************************
 Clear before get
**********************************/

function clearTopic():void{
  console.log('clearAll');
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  const topicsWrapper = document.querySelector('.topicsWrapper') as HTMLDivElement;

  postsContainer.innerHTML = '';
  topicsWrapper.innerHTML = '';
  topicHeaderContainer.innerHTML = '';
  
}


