import { getTopics } from "./services/topicService.ts";
import { displayTopicsTitles } from "./modules/displayTopics.ts";
import { displayStartContent } from "./modules/displayStartContent.ts";
// import { displayPageInfo } from "./modules/displayInfoPages.ts";
import { getAllUsers, createUser } from "./services/UserService";
import {
  registerTemplate,
  attachRegisterEvents,
} from "./components/renderRegister.js";

///////////////////////////////////

import { setupRoutes } from "./routes/routes";
import { renderNav } from "./components/renderNav";
import { renderFooter } from "./components/renderFooter";
import { renderTopicsMenu } from "./components/renderTopicsMenu.js";

import Navigo from "navigo";

document.addEventListener("DOMContentLoaded", (event) => {
  const router = new Navigo("/", { hash: false });
  event.preventDefault();
  renderNav(router);
  renderTopicsMenu(router);
  setupRoutes();
  renderFooter();
});

/*********************************
  Interface 
**********************************/
//Petra's code
displayStartContent();

getTopics().then(displayTopicsTitles);
// .catch(displayError);
