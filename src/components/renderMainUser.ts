import { getUserByName } from "../services/userService";
import { UserType } from "../types/userType";
import { getImagePath } from "../utils/imageIdentifier";
import { showToast } from "../utils/utils";
import { isLoggedIn, getLoggedInUser } from "./renderLogin";
import { commentTemplate, getAllCommentsByUser } from "./renderComment";
import Navigo from "navigo";


// Kevin's code
function renderUser(user: UserType): string {
    user.image = getImagePath(user.image);
    return `
    <h1> Profil </h1>
    <div class="userProfile">
        <div class="userProfileInfo">
            <img src="${user.image}" alt="Profile image">
            <h2>${user.name}</h2>
        </div>
    </div>  
    <h2> Kommentarer </h2>
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
        const user: UserType = await getUserByName(userName);
        console.log(user);
        mainUserProfileContainer.innerHTML = renderUser(user);
        const userComments = await getAllCommentsByUser(userName);
        console.log(userComments);
        const userProfileComments = document.querySelector(".userProfileComments");
        if (!userProfileComments) return;
        for (const comment of userComments) {
            userProfileComments.innerHTML += commentTemplate(comment, user);
        }
    } catch (error) {
        showToast("Något gick fel, försök igen", 5000);
    }
    
}