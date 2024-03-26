import { getAllCommentsFromThread } from "./services/commentService.ts";
import { getTopics } from "./services/topicService.ts";
import { displayTopicsTitles } from "./modules/displayTopics.ts";
import {
  isLoggedIn,
  loginTemplate,
  attachLoginEvents,
} from "./components/login.ts";
import { getAllUsers, createUser } from "./services/UserService";
import { registerTemplate, attachRegisterEvents } from "./components/register";

//getTopics().then(displayTopicsTitles());
// .catch(displayError);


// getCommentsFromTopic(currentTopic)
// getCommentsFromTopic('Resor')
// .then(displayPosts);

///////////////////////////////////

import { setupRoutes } from "./routes/routes";

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  setupRoutes();
});

