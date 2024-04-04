import Navigo from "navigo";
import { renderLoginForm, isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { renderRegisterForm } from "../components/credentialsComponents/renderRegister";
import { renderNav } from "../components/topNavComponents/renderNav";
import { renderSideNav } from "../components/sideNavComponents/renderSideNav";
import { renderEditUser } from "../components/profileComponents/renderEditUser";
import { renderMainUser } from "../components/profileComponents/renderMainUser";
import { renderFooter } from "../components/renderFooter";
import { renderFaq } from "../components/topNavComponents/renderFaq";
import { renderContact } from "../components/topNavComponents/renderContact";

import { RouteParams } from "./routes";
import { renderThreads } from "../components/threadComponents/renderThread";
import { renderComments } from "../components/commentComponents/renderComment";
import { renderTopics } from "../components/topNavComponents/renderTopics";
import { renderStart } from "../components/renderStart";
import { renderThreadForm } from "../components/threadComponents/threadForm";


async function commonTasks(router: Navigo) {
  renderNav(router);
  await renderSideNav(router);
  renderFooter();
  await renderTopics(router);
}

// Kevin's code
function clearTopics(): void {
  const topicsContainer = document.querySelector("#topic");
  const postsContainer = document.querySelector("#posts");
  if (!topicsContainer || !postsContainer) return;
  topicsContainer.classList.remove("flex");
  topicsContainer.classList.add("hide");
  postsContainer.classList.remove("flex");
  postsContainer.classList.add("hide");
}


function toggleTopics(show: boolean):void{
  const topicsContainer = document.querySelector("#topic");

  if (!topicsContainer) return;
  if(show){
    topicsContainer.classList.remove("hide");
    topicsContainer.classList.add("flex");
  }else{
    topicsContainer.classList.remove("flex");
    topicsContainer.classList.add("hide");
  }
}

function togglePosts(show: boolean):void{
  const postsContainer = document.querySelector("#posts");

  if (!postsContainer) return;
  if(show){
    postsContainer.classList.remove("hide");
  }else{
    postsContainer.classList.add("hide");
  }
}


//Kevin's code
export async function handleHomeRoute(router: Navigo) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else {
    await commonTasks(router)
    renderStart();
  }
}

//Kevin's code
export async function handleLoginRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    renderLoginForm(router);
    await commonTasks(router)
  }
}
//Kevin's code
export async function handleRegisterRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    renderRegisterForm(router);
    await commonTasks(router)
  }
}
//Kevin's code
export async function handleUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else {
    await renderMainUser(params.data.id, router);
    await commonTasks(router)
    clearTopics();
  } 
}
//Kevin's code
export async function handleEditUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else { 
    await renderEditUser(router, params.data.id);
    await commonTasks(router)
  }
}
//Kevin's code  //Edited by Petra TESTING
export async function handleTopicRoute(router: Navigo, params: RouteParams) { 
  if (!isLoggedIn()) {//Petra's add
    router.navigate("/login");
  } 
   else { 
    await renderThreads(params.data.id, router);
    await renderThreadForm(params.data.id, router);
    await commonTasks(router)
    toggleTopics(true);
  }
  
} 
//Kevin's code
export async function handleThreadRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else {
    await renderComments(params.data.id, router);
    await commonTasks(router) 
    togglePosts(true);
  }
}
//Kevin's code
export function handleFaqRoute() {
  renderFaq();
}
//Kevin's code
export function handleContactRoute() {
  renderContact();
}