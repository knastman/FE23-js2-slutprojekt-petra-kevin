// Kevin's code4
// Only for Date.now() values. example: 1647840000000

import { ThreadWithId } from "../types/threadType";
import { UserType } from "../types/userType";
import Navigo from "navigo";

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
  link.href = `#/thread/${thread.id}`;
  link.innerText = thread.title;
  return link;
}

// Kevin's code
export function generateUserLink(user: UserType): HTMLAnchorElement {
  const link = document.createElement("a");
  link.href = `#/user/${user.name}`;
  link.innerText = user.name;
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
export function toggleBlurEffect(isOn: boolean) {
  const blur = document.querySelector("#blur-overlay") as HTMLElement;
  isOn ? (blur.style.display = "block") : (blur.style.display = "none");
}
