import { TopicType } from "../types/topicType";
import { ForumType } from "../types/typesv2/forumType2";
import { threadType2 } from "../types/typesv2/threadType2";
import { getThreadData, getThreadById } from "../services/servicesv2/threadService2";
import { displayThreads } from "../modules/displayThreads2";

import { showToast } from "../utils/utils";
import { isLoggedIn } from "../components/renderLogin";

//Petra's code
const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;
const topicContainer = document.querySelector('#topic') as HTMLDivElement;
 
//Petra's code
// export function displayTopicsTitles(topics: TopicType):void{
export function displayTopics(topics: ForumType[]):void{
  for(const topicId in topics){
    const topicOBject = topics[topicId];
    // const topicTitle = topics[topicId].title;
    // const topicDescription = topics[topicId].description;
    // console.log(topicTitle);
    // console.log(topicDescription);
    displayTopicTitle(topicOBject);
  }
}

//Petra's code
function displayTopicTitle(topic:ForumType):void{
  const topicsContainer = document.querySelector('.topicsMenuWrapper') as HTMLDivElement;
  const topicHeaderBox = document.createElement('div');
  topicHeaderBox.classList.add('topicMenubox');
  const topicLink = document.createElement('a'); 
  // topicLink.setAttribute('id', topic.title);
  topicLink.setAttribute('id', topic.id.toString() );
  topicLink.setAttribute('href', `/topic/${topic.title}`);        
  topicLink.setAttribute('data-navigo', '');   

  topicLink.innerText = topic.title;
  // topicHeaderBox.innerHTML = `<a href="${topic}" data-navigo>${topic}</a>`;
  topicsContainer.append(topicHeaderBox);
  topicHeaderBox.append(topicLink);

  topicLink.addEventListener('click', (event) => {
    event.preventDefault();

    if (isLoggedIn()) {
      // const topicChoiceId = ((event.target as HTMLDivElement).id);
      // console.log(topicChoiceId);

      // const topicId = topic.id;
      // console.log(topicId);
      
      const topicHeader = document.createElement('h2'); 
      const topicDescription = document.createElement('p'); 
      topicDescription.classList.add('topicDesc');
      topicHeader.innerText = topic.title;
      topicDescription.innerText = topic.description;
      clearAll();
      topicHeaderContainer.append(topicHeader, topicDescription);

      getThreadData()
        .then(threadData => threadData.filter((thread) => thread.forumId === topic.id))
        .then(displayThreads)
        // .then((threads) => displayThreads(topic, threads));  //Om jag vill ha med topic

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