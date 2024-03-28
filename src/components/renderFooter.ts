export const renderFooter = (): void => {
  const footerContainer = document.querySelector(".mainFooter") as HTMLElement;
  if (!footerContainer) return;
  const footerContent = `
    <ul class="footerMenu">
      <li>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-github"></i></a>
      </li>
    </ul>
    &copy; Omnitalk
  `;

  footerContainer.innerHTML = footerContent;
};
