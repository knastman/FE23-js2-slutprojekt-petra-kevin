import Navigo from "navigo";
import { isLoggedIn, getLoggedInUser, logoutUser } from "./renderLogin";
import { getImagePath } from "../utils/imageIdentifier";
import { showToast, generateUserLink, attachLinkEvents } from "../utils/utils";
import { UserType } from "../types/userType";
import { getUserByName, getAllUsers } from "../services/userService";

export const renderSideNav = async (router: Navigo): Promise<void> => {
  const sideNavContainer = document.querySelector(".mainAside") as HTMLElement;
  if (!sideNavContainer) return;

  if (!isLoggedIn()) {
    sideNavContainer.innerHTML = `<h2>Du måste vara inloggad för att se dina uppgifter</h2>`;
  } else {
    const loggedInUser: string | null = getLoggedInUser();
    if (!loggedInUser) return;
    const user: UserType = await getUserByName(loggedInUser);

    sideNavContainer.innerHTML =
      `<h2>Välkommen ${user.name}</h2>` +
      renderUserInfo(user) +
      "<nav class='allUsers'></nav>";

    await renderAllUsers(router);
    attachEventListener(router);
  }
};

const renderUserInfo = (user: UserType): string => {
  user.image = getImagePath(user.image);
  return `
    <nav class="userMenu" >
        <h4>${user.name}</h4>
        <img src="${user.image}" alt="userImage">
        <ul class="menu userMenu">
            <li><a href="/user/${user.name}">Se profil</a></li>
            <li><a href="/user/${user.name}/edit">Redigera profil</a></li>
        </ul>
        <button type="button" id="logout">Logga ut</button>
    </nav>
  `;
};

const attachEventListener = (router: Navigo): void => {
  const logoutButton = document.querySelector("#logout");
  if (!logoutButton) return;
  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logoutUser(router);
  });
};

// Kevin's code
const renderAllUsers = async (router: Navigo): Promise<void> => {
  try {
    const userObject = await getAllUsers();
    const userArray: UserType[] = Object.values(userObject);

    const userListContainer = document.querySelector(
      ".allUsers"
    ) as HTMLElement;
    if (!userListContainer) {
      showToast("Kunde inte hitta användarlistan", 5000);
      return;
    }
    userListContainer.innerHTML = "<h3>Alla användare</h3>";
    const ulElement = document.createElement("ul");
    ulElement.classList.add("userList");

    userArray.forEach((user) => {
      const userLink = generateUserLink(user);
      const liElement = document.createElement("li");
      liElement.appendChild(userLink);
      ulElement.appendChild(liElement);
      attachLinkEvents(userLink, router);
      userListContainer.appendChild(ulElement);
    });
  } catch (error) {
    console.error(error);
    showToast("Kunde inte hämta användare", 5000);
  }
};
