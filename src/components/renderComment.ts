import { getCommentData } from "../services/servicesv2/commentService2";
import { CommentType2 } from "../types/commentType";


export async function renderComments(id: string){
    const idToNumber: number = parseInt(id);
    const mainContent = document.querySelector(".mainContent") as HTMLDivElement;
    if (!mainContent) return;
    mainContent.innerHTML = "";

    const comments: CommentType2[] = await getCommentData();
    const topicComments: CommentType2[] = comments.filter((comment) => comment.threadId === idToNumber);

   // petras kod här typ  displayComments(topicComments);
}