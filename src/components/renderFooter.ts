// Kevin's code
export const renderFooter = (): void => {
  const footerContainer = document.querySelector(".mainFooter") as HTMLElement;
  if (!footerContainer) return;
  const footerContent = `
  <ul class="footerMenu">
    <li><a href="#">Om Omnitalk</a></li>
    <li><a href="#">Cookies</a></li>
    <li><a href="#">Integritet</a></li>
  </ul>
    &copy; Omnitalk
  `;

  footerContainer.innerHTML = footerContent;
};
