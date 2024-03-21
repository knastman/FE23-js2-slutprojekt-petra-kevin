import { getTopics } from "./services/topicService.ts";
import {displayTopics} from "./modules/display.ts"


getTopics()
.then(displayTopics);


