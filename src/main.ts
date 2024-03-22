import { getCommentsFromTopic } from "./services/commentService.ts";
import { getTopics } from "./services/topicService.ts";
import { displayTopics } from "./modules/displayTopics.ts"
import { displayPosts } from "./modules/displayPosts.ts"


getTopics()
.then(displayTopics); //Eftersom funktionen inte returnerar ngt så borde den väl vara void? /P
// .catch(displayError);


// getCommentsFromTopic(currentTopic)
getCommentsFromTopic('Resor')
.then(displayPosts);
// .catch(displayError);
