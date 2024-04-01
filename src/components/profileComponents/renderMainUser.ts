import { getCommentData } from "../../services/servicesv2/commentService2";
import { getThreadData } from "../../services/servicesv2/threadService2";
import { getUserData } from "../../services/servicesv2/userService2";
import { CommentType2 } from "../../types/typesv2/commentType2";
import { threadType2 } from "../../types/typesv2/threadType2";
import { UserType2 } from "../../types/typesv2/userType2";
import { getImagePath } from "../../utils/imageIdentifier";
import { firstLetterToUpperCase, showToast } from "../../utils/utils";
import { isLoggedIn,  } from "../renderLogin";
import { commentTemplate } from "./renderUserComment";
import { threadTemplate } from "./renderUserThread";



// Kevin's code
function renderUser(user: UserType2): string {
    user.image = getImagePath(user.image);
    return `
    <div class="userContainer">
        <div class="userProfile">
            <h1> Profil </h1>
            <div class="userProfileInfo">
                <img src="${user.image}" alt="Profile image">
                <h2>${firstLetterToUpperCase(user.name)}</h2>
            </div>
        </div>
        <div class="userProfileThreads"></div>
    </div>  
    <div class="userProfileComments"></div>
`
}

// Kevin's code
export async function renderMainUser(userName: string): Promise<void> {
    const mainUserProfileContainer = document.querySelector("#mainUserProfile");
    if (!mainUserProfileContainer) return;
    mainUserProfileContainer.innerHTML = "";

    try {
        if (!isLoggedIn()){
            showToast("Du måste vara inloggad för att se profiler", 5000);
        }
        const userData: UserType2[] = await getUserData();
        const user = userData.find((user) => user.name === userName);
        if (!user) {
            showToast("Användaren finns inte", 5000);
            return;
        }
        mainUserProfileContainer.innerHTML = renderUser(user);
        const commentData: CommentType2[] = await getCommentData();
        const userComments = commentData.filter((comment) => comment.id === user.id)

        const threadData: threadType2[] = await getThreadData();
        const userThreads = threadData.filter((thread) => thread.userId === user.id);

        const userProfileThreads = document.querySelector(".userProfileThreads");
        if (!userProfileThreads) return;
        userProfileThreads.innerHTML = `${user.name}s trådarstarter`;
        for (const thread of userThreads) {
            userProfileThreads.innerHTML += threadTemplate(thread, user);

        }


        const userProfileComments = document.querySelector(".userProfileComments");
        if (!userProfileComments) return;
        for (const comment of userComments) {
            userProfileComments.innerHTML += commentTemplate(comment, user);
        }
    } catch (error) {
        showToast("Något gick fel, försök igen", 5000);
    }
    
}