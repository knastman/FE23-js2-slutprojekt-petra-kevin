import Navigo from "navigo";
import { isLoggedIn, getLoggedInUser } from "./renderLogin";

export const renderNav = (router: Navigo): void => {
  const navContainer = document.querySelector(".mainMenu") as HTMLElement;
  const userContainer = document.querySelector("#topMenuUser") as HTMLElement;
  if (!navContainer || !userContainer) return;
  const isLoggedInUser = isLoggedIn();
  const loggedInUser = getLoggedInUser();

  let userLinks = isLoggedInUser
    ? `<a href=/user/${loggedInUser}">${loggedInUser}</a>`
    : `<a href="/login">Logga in</a>`;

  navContainer.innerHTML = `
  <ul class="menu">
    <li><a href="/">Hem</a></li>
    <li><a href="/faq">FAQ</a></li>
    <li><a href="/kontakt">Kontakta oss</a></li>
    </ul>`;

  userContainer.innerHTML = `${userLinks}`;
};

function attachLinkEvents(userLink: HTMLAnchorElement, router: Navigo) {
  userLink.addEventListener("click", (event) => {
    event.preventDefault();
    const userId = userLink.dataset.id;
    if (!userId) {
      return;
    }
    router.navigate(`/user/${userId}`);
  });
}
