import { ThreadWithId } from "../types/threadType";
import { UserType } from "../types/userType";
import Navigo from "navigo";

// Kevin's code4
// Only for Date.now() values. example: 1647840000000
// Returns date as example = "21/03/2024" and time as example "12:00:00"
export function formatTimestamp(timestamp: number): {
  date: string;
  time: string;
} {
  const dateAndTime: Date = new Date(timestamp);
  const date: string = dateAndTime.toLocaleDateString("en-GB");
  const time: string = dateAndTime.toLocaleTimeString("en-GB");
  return {
    date,
    time,
  };
}

// Kevin's code
export function generateThreadLink(thread: ThreadWithId): HTMLAnchorElement {
  const link = document.createElement("a");
  link.href = `/thread/${thread.id}`;
  link.innerText = thread.title;
  return link;
}

// Kevin's code
export function generateUserLink(user: UserType) {
  const link = document.createElement("a");
  link.href = `/user/${user.name}`;
  link.innerText = user.name;
  link.setAttribute("data-navigo", "");

  return link;
}

// Kevin's code
export function attachLinkEvents(links: HTMLAnchorElement, router: Navigo) {
  links.addEventListener("click", (event) => {
    event.preventDefault();
    const href = links.getAttribute("href");
    if (href) {
      router.navigate(href);
    }
  });
}

// Kevin's code
export function toggleContainer(isOn: boolean, container: string): void {
  const credContainer = document.querySelector(container) as HTMLElement;
  isOn
    ? (credContainer.style.display = "block")
    : (credContainer.style.display = "none");
}

// Kevin's code
export function showToast(message: string, duration: number = 3000): void {
  const toastContainer =
    (document.querySelector("#toastContainer") as HTMLElement) ||
    createToastContainer();
  const toast = document.createElement("div");
  toast.className = "toastMessage";
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toastContainer.removeChild(toast), 500);
  }, duration);
}

// Kevin's code
function createToastContainer(): HTMLElement {
  const toastContainer = document.createElement("div");
  toastContainer.id = "toastContainer";
  document.body.appendChild(toastContainer);
  return toastContainer;
}

export const emptyContainer = (container: string) => {
  const emptied = document.querySelector(container);
  if (!emptied) return;
  emptied.innerHTML = "";
};
