
import { firstLetterToUpperCase } from "../../utils/utils";
import { isLoggedIn, getLoggedInUser } from "../credentialsComponents/renderLogin";

export const renderNav = (): void => {
  const navContainer = document.querySelector(".mainMenu") as HTMLElement;
  const userContainer = document.querySelector("#topMenuUser") as HTMLElement;
  if (!navContainer || !userContainer) return;
  const isLoggedInUser = isLoggedIn();
  const loggedInUser = getLoggedInUser();

  let userLinks;
  if (isLoggedInUser && loggedInUser) {
      userLinks = `<a href=/user/${loggedInUser} data-navigo>${firstLetterToUpperCase(loggedInUser)}</a>`;
  } else {
      userLinks = `<a href="/login">Logga in</a>`;
  }
  
  navContainer.innerHTML = `
  <ul class="menu">
    <li><a href="/" data-navigo>Hem</a></li>
    <li><a href="/faq" data-navigo>FAQ</a></li>
    <li><a href="/kontakt" data-navigo>Kontakt</a></li>
  </ul>`;
  
  userContainer.innerHTML = `${userLinks}`;
};