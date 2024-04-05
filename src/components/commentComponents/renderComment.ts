import Navigo from "navigo";
import { getCommentData } from "../../services/servicesv2/commentService2";
import { CommentType2 } from "../../types/commentType";
import { displayPosts } from "../../modules/displayComments";
import { ForumType } from "../../types/forumType";
import { getForumData } from "../../services/servicesv2/forumService2";
import { ThreadType2 } from "../../types/threadType";
import { getThreadData } from "../../services/servicesv2/threadService2";
import { showToast } from "../../utils/utils";

//Kevin's code
export async function renderComments(id: string, router: Navigo){
    const idToNumber: number = parseInt(id);
    const mainContent = document.querySelector(".mainContent") as HTMLDivElement;
    if (!mainContent) return;
    mainContent.innerHTML = "";
    try{
        const comments: CommentType2[] = await getCommentData();
        const topicComments: CommentType2[] = comments.filter((comment) => comment.threadId === idToNumber);
    
        const threads: ThreadType2[] = await getThreadData();
        const thread: ThreadType2 | undefined = threads.find((thread) => thread.id === topicComments[0].threadId);
        if (!thread) return;
        const threadTitle: string = thread.title;
    
        const forum: ForumType[] = await getForumData();
        const forumId: number = thread.forumId;
        const forumName: string | undefined = forum.find((forum) => forum.id === forumId)?.title
        if (!forumName) return;
    
        displayPosts(topicComments, forumName ,threadTitle);
    }catch(error){
        showToast('Kunde inte hämta kommentarer', 5000);
    }
   
}