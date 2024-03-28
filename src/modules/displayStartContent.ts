import { isLoggedIn } from "../components/renderLogin";

const startContainer = document.querySelector("#start") as HTMLDivElement;
const loginContainer = document.querySelector(
  "#loginContainer"
) as HTMLDivElement;
const registerContainer = document.querySelector(
  "#registerContainer"
) as HTMLDivElement;

const topicContainer = document.querySelector("#topic") as HTMLDivElement;
const postsContainer = document.querySelector("#posts") as HTMLDivElement;
const postsUserContainer = document.querySelector(
  "#postsUser"
) as HTMLDivElement;

const asideContent = document.querySelector(".mainAside") as HTMLDivElement;
const asideH3 = document.querySelector(".mainAside h3") as HTMLDivElement;
const userMenu = document.querySelector(".userMenu") as HTMLDivElement;
const navUsers = document.querySelector(".users") as HTMLDivElement;

/*********************************
  
**********************************/

// export function displayStartInfo(userName):void{
export function displayStartContent(): void {
  const startHeaderH1 = document.createElement("h1");
  const startTextP = document.createElement("p");

  let startHeader: string = "";
  let startText: string = "";
  let asideHeader: string = "";

  if (isLoggedIn()) {
    startText =
      "Nedan ser du dina senaste meddelanden. I menyn till höger kan du redigera dina uppgifter.";
    loginContainer.classList.add("hide");
    // topicContainer.classList.remove('hide');
    // topicContainer.classList.add('flex');
    postsUserContainer.classList.remove("hide");
    // postsContainer.classList.remove('hide');
    userMenu.classList.remove("hide");
    navUsers.classList.remove("hide");

    asideH3.innerText = "Dina uppgifter";
  } else {
    startHeader = "Välkommen till Omnitalk!";
    startText =
      "Välkommen till vårt diskussionsforum! Här samlas en mångfald av tankar, åsikter och idéer för att skapa en berikande och givande dialog. Oavsett om du är här för att dela din expertis, lära dig något nytt eller bara utforska olika perspektiv, så är detta platsen för dig. Vi uppmuntrar respektfullt utbyte och öppenhet för att främja en atmosfär av lärande och förståelse. Så dyk in, engagera dig och låt oss tillsammans utforska världen genom diskussion och delat kunnande!";

    loginContainer.classList.remove("hide");
    postsContainer.classList.add("hide");
  }

  startHeaderH1.innerText = startHeader;
  startTextP.innerText = startText;
  startContainer.append(startHeaderH1, startTextP);
}
