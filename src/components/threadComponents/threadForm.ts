import Navigo from "navigo";
import { createThreadData, newThread } from "../../services/servicesv2/threadService2";
import { getUserData } from "../../services/servicesv2/userService2";
import { ThreadType2 } from "../../types/threadType";
import { UserType2 } from "../../types/userType";
import { showToast } from "../../utils/utils";
import { getLoggedInUser } from "../credentialsComponents/renderLogin";
import { CommentType2 } from "../../types/commentType";
import { createCommentData, newComment } from "../../services/servicesv2/commentService2";
import { getForumData } from "../../services/servicesv2/forumService2";
import { ForumType } from "../../types/forumType";


// Kevin's code
function threadFormTemplate(topic: string) { // Hämtar in numret på topic, men behöver hämta namnet. Eller skippa 
  return `
    <h3>Gör ett inlägg i ${topic}</h3>
    <form id="formContainer">
      <div>
        <label for="subjectHeaderInput">Ämne:</label>
        <input class="" type="text" name="subjectHeaderInput" placeholder="Vad handlar ditt inlägg om" id="subjectHeaderInput">
      </div>
      <div>
        <label for="postText">Inlägg:</label>
        <textarea id="postText" name="Meddelande" placeholder="Ditt inlägg här" rows="5" cols="33" required minlength="4" maxlength="600"></textarea>
      </div>
      <div><button type="submit" id="postSendButton" class="threadButton">Skicka</button></div>
    </form>
  `;
}

// Kevin's code
export async function renderThreadForm(topic: string, router: Navigo) {
  const threadFormContainer = document.querySelector('#formContainer') as HTMLDivElement;
  const forumName = await getTopicName(topic);
  if (!threadFormContainer) return;
  threadFormContainer.innerHTML = threadFormTemplate(forumName);
  attachEventListeners(topic, router);
  router.updatePageLinks();
}

// Kevin's code
async function getTopicName(topic: string): Promise<string> {
  try{
    const forumData: ForumType[]  = await getForumData();
    const forum = forumData.find(forum => forum.id === parseInt(topic));
    if (!forum) return 'forum';
    return forum.title;
  }
  catch(error){
    showToast('Något gick fel, testa igen', 5000);
    return 'forum';
  }
}

// Kevin's code
async function attachEventListeners(topic: string, router: Navigo) {
    const submitButton = document.querySelector('#postSendButton') as HTMLButtonElement;
    if (!submitButton) return;

    submitButton.addEventListener('click', async (e) => {
      e.preventDefault();

      let thread = await validateAndCreateThread(topic);
      if(!thread) return;
      
      let firstComment = await validateAndCreateFirstComment(thread);
      if (firstComment) {
          createThreadData(thread);
          createCommentData(firstComment);
          router.navigate(`/thread/${thread.id}`)
       }   
  });
}

  // Kevin's code
async function validateAndCreateThread(topic: string): Promise<ThreadType2 | undefined> {
  const userName: string | null = getLoggedInUser();
  if (!userName) {
    showToast('Du måste vara inloggad för att skapa en tråd');
    return;
  }

  try{
      const user: UserType2[] = await getUserData();
      const userId: number | undefined = user.find(u => u.name === userName)?.id;
      if (!userId) return;
    
      const createThreadForm = document.querySelector('#formContainer') as HTMLFormElement;
      if (!createThreadForm) return;
    
      const title = (document.querySelector('#subjectHeaderInput') as HTMLInputElement).value;
      const forumID = parseInt(topic);
      if (!title) {
        showToast('Du måste ange ett ämne');
        return;
      }
    
      const thread: ThreadType2 = newThread(title, userId, forumID);
      return thread;
  }
  catch(error){
      showToast('Något gick fel, testa igen', 5000);
  }
  
}

// Kevin's code
async function validateAndCreateFirstComment(thread: ThreadType2): Promise<CommentType2 | undefined>{
    const userId = thread.userId;
    const threadId = thread.id;

    const commentText = (document.querySelector('#postText') as HTMLTextAreaElement).value;
    if (!commentText) {
        showToast('Du måste skriva något i inlägget');
        return;
    }
    const firstComment: CommentType2 = newComment(commentText, threadId, userId);
    return firstComment;
}