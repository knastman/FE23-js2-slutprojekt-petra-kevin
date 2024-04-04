import Navigo from "navigo";
import { getForumData } from "../../services/servicesv2/forumService2";
import { ForumType } from "../../types/forumType";
import { displayTopics } from "../../modules/displayTopics";



export async function renderTopics(router: Navigo){
    const topics: ForumType[] = await getForumData();
    const topicsMenuWrapper = document.querySelector('.topicsMenuWrapper') as HTMLDivElement;
    topicsMenuWrapper.innerHTML = '';
    
    displayTopics(topics, router);
}