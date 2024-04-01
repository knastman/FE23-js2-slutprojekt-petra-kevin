
import { isLoggedIn, logoutUser } from "./renderLogin";
import { UserType } from "../types/userType";
import Navigo from "navigo";
import { firstLetterToUpperCase, showToast, toggleContainer } from "../utils/utils";
import { getImagePath } from "../utils/imageIdentifier";
import { getUserData } from "../services/servicesv2/userService2";

import { UserType2 } from "../types/typesv2/userType2";

// Kevin's code
// Renders the user profile from the user name
export const renderSideUser = async (
  router: Navigo,
  userName: string
): Promise<void> => {
  const userProfileContainer = document.querySelector(".sideUserProfile");
  if (!userProfileContainer) {
    showToast("Det blev fel, försök igen", 5000);
    return;
  }
  try {
    const userData: UserType2[] = await getUserData();
    const user = userData.find((user) => user.name === userName);

    if (!isLoggedIn()) {
      showToast("Du måste vara inloggad för att se dina uppgifter", 5000);
      router.navigate("/login");
      return;
    }
    if (!user) {
      showToast("Användaren finns inte", 5000);
      return;
    }
    userProfileContainer.innerHTML = renderLoggedInUser(user);

    attachLinkEvents(router);
  } catch (error) {
    showToast("Kunde inte hämta användaren", 5000);
  }
};

const renderLoggedInUser = (user: UserType): string => {
  user.image = getImagePath(user.image);
  return `
    <nav class="userMenu">
      <h3>Välkommen till din profil</h3>
        <h4>${firstLetterToUpperCase(user.name)}</h4>
        <img src="${user.image}" alt="userImage">
        <div class="menu userMenu">
            <li><a href="/user/${user.name}/edit" data-navigo>Redigera profil</a></li>
            <button type="submit" id="logout">Logga ut</button>
        </div>
       
    </nav>
  `;
};


const attachLinkEvents = (router: Navigo) => {
  const logoutButton = document.querySelector("#logout") as HTMLButtonElement;
  if (!logoutButton) return;
  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logoutUser(router);
    toggleContainer(true, "#loginContainer");
    toggleContainer(false, "#editUserContainer");
  });
};
