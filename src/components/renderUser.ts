import { getUserByName } from "../services/userService";
import { isLoggedIn, getLoggedInUser, logoutUser } from "./renderLogin";
import { UserType } from "../types/userType";
import Navigo from "navigo";
import { showToast, toggleContainer, emptyContainer } from "../utils/utils";
import { getImagePath } from "../utils/imageIdentifier";

// Kevin's code
// Renders the user profile from the user name
export const renderUser = async (
  router: Navigo,
  userName: string
): Promise<void> => {
  const userProfileContainer = document.querySelector(".userProfile");
  if (!userProfileContainer) {
    showToast("Det blev fel, försök igen", 5000);
    return;
  }
  try {
    const user: UserType = await getUserByName(userName);
    const loggedInuser: string | null = getLoggedInUser();

    if (!isLoggedIn()) {
      showToast("Du måste vara inloggad för att se dina uppgifter", 5000);
      router.navigate("/login");
      return;
    }
    if (!user) {
      showToast("Användaren finns inte", 5000);
      return;
    }

    userProfileContainer.innerHTML =
      loggedInuser === userName
        ? renderLoggedInUser(user)
        : renderPublicUserProfile(user);

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
        <h4>${user.name}</h4>
        <img src="${user.image}" alt="userImage">
        <ul class="menu userMenu">
            <li><a href="/user/${user.name}" data-navigo>Se profil</a></li>
            <li><a href="/user/${user.name}/edit" data-navigo>Redigera profil</a></li>
        </ul>
        <button type="submit" id="logout">Logga ut</button>
    </nav>
  `;
};

const renderPublicUserProfile = (user: UserType): string => {
  user.image = getImagePath(user.image);
  return `
  <nav class="userMenu">
  <h3>Välkommen till</h3>
    <h4>${user.name}'s</h4>
    <img src="${user.image}" alt="userImage">
    </nav>
  `;
};

const attachLinkEvents = (router: Navigo) => {
  const logoutButton = document.querySelector("#logout") as HTMLButtonElement;
  if (!logoutButton) return;
  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logoutUser(router);
  });
};
