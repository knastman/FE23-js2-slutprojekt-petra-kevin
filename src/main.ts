import { getTopics } from "./services/topicService.ts";
import { displayTopicsTitles } from "./modules/displayTopics.ts";


getTopics()
.then(displayTopicsTitles); 
// .catch(displayError);


