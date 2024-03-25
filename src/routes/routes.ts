import Navigo from "navigo";
import {
  loginTemplate,
  attachLoginEvents,
  isLoggedIn,
} from "../components/login";
import { registerTemplate, attachRegisterEvents } from "../components/register";

const router = new Navigo("/");

export function setupRoutes() {
  router
    .on({
      "/": () => {
        if (isLoggedIn()) {
          document.body.innerHTML = homeTemplate();
          attachHomeEvents(router);
        } else {
          router.navigate("/login");
        }
      },
      "/login": () => {
        if (isLoggedIn()) {
          router.navigate("/");
        } else {
          document.body.innerHTML = loginTemplate();
          attachLoginEvents(router);
        }
      },
      "/register": () => {
        if (isLoggedIn()) {
          router.navigate("/");
        } else {
          document.body.innerHTML = registerTemplate();
          attachRegisterEvents(router);
        }
      },
    })
    .resolve();
}

function homeTemplate() {
  return `
    <div class="home">
      <h1>Home</h1>
      <button id="logout">Logout</button>
    </div>
  `;
}

function attachHomeEvents(router: Navigo) {
  const logoutButton = document.querySelector("#logout") as HTMLButtonElement;
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("login");
      router.navigate("/login");
    });
  }
}
