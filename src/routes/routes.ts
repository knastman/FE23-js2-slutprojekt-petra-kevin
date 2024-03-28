import Navigo from "navigo";
import { renderLoginForm, isLoggedIn } from "../components/renderLogin";
import { renderRegisterForm } from "../components/renderRegister";
import { renderNav } from "../components/renderNav";
import { renderSideNav } from "../components/renderSideNav";
import { toggleContainer } from "../utils/utils";
import { renderUser } from "../components/renderUser";

import { displayStartContent } from "../modules/displayStartContent";
import { renderEditUser } from "../components/renderEditUser";

type RouteParams = {
  data: {
    name: string;
  };
};

// INTE FÄRDIGT
//Kevin's code
export function setupRoutes(router: Navigo) {
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
          toggleContainer(true, "#loginContainer ");
          toggleContainer(false, "#registerContainer");
          displayStartContent();
          renderLoginForm(router);
        }
      },
      "/register": () => {
        if (isLoggedIn()) {
          router.navigate("/");
        } else {
          toggleContainer(true, "#registerContainer");
          toggleContainer(false, "#loginContainer");
          toggleContainer(true, "#start");
          renderRegisterForm(router);
        }
      },

      "/user/:name": (params: RouteParams) => {
        if (!isLoggedIn()) {
          router.navigate("/login");
        } else {
          renderUser(router, params.data.name);
          toggleContainer(false, "#loginContainer");
          toggleContainer(false, "#registerContainer");
          toggleContainer(false, "#start");
        }
      },
      "/user/:name/edit": (params: RouteParams) => {
        if (!isLoggedIn()) {
          router.navigate("/login");
        } else {
          renderEditUser(router, params.data.name);
          renderSideNav(router);
          toggleContainer(false, "#loginContainer");
          toggleContainer(false, "#registerContainer");
          toggleContainer(false, "#start");
        }
      },
    })
    .notFound(() => {
      router.navigate("/");
    })
    .resolve();
}
