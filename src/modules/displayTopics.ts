import { TopicType } from "../types/topicType.ts";

// export function displayTopics(topics: object):void{
export function displayTopics(topics: TopicType[]):void{
  for(const topic in topics){
    const topicTitle = topics[topic].title;
    // const topicDescription = topics[topic].description; //If needed
    displayTopic(topicTitle);
  }
}

function displayTopic(topic:string):void{
  const topicsContainer = document.querySelector('.topicsMenuWrapper') as HTMLDivElement;
  const topicHeaderBox = document.createElement('div'); 
  topicHeaderBox.classList.add('topicMenubox');
  topicHeaderBox.innerText = topic;
  topicsContainer.append(topicHeaderBox);
}



