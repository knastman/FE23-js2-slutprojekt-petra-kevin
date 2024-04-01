import Navigo from "navigo";
import { getLoggedInUser } from "./renderLogin";
import { showToast, generateUserLink } from "../utils/utils";
import { UserType } from "../types/userType";
import { getAllUsers } from "../services/userService";
import { renderSideUser } from "./renderSideUser";
import { UserType2 } from "../types/typesv2/userType2";
import { getUserData } from "../services/servicesv2/userService2";

export const renderSideNav = async (router: Navigo): Promise<void> => {
  const sideNavContainer = document.querySelector(".mainAside") as HTMLElement;
  if (!sideNavContainer) return;

  const user: string | null = getLoggedInUser();

  if (user) await renderSideUser(router, user);

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
    const userData: UserType2[] = await getUserData();

    userListContainer.innerHTML =
      "<h3>Alla användare</h3><ul class='userList'></ul>";
    const ulElement = userListContainer.querySelector(".userList");
    if(!ulElement) return;

    userData.forEach((user) => {
      const liElement = document.createElement("li");
      let userLink = document.createElement("a");
      userLink.href = `/user/${user.name}`;
      userLink.innerText = user.name;
      ulElement.appendChild(liElement);
      liElement.appendChild(userLink);

    });

    router.updatePageLinks();
  } catch (error) {
    console.error(error);
    showToast("Kunde inte hämta användare", 5000);
  }
};
