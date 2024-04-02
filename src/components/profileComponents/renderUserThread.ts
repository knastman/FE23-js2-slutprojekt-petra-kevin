import { getThreadData } from "../../services/servicesv2/threadService2";
import { threadType2 } from "../../types/typesv2/threadType2";
import { UserType2 } from "../../types/typesv2/userType2";


function threadTemplate(thread: threadType2, user: UserType2): string {
    return `
    <div class="thread">
            <a href="/threads/${thread.id}" data-navigo>${thread.title}</a>
    </div>
    `;
}


export async function renderUserThreads(user: UserType2): Promise<void> {
    const mainUserProfileThreads = document.querySelector(".userProfileThreads");
    if (!mainUserProfileThreads) return;
    mainUserProfileThreads.innerHTML = "";

    try {
        const threadData: threadType2[] = await getThreadData();
        const userThreads = threadData.filter((thread) => thread.userId === user.id);
        const sortedThreads = sortThreadsByDate(userThreads);
        const slicedThreads = sortedThreads.slice(0, 3);
        if (slicedThreads.length === 0) {
            return;
        }else{
        mainUserProfileThreads.innerHTML = "<h2>Trådar</h2>";
        }
        for (const thread of slicedThreads) {
            mainUserProfileThreads.innerHTML += threadTemplate(thread, user);
        }
    } catch (error) {
        console.error(error);
    }
}

function sortThreadsByDate(threads: threadType2[]): threadType2[] {
    return threads.sort((a, b) => b.timeStamp - a.timeStamp);
}