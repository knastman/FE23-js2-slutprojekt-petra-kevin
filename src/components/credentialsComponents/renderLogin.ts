import { checkUserNameAndPass } from "../../services/userService";
import { showToast, toggleContainer, emptyContainer } from "../../utils/utils";
import { formatChecker } from "../../utils/formatChecker";
import Navigo from "navigo";
import { renderNav } from "../topNavComponents/renderNav";
import { renderSideNav } from "../sideNavComponents/renderSideNav";
import { checkCredentials } from "../../services/servicesv2/userService2";

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

//Kevin's code
export function renderLoginForm(router: Navigo): void {
  const mainContentContainer = document.querySelector(".mainContent");
  if (!mainContentContainer) {
    return;
  }
  mainContentContainer.innerHTML = "";
  mainContentContainer.innerHTML = loginTemplate();
  attachLoginEvents(router);
}

//Kevin's code
async function loginUser(router: Navigo): Promise<void>{
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

  const loginSuccessful = await checkCredentials(userName, password);
  if (loginSuccessful) {
    localStorage.setItem("login", userName);
    router.navigate(`/user/${userName}`);
    console.log("router", router);
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
/**
 * Removes the login from localstorage
 * Navigates to login page
 * @param router 
 */
export function logoutUser(router: Navigo): void {
  localStorage.removeItem("login");
  router.navigate("/login");
}

// Kevin's code
/**
 * checks localsotrage for login
 * @returns boolean
 */
export function isLoggedIn(): boolean {
  return !!localStorage.getItem("login");
}

//Kevin's code
/**
 * Fetches the logged in user from localstorage
 * @returns string | null
 */
export function getLoggedInUser(): string | null {
  return localStorage.getItem("login");
}
