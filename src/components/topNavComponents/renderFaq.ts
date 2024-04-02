function faqTemplate():string{
    return`
    <div class="faqContainer">
        <h1>FAQ</h1>
        <div class="faq">
            <div class="faqQuestion">
                <h2>Fråga 1</h2>
                <p>Svar 1</p>
            </div>
            <div class="faqQuestion">
                <h2>Fråga 2</h2>
                <p>Svar 2</p>
            </div>
            <div class="faqQuestion">
                <h2>Fråga 3</h2>
                <p>Svar 3</p>
            </div>
            </div>
        </div>
    </div>`
}


export function renderFaq():void{
    const mainContentContainer = document.querySelector(".mainContent");
    if (!mainContentContainer) {
        return;
    }
    mainContentContainer.innerHTML = "";
    mainContentContainer.innerHTML = faqTemplate();
}