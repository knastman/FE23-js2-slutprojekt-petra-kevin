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

