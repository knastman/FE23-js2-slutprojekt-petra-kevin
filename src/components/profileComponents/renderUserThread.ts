import Navigo from "navigo";
import { getThreadData } from "../../services/servicesv2/threadService2";
import { ThreadType2 } from "../../types/threadType";
import { UserType2 } from "../../types/userType";
import { showToast } from "../../utils/utils";

//Kevin's code
function threadTemplate(thread: ThreadType2): string {
    return `
    <div class="thread">
            <a href="/thread/${thread.id}" data-navigo>${thread.title}</a>
    </div>
    `;
}

//Kevin's code
export async function renderUserThreads(user: UserType2, router: Navigo): Promise<void> {
    const mainUserProfileThreads = document.querySelector(".userProfileThreads");
    if (!mainUserProfileThreads) return;
    mainUserProfileThreads.innerHTML = "";
    try {
        const threadData: ThreadType2[] = await getThreadData();
        const userThreads = threadData.filter((thread) => thread.userId === user.id);
        const sortedThreads = sortThreadsByDate(userThreads);
        const slicedThreads = sortedThreads.slice(0, 3);
        if (slicedThreads.length === 0) {
            return;
        }else{
        mainUserProfileThreads.innerHTML = "<h2>Trådar</h2>";
        }
        for (const thread of slicedThreads) {
            mainUserProfileThreads.innerHTML += threadTemplate(thread);
        }

        router.updatePageLinks();
    } catch (error) {
        console.error(error);
        showToast("Något gick fel, försök igen senare", 5000);
    }
}
//Kevin's code
function sortThreadsByDate(threads: ThreadType2[]): ThreadType2[] {
    return threads.sort((a, b) => b.timeStamp - a.timeStamp);
}