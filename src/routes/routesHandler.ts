import Navigo from "navigo";
import { renderLoginForm, isLoggedIn } from "../components/renderLogin";
import { renderRegisterForm } from "../components/renderRegister";
import { renderNav } from "../components/renderNav";
import { renderSideNav } from "../components/renderSideNav";
import { toggleContainer } from "../utils/utils";
import { renderSideUser } from "../components/renderSideUser";
import { displayStartContent } from "../modules/displayStartContent";
import { renderEditUser } from "../components/renderEditUser";
import { renderMainUser } from "../components/renderMainUser";

export type RouteParams = {
  data: {
    name: string;
  };
};


function handleCommonTasks(router: Navigo, hideContainers: string[]) {
  hideContainers.forEach(containerId => toggleContainer(false, containerId));
  renderNav(router);
  renderSideNav(router);
}


export function handleHomeRoute(router: Navigo) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else {
    handleCommonTasks(router, ["#loginContainer", "#registerContainer", "#start", ]);
  }
}

export function handleLoginRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    displayStartContent();
    renderLoginForm(router);
    handleCommonTasks(router, ["#registerContainer", "#editUserContainer",".allUsers"]);
    toggleContainer(true, "#loginContainer");
  }
}

export function handleRegisterRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    renderRegisterForm(router);
    handleCommonTasks(router, ["#loginContainer", "#editUserContainer"]);
    toggleContainer(true, "#registerContainer");
    toggleContainer(true, "#start");
  }
}

export function handleUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else { 
    renderMainUser(params.data.name);
    toggleContainer(true, ".allUsers")
    handleCommonTasks(router, ["#loginContainer", "#registerContainer", "#editUserContainer","#start"]);
  } 
}

export function handleEditUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else { 
    renderEditUser(router, params.data.name);
    handleCommonTasks(router, ["#loginContainer", "#registerContainer"]);
    toggleContainer(true, "#editUserContainer");
    toggleContainer(false, "#start");
  } 
}
