import Navigo from "navigo";
import {
  toggleLoginContainer,
  loginTemplate,
  attachLoginEvents,
  isLoggedIn,
} from "../components/login";
import { registerTemplate, attachRegisterEvents } from "../components/register";
import { toggleBlurEffect } from "../utils/utils";

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
          toggleBlurEffect(false);
          toggleLoginContainer(false);
        }
      },
      "/login": () => {
        if (isLoggedIn()) {
          router.navigate("/");
        } else {
          const loginContainer = document.querySelector(".login-container");
          if (!loginContainer) {
            return;
          }
          toggleLoginContainer(true);
          toggleBlurEffect(true);
          loginContainer.innerHTML = loginTemplate();
          attachLoginEvents(router);
        }
      },
      "/register": () => {
        if (isLoggedIn()) {
          router.navigate("/");
        } else {
          const loginContainer = document.querySelector(".login-container");
          if (!loginContainer) {
            return;
          }
          toggleLoginContainer(true);
          loginContainer.innerHTML = registerTemplate();
          attachRegisterEvents(router);
        }
      },
    })
    .resolve();
}
