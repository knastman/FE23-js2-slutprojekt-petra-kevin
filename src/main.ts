import { getTopics } from "./services/topicService";
import { getForumData } from "./services/servicesv2/forumService2";
import { displayTopics } from "./modules/displayTopics2";
import { displayStartContent } from "./modules/displayStartContent";
// import { displayPageInfo } from "./modules/displayInfoPages.ts";
import { getAllUsers, createUser } from "./services/userService";
// import { attachRegisterEvents } from "./components/renderRegister.js";

///////////////////////////////////

import { setupRoutes } from "./routes/routes";
import { renderNav } from "./components/topNavComponents/renderNav";
import { renderFooter } from "./components/renderFooter";

import Navigo from "navigo";
import { getUserData } from "./services/servicesv2/userService2";
import { newComment } from "./services/servicesv2/commentService2";
import { createThreadData, getThreadById, newThread } from "./services/servicesv2/threadService2";
import { threadType2 } from "./types/typesv2/threadType2";


document.addEventListener("DOMContentLoaded", (event) => {
  const router = new Navigo("/", { hash: false });
  event.preventDefault();
  setupRoutes(router);
});

/*********************************
  Interface 
**********************************/

//Petra's code
// getTopics().then(displayTopicsTitles);
getForumData().then(displayTopics);


