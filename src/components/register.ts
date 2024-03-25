import { createUser } from "../services/UserService";
import { UserType } from "../types/userType";
import * as formatChecker from "../utils/formatChecker";
import Navigo from "navigo";

//Kevin's code
export function registerTemplate() {
  return `
    <div class="register">
        <h1>Register</h1>
        <form>
          <input type="text" id="userName" placeholder="Input username">
          <input type="password" id="password" placeholder="Password">
          <input type="password" id="confirmPassword" placeholder="Confirm password">
          <button type="button" id="register">Register</button>
          <button type="button" id="back">Back</button>
        </form>
    </div>
    `;
}

//Kevin's code
export function registerUser(router: Navigo) {
  const userName: string = (
    document.querySelector("#userName") as HTMLInputElement
  ).value;
  const password: string = (
    document.querySelector("#password") as HTMLInputElement
  ).value;
  const confirmPassword: string = (
    document.querySelector("#confirmPassword") as HTMLInputElement
  ).value;

  if (
    formatChecker.isInputEmpty(userName) ||
    formatChecker.isInputEmpty(password) ||
    formatChecker.isInputEmpty(confirmPassword)
  ) {
    alert("Input fields cannot be empty");
    return;
  }
  if (!formatChecker.isPasswordValid(password)) {
    alert("Password must be at least 6 characters long");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  const newUser: UserType = {
    name: userName,
    password: password,
    image: "default1",
  };

  createUser(newUser)
    .then(() => router.navigate("/"))
    .then(() => localStorage.setItem("login", userName));
}

//Kevin's code
export function attachRegisterEvents(router: Navigo) {
  const registerButton = document.querySelector(
    "#register"
  ) as HTMLButtonElement;
  const backButton = document.querySelector("#back") as HTMLButtonElement;
  if (registerButton) {
    registerButton.addEventListener("click", () => registerUser(router));
  } else {
    console.error("Register button not found");
  }
  if (backButton) {
    backButton.addEventListener("click", () => router.navigate("/"));
  } else {
    console.error("Back button not found");
  }
}
