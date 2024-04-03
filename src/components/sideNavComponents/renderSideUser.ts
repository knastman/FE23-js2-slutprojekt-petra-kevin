
import { isLoggedIn, logoutUser } from "../credentialsComponents/renderLogin";
import { UserType } from "../../types/userType";
import Navigo from "navigo";
import { firstLetterToUpperCase, showToast } from "../../utils/utils";
import { getImagePath } from "../../utils/imageIdentifier";
import { getUserData } from "../../services/servicesv2/userService2";

import { UserType2 } from "../../types/typesv2/userType2";
import { renderSideNav } from "./renderSideNav";

// Purpose: Render the side navigation for the user
// Kevin's code
const renderLoggedInUser = (user: UserType): string => {
  user.image = getImagePath(user.image);
  return `
    <nav class="userMenu">
      <h3>Välkommen till din profil</h3>
        <h4>${firstLetterToUpperCase(user.name)}</h4>
        <img src="${user.image}" alt="userImage">
        <div class="menu userMenu">
            <li><a href="/user/${user.name}/edit" data-navigo>Redigera profil</a></li>
            <button type="button" id="logout">Logga ut</button>
        </div>
    </nav>
    <nav class="allUsers"></nav>
  `;
};


// Kevin's code
export const renderSideUser = async (
  router: Navigo,
  userName: string
): Promise<void> => {
  const mainAsideContainer = document.querySelector(".mainAside");
  if (!mainAsideContainer) {
    showToast("Kunde ej hitta mainAside", 5000);
    return;
  }
  mainAsideContainer.innerHTML = "";
  try {
    if (!isLoggedIn()) {
      showToast("Du måste vara inloggad för att se dina uppgifter", 5000);
      router.navigate("/login");
      return;
    }
    const userData: UserType2[] = await getUserData();
    const user = userData.find((user) => user.name === userName);
    if (!user) {
      showToast("Användaren finns inte", 5000);
      return;
    }
    mainAsideContainer.innerHTML = renderLoggedInUser(user);

    attachLinkEvents(router);
  } catch (error) {
    showToast("Kunde inte hämta användaren", 5000);
  }
};

// Kevin's code
const attachLinkEvents = (router: Navigo) => {
  const logoutButton = document.querySelector("#logout") as HTMLButtonElement;
  if (!logoutButton) return;
  logoutButton.addEventListener("click", () => {
    logoutUser(router);
    clearSideNav();
  });
};

// Kevin's code
const clearSideNav = () => {
  const sideNavContainer = document.querySelector(".mainAside");
  if (!sideNavContainer) return;
  sideNavContainer.innerHTML = "";
};