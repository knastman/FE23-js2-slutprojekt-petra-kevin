import { checkUserNameAndPass } from "../services/UserService";
import { toggleBlurEffect } from "../utils/utils";
import * as formatChecker from "../utils/formatChecker";
import Navigo from "navigo";

//Kevin's code
export function loginTemplate(): string {
  return `
    <div class="login">
        <h1>Login</h1>
        <form>
          <input type="text" id="userName" placeholder="Input username">
          <input type="password" id="password" placeholder="Password">
          
          <button type="button" id="login">Login</button>
          <button type="button" id="register">Register</button>
        </form>
    </div>
    `;
}

//Kevin's code
export async function loginUser(router: Navigo) {
  const userName: string = (
    document.querySelector("#userName") as HTMLInputElement
  ).value;
  const password: string = (
    document.querySelector("#password") as HTMLInputElement
  ).value;
  if (
    formatChecker.isInputEmpty(userName) ||
    formatChecker.isInputEmpty(password)
  ) {
    alert("Input fields cannot be empty");
    return;
  }

  const loginSuccessful: boolean = await checkUserNameAndPass(
    userName,
    password
  );
  if (loginSuccessful) {
    localStorage.setItem("login", userName);
    router.navigate("/");
    const user = getLoggedInUser();
  } else {
    //TODO : Error handling here !
    alert("Login failed");
  }
}

//Kevin's code
export function attachLoginEvents(router: Navigo) {
  const loginButton = document.querySelector("#login") as HTMLButtonElement;
  const registerButton = document.querySelector(
    "#register"
  ) as HTMLButtonElement;

  if (loginButton) {
    loginButton.addEventListener("click", () => loginUser(router));
  } else {
    console.error("Login button not found");
  }
  if (registerButton) {
    registerButton.addEventListener("click", () =>
      router.navigate("/register")
    );
  } else {
    console.error("Register button not found");
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

export function toggleLoginContainer(isOn: boolean) {
  const loginContainer = document.querySelector(
    ".login-container"
  ) as HTMLElement;
  isOn
    ? (loginContainer.style.display = "block")
    : (loginContainer.style.display = "none");
}
