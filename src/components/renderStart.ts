import { isLoggedIn } from "./credentialsComponents/renderLogin";

export function startTemplate(): string  {
    return `
    <div class="startWrapper">
        <h1>Omnitalk</h1>
        <p>Välkommen till vårt forum</p>
        <p>Här kan du diskutera allt mellan himmel och jord</p>
    </div>
`;
}
       

export function renderStart(): void {
    const mainContent = document.querySelector(".mainContent");
    if (!mainContent) return;
    mainContent.innerHTML = "";
    mainContent.innerHTML = startTemplate();
}