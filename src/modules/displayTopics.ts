import { TopicType } from "../types/topicType";
import { getThreadsFromTopic, getThreadById } from "../services/threadService";
import { displayThreads } from "../modules/displayThreads";
// import {isLoggedIn} from "../components/renderlogin";
import { ThreadType } from "../types/threadType";
import { ThreadWithId } from "../types/threadType";

import { showToast } from "../utils/utils";
import {isLoggedIn } from "../components/renderLogin";

const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;
const topicContainer = document.querySelector('#topic') as HTMLDivElement;
 
// export function displayTopics(topics: object):void{
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
  // const topicHeaderBoxLink = document.createElement('a'); 
  topicHeaderBox.classList.add('topicMenubox');
  topicHeaderBox.setAttribute('id', topic);
  topicHeaderBox.setAttribute('data-navigo', ''); //Kevins tillägg
  topicHeaderBox.innerText = topic;
  // topicHeaderBox.innerHTML = `<a href="${topic}" data-navigo>${topic}</a>`;
  topicsContainer.append(topicHeaderBox);
  // topicHeaderBox.append(topicHeaderBoxLink);

  topicHeaderBox.addEventListener('click', (event) => {

    if (!isLoggedIn()) {
      showToast('Du måste vara inloggad för att se inlägg!');
      return;
    } //Kevins tillägg

    event.preventDefault();
  
    const topicChoice = ((event.target as HTMLInputElement).id);
    const topicH2 = document.createElement('h2'); 
    topicH2.innerText = topic;
 
    clearTopic();
    topicHeaderContainer.append(topicH2);

    getThreadsFromTopic(topicChoice)
    // getThreads(topicChoice)
    .then(displayThreads);
    


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

function clearTopic():void{
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







