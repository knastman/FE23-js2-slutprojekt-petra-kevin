import Navigo from "navigo";
import { getUserData } from "../../services/servicesv2/userService2";
import { UserType2 } from "../../types/userType";
import { getImagePath } from "../../utils/imageIdentifier";
import { firstLetterToUpperCase, showToast } from "../../utils/utils";
import { isLoggedIn,  } from "../credentialsComponents/renderLogin";
import { renderUserComments } from "./renderUserComment";
import { renderUserThreads } from "./renderUserThread";



// Kevin's code
function renderUser(user: UserType2): string {
    user.image = getImagePath(user.image);
    return `
    <div class="userContainer">
        <div class="userProfile">
            <h1> Profil </h1>
            <div class="userProfileInfo">
                <img src="${user.image}" alt="${user.name}'s image">
                <h2>${firstLetterToUpperCase(user.name)}</h2>
            </div>
        </div>
        <div class="userProfileThreads"></div>
    </div>  
    <div class="userProfileComments"></div>
`
}



// Kevin's code
export async function renderMainUser(userName: string, router: Navigo): Promise<void> {
    const mainContentContainer = document.querySelector(".mainContent");
    if (!mainContentContainer) return;
    mainContentContainer.innerHTML = "";
    try {
        if (!isLoggedIn()){
            showToast("Du måste vara inloggad för att se profiler", 5000);
        }
        const userData: UserType2[] = await getUserData();
        const user = userData.find((user) => user.name === userName);
        console.log(user);
        if (!user) {
            showToast("Användaren finns inte", 5000);
            return;
        }
        mainContentContainer.innerHTML = renderUser(user);
        
        renderUserThreads(user, router);
        renderUserComments(user, router);

        router.updatePageLinks();

    } catch (error) {
        showToast("Något gick fel, försök igen", 5000);
    }
    
}