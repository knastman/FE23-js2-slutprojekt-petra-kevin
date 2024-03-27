import { log } from "console";
import { checkUserNameAndPass } from "../services/UserService";

import * as formatChecker from "../utils/formatChecker";
import Navigo from "navigo";

//Kevin's code
function loginTemplate(): string {
  return `
    <div class="login">
        <h1>Login</h1>
        <form>
          <input type="text" id="userName" placeholder="Användarnamn">
          <input type="password" id="password" placeholder="Lösenord">
          
          <button type="button" id="login">Logga in</button>
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
    alert("Fälten kan inte vara tomma");
    return;
  }

  const loginSuccessful = await checkUserNameAndPass(userName, password);
  if (loginSuccessful) {
    localStorage.setItem("login", userName);
    router.navigate("/");
  } else {
    alert("Login failed");
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
}

// Kevin's code
export function isLoggedIn(): boolean {
  return !!localStorage.getItem("login");
}

//Kevin's code
export function getLoggedInUser(): string | null {
  return localStorage.getItem("login");
}
