import { getTopics } from "./services/topicService.ts";
import { displayTopicsTitles } from "./modules/displayTopics.ts";
import { displayStartContent } from "./modules/displayStartContent.ts";
// import { displayPageInfo } from "./modules/displayInfoPages.ts";
import {
  isLoggedIn,
  loginTemplate,
  attachLoginEvents,
} from "./components/login.ts";
import { getAllUsers, createUser } from "./services/UserService";
import { registerTemplate, attachRegisterEvents } from "./components/register";


///////////////////////////////////

import { setupRoutes } from "./routes/routes";

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  setupRoutes();
});




/*********************************
  Interface 
**********************************/
//Petra's code
displayStartContent();

getTopics()
.then(displayTopicsTitles); 
// .catch(displayError);




