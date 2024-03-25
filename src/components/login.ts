import { checkUserNameAndPass } from "../services/UserService";
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
          <input type="checkbox" id="rememberMe"><label for="rememberMe">Remember me?</label>
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
  const checkBox: HTMLInputElement = document.querySelector(
    "#rememberMe"
  ) as HTMLInputElement;
  console.log(`userName: ${userName}, password: ${password}`);
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
    if (!checkBox.checked) {
      setLoginCookie(1000 * 60 * 60);
    }
    if (checkBox.checked) {
      setLoginCookie(1000 * 60 * 60 * 24);
    }
    router.navigate("/");
  } else {
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
export function setLoginCookie(time: number): void {
  const date: Date = new Date();
  date.setTime(date.getTime() + time);
  document.cookie = `login=true; expires=${date.toUTCString()}`;
}

//Kevin's code
export function setLogoutCookie(): void {
  document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

// Kevin's code
export function isLoggedIn(): boolean {
  const cookies: string[] = document.cookie.split("; ");
  const loggedInCookie: string | undefined = cookies.find((row) =>
    row.startsWith("login=")
  );
  return loggedInCookie ? loggedInCookie.split("=")[1] === "true" : false;
}
