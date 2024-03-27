import { checkUserNameAndPass } from "../services/userService";
import { showToast, toggleContainer } from "../utils/utils";

import * as formatChecker from "../utils/formatChecker";
import Navigo from "navigo";
import { renderNav } from "./renderNav";
import { renderSideNav } from "./renderSideNav";

//Kevin's code
function loginTemplate(): string {
  return `
    <div class="login">
        <h1>Login</h1>
        <form>
          <input type="text" id="userName" placeholder="Användarnamn">
          <input type="password" id="password" placeholder="Lösenord">
          
          <button type="submit" id="login">Logga in</button>
          <button type="button" id="register">Registrera</button>
        </form>
    </div>
    `;
}

export function renderLoginForm(router: Navigo): void {
  const loginContainer = document.querySelector("#loginContainer");
  if (!loginContainer) {
    return;
  }
  loginContainer.innerHTML = loginTemplate();
  attachLoginEvents(router);
}

//Kevin's code
async function loginUser(router: Navigo) {
  const userName = (document.querySelector("#userName") as HTMLInputElement)
    ?.value;
  const password = (document.querySelector("#password") as HTMLInputElement)
    ?.value;

  if (
    formatChecker.isInputEmpty(userName) ||
    formatChecker.isInputEmpty(password)
  ) {
    showToast("Alla fälten måste vara ifyllda", 5000);
    return;
  }

  const loginSuccessful = await checkUserNameAndPass(userName, password);
  if (loginSuccessful) {
    localStorage.setItem("login", userName);
    console.log("login successful");
    router.navigate("/");
    renderNav(router);
    renderSideNav(router);
  } else {
    showToast("Fel användarnamn eller lösenord", 5000);
  }
}

//Kevin's code
export function attachLoginEvents(router: Navigo): void {
  const loginButton = document.querySelector("#login");
  const registerButton = document.querySelector("#register");

  if (loginButton && !loginButton.getAttribute("data-listener")) {
    loginButton.setAttribute("data-listener", "true");
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      loginUser(router);
    });
  }

  if (registerButton && !registerButton.getAttribute("data-listener")) {
    registerButton.setAttribute("data-listener", "true");
    registerButton.addEventListener("click", (e) => {
      e.preventDefault();
      router.navigate("/register");
    });
  }
}

//Kevin's code
export function logoutUser(router: Navigo): void {
  localStorage.removeItem("login");
  router.navigate("/login");
  const userProfileContainer: HTMLElement | null =
    document.querySelector(".userProfile");
  const allUsersContainer: HTMLElement | null =
    document.querySelector(".allUsers");
  if (userProfileContainer) userProfileContainer.innerHTML = "";
  if (allUsersContainer) allUsersContainer.innerHTML = "";

  toggleContainer(true, "#loginContainer");
  renderNav(router);
  renderLoginForm(router);
}

// Kevin's code
export function isLoggedIn(): boolean {
  return !!localStorage.getItem("login");
}

//Kevin's code
export function getLoggedInUser(): string | null {
  return localStorage.getItem("login");
}
