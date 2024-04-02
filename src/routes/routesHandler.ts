import Navigo from "navigo";
import { renderLoginForm, isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { renderRegisterForm } from "../components/credentialsComponents/renderRegister";
import { renderNav } from "../components/topNavComponents/renderNav";
import { renderSideNav } from "../components/sideNavComponents/renderSideNav";

import { renderSideUser } from "../components/sideNavComponents/renderSideUser";
import { displayStartContent } from "../modules/displayStartContent";
import { renderEditUser } from "../components/profileComponents/renderEditUser";
import { renderMainUser } from "../components/profileComponents/renderMainUser";
import { renderFooter } from "../components/renderFooter";
import { renderFaq } from "../components/topNavComponents/renderFaq";
import { renderContact } from "../components/topNavComponents/renderContact";

import { RouteParams } from "./routes";


export function handleHomeRoute(router: Navigo) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else {
    renderNav();
    renderSideNav(router);
  }
}

export function handleLoginRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    renderLoginForm(router);
    renderSideNav(router);
    renderNav();

  }
}

export function handleRegisterRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    renderRegisterForm(router);
  }
}

export function handleUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else { 
    renderMainUser(params.data.id);
    renderNav();
    renderFooter();
    renderSideNav(router);
  } 
}

export function handleEditUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else { 
    renderEditUser(router, params.data.id);
  }
}

export function handleTopicRoute(router: Navigo, params: RouteParams) {
} 
export function handleThreadRoute(router: Navigo, params: RouteParams) {

}
export function handleFaqRoute() {
  renderFaq();
}

export function handleContactRoute() {
  renderContact();
}