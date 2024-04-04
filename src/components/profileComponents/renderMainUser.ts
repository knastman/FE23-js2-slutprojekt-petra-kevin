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
    <h1> Profil </h1>
    <div class="userContainer">
        <div class="userProfile">
          <div><img src="${user.image}" alt="${user.name}'s image"></div>
          <div><h2>${firstLetterToUpperCase(user.name)}</h2>
          <p>Senast aktiv: <br />
            04/04/2024</p>
          </div>
        </div>
      <div class="userProfileThreads"></div>
    </div>  
    <div class="userProfileComments"></div>
`
}
//Senast aktiv fungerar inte men kan ses som något som ska implementeras lägnre fram, gränssnittet är anpassat efter detta.

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
        // console.log(user);
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