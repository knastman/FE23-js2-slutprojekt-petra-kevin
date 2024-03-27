import Navigo from "navigo";
import { renderLoginForm, isLoggedIn } from "../components/login";
import { renderRegisterForm } from "../components/register";
import { toggleContainer } from "../utils/utils";

const router = new Navigo("/", {});

// INTE FÄRDIGT
//Kevin's code
export function setupRoutes() {
  router
    .on({
      "/": () => {
        if (!isLoggedIn()) {
          router.navigate("/login");
        } else {
          toggleContainer(false, "#loginContainer");
          toggleContainer(false, "#registerContainer");
        }
      },
      "/login": () => {
        if (isLoggedIn()) {
          router.navigate("/");
        } else {
          const loginContainer = document.querySelector("#loginContainer");
          if (!loginContainer) {
            return;
          }
          toggleContainer(true, "#loginContainer ");
          toggleContainer(false, "#registerContainer");
          renderLoginForm(router);
        }
      },
      "/register": () => {
        if (isLoggedIn()) {
          router.navigate("/");
        } else {
          const loginContainer = document.querySelector("#registerContainer");
          if (!loginContainer) {
            return;
          }
          toggleContainer(true, "#registerContainer");
          toggleContainer(false, "#loginContainer");
          renderRegisterForm(router);
        }
      },
    })
    .resolve();
}
