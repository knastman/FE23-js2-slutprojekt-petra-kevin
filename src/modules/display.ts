import { getTopics } from "../services/topicService.ts";
import { topicType } from "../types/topicType.ts";
// import {getCommentsFromTopic} from "../services/commentService.ts";
// import {commentType} from "../types/commentType.ts";


/*********************************
  Display Topics
**********************************/

export function displayTopics(topics: topicType[]):void{
  for(const topic in topics){
    displayTopic(topic);
  }
}

function displayTopic(topic:string){
  // console.log(topic);
  const topicsContainer = document.querySelector('.topicsMenuWrapper') as HTMLDivElement;
  const topicHeader = document.createElement('div'); 
  topicHeader.innerText = topic;
  topicsContainer.append(topicHeader);
}



/***** Tanken (fast med comments/posts) som ej går göra *****/

// export function displayTopics(topics: topicType[]):void{
//   for(const topic in topics){
//     createTopicList(topic,topicsContainer );
//   }
// }


// function displayTopics({description, title }: ProductObject, topicsContainer: HTMLDivElement): void {
//   const topicHeader = document.createElement('div'); 
//   const topicDescription = document.createElement('div'); 
//   topicHeader.innerText = title;
//   topicDescription.innerText = description;
//   topicsMenuWrapper.append(topicHeader, topicDescription);
// }

/***** GRUNDEN som ej går göra SLUT *****/




// function displayTopic({title, description}:topicType){
//   console.log('topic i display topic en');
//   console.log('title');
//   console.log(title);
//   console.log('description');
//   console.log(description);
  
//   const topicHeader = document.createElement('div'); 
//   // const topicTitle = topic.title; 

//   // topicHeader.innerText = topic.title;
//   topicsMenuWrapper.append(topicHeader);
// }




// getTopics()
// .then((topics) => {
//   // console.log(topics);
//   displayTopics(topics);
// });



// export async function displayTopics() {
//   const topics = await getTopics();
//   for (const topic in topics) {
//     console.log(topic);
//   }
// }

// getTopics()
// .then(displayTopics)


// getTopics()
// .then((data) => {
//   console.log(data);
// });


// getTopics()
// .then((data) => {
//   console.log(data);
//   for (topic in data){
//       console.log(data[topic].title);
//   }
// });





// function createTopicList({id, title, thumbnail, description, price, stock, rating, brand, category, }: ProductObject, productsContainer: HTMLDivElement): void {
//   const productCard = document.createElement('article');

// }



// getTopics()
// .then((data) => {
//   console.log(data);
// });



  // for(const description in topics){
  //   // displayTopic(topic);
  //   // const topicDesc = topics[description];
  //   const topicDesc = topics[description];
  //   console.log('topicDesc');
  //   console.log(topicDesc);
  // }