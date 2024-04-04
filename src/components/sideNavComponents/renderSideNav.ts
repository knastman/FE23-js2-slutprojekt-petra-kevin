import Navigo from "navigo";
import { getLoggedInUser, isLoggedIn } from "../credentialsComponents/renderLogin";
import { showToast } from "../../utils/utils";
import { renderSideUser } from "./renderSideUser";
import { UserType2 } from "../../types/userType";
import { getUserData } from "../../services/servicesv2/userService2";

// Purpose: Render the side navigation for the user
// Kevin's code
export const renderSideNav = async (router: Navigo): Promise<void> => {
  const sideNavContainer = document.querySelector(".mainAside") as HTMLElement;
  if (!sideNavContainer) return;

  const user: string | null = getLoggedInUser();
  if (user === null) { 
    return;
  }
  else {  
    await renderSideUser(router, user);
    await renderAllUsers(router);
    router.updatePageLinks();
  }

};

// Kevin's code
const renderAllUsers = async (router: Navigo): Promise<void> => {
  if(!isLoggedIn()) return;
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
      userLink.setAttribute("data-navigo", "");
      userLink.innerText = user.name;
      ulElement.appendChild(liElement);
      liElement.appendChild(userLink);

    });
    
    

    router.updatePageLinks();
    attachEventListeners(router);
  } catch (error) {
    console.error(error);
    showToast("Kunde inte hämta användare", 5000);
  }
};


function attachEventListeners(router: Navigo): void{
  const userLink = document.querySelector(".userList");
  if(!userLink) return;
  userLink.addEventListener("click", (e: Event) => {
    
    e.preventDefault(); 

    const target = e.target as HTMLElement;
    const user = target.innerText;
    
    router.navigate(`/user/${user}`);
  });
}

