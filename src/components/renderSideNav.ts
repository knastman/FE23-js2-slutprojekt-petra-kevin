import Navigo from "navigo";
import { getLoggedInUser } from "./renderLogin";

import { showToast, generateUserLink, attachLinkEvents } from "../utils/utils";
import { UserType } from "../types/userType";
import { getAllUsers } from "../services/userService";
import { renderUser } from "./renderUser";

export const renderSideNav = async (router: Navigo): Promise<void> => {
  const sideNavContainer = document.querySelector(".mainAside") as HTMLElement;
  if (!sideNavContainer) return;

  const user: string | null = getLoggedInUser();

  if (user) await renderUser(router, user);

  await renderAllUsers(router);

  router.updatePageLinks();
};

// Kevin's code
const renderAllUsers = async (router: Navigo): Promise<void> => {
  const userListContainer = document.querySelector(".allUsers");
  if (!userListContainer) {
    showToast("Det blev fel, försök igen", 5000);
    return;
  }
  try {
    const userObject = await getAllUsers();
    const userArray: UserType[] = Object.values(userObject);

    userListContainer.innerHTML =
      "<h3>Alla användare</h3><ul class='userList'></ul>";
    const ulElement = userListContainer.querySelector(".userList");

    userArray.forEach((user) => {
      const userLink = generateUserLink(user);
      const liElement = document.createElement("li");
      liElement.appendChild(userLink);
      ulElement?.appendChild(liElement);
    });

    router.updatePageLinks();
  } catch (error) {
    console.error(error);
    showToast("Kunde inte hämta användare", 5000);
  }
};
