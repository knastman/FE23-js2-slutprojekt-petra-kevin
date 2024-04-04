
import { getForumData } from "./services/servicesv2/forumService2";
import { displayTopics } from "./modules/displayTopics";
// import { displayStartContent } from "./modules/displayStartContent";
// import { displayPageInfo } from "./modules/displayInfoPages.ts";

// import { attachRegisterEvents } from "./components/renderRegister.js";

///////////////////////////////////
import { setupRoutes } from "./routes/routes";
import Navigo from "navigo";



const router = new Navigo("/", { hash: false });
setupRoutes(router);


/*********************************
  Interface 
**********************************/

getForumData().then(displayTopics);
