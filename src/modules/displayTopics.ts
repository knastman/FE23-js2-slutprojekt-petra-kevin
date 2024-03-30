import { TopicType } from "../types/topicType";
import { getThreadsFromTopic, getThreadById } from "../services/threadService";
import { displayThreads } from "../modules/displayThreads";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/renderLogin";

const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;
const topicContainer = document.querySelector('#topic') as HTMLDivElement;
 
// export function displayTopicsTitles(topics: TopicType):void{
export function displayTopicsTitles(topics: any):void{
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
  topicHeaderBox.setAttribute('data-navigo', ''); //Kevins tillägg
  topicHeaderBox.innerText = topic;
  // topicHeaderBox.innerHTML = `<a href="${topic}" data-navigo>${topic}</a>`;
  topicsContainer.append(topicHeaderBox);
  // topicHeaderBox.append(topicHeaderBoxLink);



  topicHeaderBox.addEventListener('click', (event) => {
    event.preventDefault();

    const topicChoice = ((event.target as HTMLInputElement).id);
    const topicH2 = document.createElement('h2'); 
    topicH2.innerText = topic;
    clearAll();
    topicHeaderContainer.append(topicH2);

    if (!isLoggedIn()) {
      showToast('Du måste vara inloggad för att se inlägg!');
      return;
    } //Kevins tillägg

    // getThreadsFromTopic(topicChoice)
    // // getThreads(topicChoice)
    // .then(displayThreads);


    getThreadsFromTopic(topicChoice)
    .then(threads => displayThreads(topicChoice, threads)); 
    


    // if (isLoggedIn()) {
    //   getThreads(topicChoice).then(displayThreads);
    // } 
    // else {
    //   console.log('Du måste vara inloggad för att se inlägg!');
    // }

  });
}


/*********************************
 Clear before display
**********************************/

function clearAll():void{
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







