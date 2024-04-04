import { isLoggedIn } from "./credentialsComponents/renderLogin";

export function startTemplate(): string  {
    return `
    <div class="startWrapper">
        <h1>Välkommen till Omnitalk</h1>
        <p>Välkommen till vårt diskussionsforum! Här samlas en mångfald av tankar, åsikter och idéer för att skapa en berikande och givande dialog. Oavsett om du är här för att dela din expertis, lära dig något nytt eller bara utforska olika perspektiv, så är detta platsen för dig. Vi uppmuntrar respektfullt utbyte och öppenhet för att främja en atmosfär av lärande och förståelse. Så dyk in, engagera dig och låt oss tillsammans utforska världen genom diskussion och delat kunnande!</p>
    </div>
`;
}
       

export function renderStart(): void {
    const mainContent = document.querySelector("#mainContent");
    if (!mainContent) return;
    mainContent.innerHTML = "";
    mainContent.innerHTML = startTemplate();
}