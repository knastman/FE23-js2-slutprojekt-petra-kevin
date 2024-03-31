import { TopicType } from "../types/topicType";
import { getThreadsFromTopic, getThreadById } from "../services/threadService";
import { displayThreads } from "../modules/displayThreads";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/renderLogin";


//Petra's code
const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;
const topicContainer = document.querySelector('#topic') as HTMLDivElement;
 
//Petra's code
// export function displayTopicsTitles(topics: TopicType):void{
export function displayTopicsTitles(topics: any):void{
  
  for(const topic in topics){
    const topicOBject = topics[topic];
    const topicTitle = topics[topic].title;
    const topicDescription = topics[topic].description;
    console.log(topics[topic]);
    
    
    // const topicDescription = topics[topic].description; //If needed
    displayTopicTitle(topicOBject);
  }
}

//Petra's code
function displayTopicTitle(topic:TopicType):void{
  const topicsContainer = document.querySelector('.topicsMenuWrapper') as HTMLDivElement;
  const topicHeaderBox = document.createElement('div');
  topicHeaderBox.classList.add('topicMenubox');
  const topicHeaderBoxLink = document.createElement('a'); 
  topicHeaderBoxLink.setAttribute('id', topic.title);
  topicHeaderBoxLink.setAttribute('href', `/topic/${topic.title}`);        
  topicHeaderBoxLink.setAttribute('data-navigo', '');   

  topicHeaderBoxLink.innerText = topic.title;
  // topicHeaderBox.innerHTML = `<a href="${topic}" data-navigo>${topic}</a>`;
  topicsContainer.append(topicHeaderBox);
  topicHeaderBox.append(topicHeaderBoxLink);

  topicHeaderBoxLink.addEventListener('click', (event) => {
    event.preventDefault();

    // getThreadsFromTopic(topicChoice)
    // .then(threads => displayThreads(topicChoice, threads)); 

    if (isLoggedIn()) {
      const topicChoice = ((event.target as HTMLInputElement).id);
      const topicH2 = document.createElement('h2'); 
      const topicDescription = document.createElement('p'); 
      topicDescription.classList.add('topicDesc');
      topicH2.innerText = topic.title;
      topicDescription.innerText = topic.description;
      clearAll();
      topicHeaderContainer.append(topicH2, topicDescription);

      getThreadsFromTopic(topicChoice)
      .then(threads => displayThreads(topicChoice, threads)); 
    } 
    else {
      showToast('Du måste vara inloggad för att se inlägg!');
      return;
    }

  });
}


/*********************************
 Clear before display
**********************************/

//Petra's code
export function clearAll():void{
  topicContainer.classList.remove('hide');
  topicContainer.classList.add('flex');
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  const postsUserContainer = document.querySelector('#postsUser') as HTMLDivElement;
  const mainUserProfile = document.querySelector('#mainUserProfile') as HTMLDivElement;
  const subjects = document.querySelector('.subjects') as HTMLDivElement;

  mainUserProfile.innerHTML = '';
  postsContainer.innerHTML = '';
  postsUserContainer.innerHTML = '';
  subjects.innerHTML = '';
  topicHeaderContainer.innerHTML = '';
}







