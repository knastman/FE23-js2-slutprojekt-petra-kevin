// import { getCommentsFromTopic } from "./services/commentService.ts";
import { getTopics } from "./services/topicService.ts";
import { displayTopics } from "./modules/displayTopics.ts"


getTopics()
.then(displayTopics);
