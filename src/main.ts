import { getTopics } from "./services/topicService";
import { displayTopicsTitles } from "./modules/displayTopics";
import { displayStartContent } from "./modules/displayStartContent";
// import { displayPageInfo } from "./modules/displayInfoPages.ts";
import { getAllUsers, createUser } from "./services/userService";
// import { attachRegisterEvents } from "./components/renderRegister.js";

///////////////////////////////////

import { setupRoutes } from "./routes/routes";
import { renderNav } from "./components/renderNav";
import { renderFooter } from "./components/renderFooter";

import Navigo from "navigo";

document.addEventListener("DOMContentLoaded", (event) => {
  const router = new Navigo("/", { hash: false });
  event.preventDefault();
  renderNav(router);
  setupRoutes(router);
  renderFooter();
});

/*********************************
  Interface 
**********************************/

//Petra's code
getTopics().then(displayTopicsTitles);

// import { createNewThread, addThreadToTopic } from "./services/threadService";
// import { addCommentToThread } from "./services/commentService";

// createNewThread('Testar att göra en thread och detta är ämnet', 'Petra');
// console.log('Syns detta i konsolen');


// addThreadToTopic({user:'Petra', title:'Testar göra thread', postText:'Testar lite, detta är själva texten till posten som jag vill ska bli lite längre och jag orkar itne klippa in fillerama just nu.'}, 'Samhälle');


// addCommentToThread('Samhälle','-NuG6ZLkNMFCmhlj08E-', {
//   userName: 'Petra',
//   comment: 'Commenttexten här',
//   title:'Titlen här'
// } )

// timeStamp: number;