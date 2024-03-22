import { getCommentsFromTopic } from "./services/commentService.ts";
import { getTopics } from "./services/topicService.ts";
import { displayTopicsTitles } from "./modules/displayTopics.ts"
import { displayPosts } from "./modules/displayPosts.ts"


getTopics()
.then(displayTopicsTitles); 
// .catch(displayError);


// getCommentsFromTopic(currentTopic)
// getCommentsFromTopic('Resor')
// .then(displayPosts);
