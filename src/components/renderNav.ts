import Navigo from "navigo";
import { isLoggedIn, getLoggedInUser } from "./renderLogin";

export const renderNav = (router: Navigo): void => {
  const navContainer = document.querySelector(".mainMenu") as HTMLElement;
  const userContainer = document.querySelector("#topMenuUser") as HTMLElement;
  if (!navContainer || !userContainer) return;
  const isLoggedInUser = isLoggedIn();
  const loggedInUser = getLoggedInUser();

  let userLinks = isLoggedInUser
    ? `<a href=/user/${loggedInUser} data-navigo>${loggedInUser}</a>`
    : `<a href="/login">Logga in</a>`;

  navContainer.innerHTML = `
  <ul class="menu">
    <li><a href="/" data-navigo>Hem</a></li>
    <li><a href="/faq" data-navigo>FAQ</a></li>
    <li><a href="/kontakt" data-navigo>Kontakt</a></li>
    </ul>`;

  userContainer.innerHTML = `${userLinks}`;
};
