import { showToast } from "../../utils/utils";

function contactTemplate() {
    return `
      <form id="contactForm">
        <div class="form-group">
          <label for="name">Namn:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Meddelande:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    `;
  }

  
export function renderContact(): void {
    const mainContentContainer = document.querySelector(".mainContent") as HTMLElement;
    if (!mainContentContainer) {
      return;
    }
    mainContentContainer.innerHTML = "";
    mainContentContainer.innerHTML = contactTemplate();
    attachContactEvents();
}


  function attachContactEvents(): void {
    const contactForm = document.querySelector("#contactForm") as HTMLFormElement;
    if (!contactForm) {
      return;
    }
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Inte implementerat ännu", 5000);
    });
  }