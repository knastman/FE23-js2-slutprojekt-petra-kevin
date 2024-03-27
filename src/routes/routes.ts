import Navigo from "navigo";
import { renderLoginForm, isLoggedIn } from "../components/renderLogin";
import { renderRegisterForm } from "../components/renderRegister";

import { renderNav } from "../components/renderNav";
import { renderSideNav } from "../components/renderSideNav";
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
          toggleContainer(false, "#start");
          renderNav(router);
          renderSideNav(router);
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
          toggleContainer(true, "#start");
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
          toggleContainer(true, "#start");
          renderRegisterForm(router);
        }
      },
    })
    .resolve();
}
