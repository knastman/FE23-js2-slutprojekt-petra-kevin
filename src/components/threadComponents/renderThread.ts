import Navigo from "navigo";
import { displayThreads } from "../../modules/displayThreads";
import { getForumData } from "../../services/servicesv2/forumService2";
import { getThreadData } from "../../services/servicesv2/threadService2";
import { ForumType } from "../../types/forumType";
import { ThreadType2 } from "../../types/threadType";
import { showToast } from "../../utils/utils";



export async function renderThreads(id: string, router: Navigo){
    const idToNumber = parseInt(id);
    const mainContent = document.querySelector(".mainContent");
    if (!mainContent) return;
    mainContent.innerHTML = "";
    try {
        const threads: ThreadType2[] = await getThreadData();
        const topicThreads: ThreadType2[] = threads.filter((thread) => thread.forumId === idToNumber);

        const allForums: ForumType[] = await getForumData();

        const chosenForum: ForumType | undefined  = allForums.find((forum) => forum.id === idToNumber)
        if(!chosenForum) return;
       
    displayThreads(topicThreads, chosenForum, router);
    } catch (error) {
        showToast('Kunde inte hämta trådar', 5000);
    }
} 