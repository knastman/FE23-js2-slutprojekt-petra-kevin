import { ThreadType2 } from "../types/threadType";
import { ForumType } from "../types/forumType";

import { getThreadData, getThreadById } from "../services/servicesv2/threadService2";
import { displayThreads } from "../modules/displayThreads";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/credentialsComponents/renderLogin";
import Navigo from "navigo";


const topicContainer = document.querySelector('#topic') as HTMLDivElement;
const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;

export async function displayTopics(topics: ForumType[], router: Navigo):Promise<void>{
  for(const topic of topics){
    displayTopicTitle(topic, router);
  }
}

async function  displayTopicTitle(topic:ForumType, router: Navigo):Promise<void>{
  clearMain();
  const topicsContainer = document.querySelector('.topicsMenuWrapper') as HTMLDivElement;
  const topicHeaderBox = document.createElement('div');
  topicHeaderBox.classList.add('topicMenubox');
  //Links 
  const topicLink = document.createElement('a'); 
  // topicLink.setAttribute('id', topic.title);
  topicLink.setAttribute('id', topic.id.toString() );
  topicLink.setAttribute('href', `/topic/${topic.id}`);        
  topicLink.setAttribute('data-navigo', '');   

  topicLink.innerText = topic.title;
  // topicHeaderBox.innerHTML = `<a href="${topic}" data-navigo>${topic}</a>`;
  topicsContainer.append(topicHeaderBox);
  topicHeaderBox.append(topicLink);



  topicLink.addEventListener('click', (event) => {
    event.preventDefault();

    if (isLoggedIn()) {
      const topicChoiceId = ((event.target as HTMLDivElement).id);
      // console.log(topicChoiceId);
      
      const topicHeader = document.createElement('h2'); 
      const topicDescription = document.createElement('p'); 
      topicDescription.classList.add('topicDesc');
      topicHeader.innerText = topic.title;
      topicDescription.innerText = topic.description;

      clearAll();
     
      topicHeaderContainer.append(topicHeader, topicDescription);

      getThreadData()
        .then(threadData => threadData.filter((thread) => thread.forumId === topic.id))
        // .then(displayThreads)
        .then((threads) => displayThreads(threads, topic, router)); 

    } 
    else {
      showToast('Du måste vara inloggad för att se inlägg!');
      return;
    }

    router.updatePageLinks();
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
  const subjects = document.querySelector('.subjects') as HTMLDivElement;

  postsContainer.innerHTML = '';
  subjects.innerHTML = '';
  topicHeaderContainer.innerHTML = '';

  const userContainer = document.querySelector('.userContainer') as HTMLDivElement;
  const userProfileComments = document.querySelector('.userProfileComments') as HTMLDivElement;

  if (!userContainer) return;   
    userContainer.innerHTML = '';
  if (!userProfileComments) return; 
    userProfileComments.innerHTML = '';

}

export function clearMain():void{
  const mainContent = document.querySelector('.mainContent') as HTMLDivElement;
  mainContent.innerHTML = '';
}

