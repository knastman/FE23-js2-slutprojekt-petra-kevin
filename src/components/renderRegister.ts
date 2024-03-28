import { createUser, getUserByName } from '../services/userService';
import { UserType } from '../types/userType';
import * as formatChecker from '../utils/formatChecker';
import Navigo from 'navigo';
import {
  highlightSelectedImage,
  showToast,
  toggleContainer,
} from '../utils/utils';

import blackPantherImage from '../../public/media/black-panther.png';
import redPandaImage from '../../public/media/red-panda.png';
import babirusaImage from '../../public/media/babirusa.png';
import { renderNav } from './renderNav';
import { renderSideNav } from './renderSideNav';

//Kevin's code
function registerTemplate() {
  return `
  <div class="register">
  <h1>Registrera dig</h1>
  <form>
    <input type="text" id="regUserName" placeholder="Användarnamn" autocomplete="off">
    <input type="password" id="regPassword" placeholder="Lösenord">
    <input type="password" id="confirmPassword" placeholder="Bekräfta lösenord">
    <h3 id="regImage">Välj profilbild</h3>
    <div class="imageOptions">
      <label for="image1" class="regImageLabel active">
        <input class="regImageRadio" type="radio" id="image1" name="profileImage" value="black-panther" checked>
        <img src="${blackPantherImage}" alt="Profile Image 1">
      </label>
      <label for="image2" class="regImageLabel">
        <input class="regImageRadio" type="radio" id="image2" name="profileImage" value="red-panda">
        <img src="${redPandaImage}" alt="Profile Image 2">
      </label>
      <label for="image3" class="regImageLabel">
        <input class="regImageRadio" type="radio" id="image3" name="profileImage" value="babirusa">
        <img src="${babirusaImage}" alt="Profile Image 3">
      </label>
    </div>

    <button type="button" id="registerBtn">Registrera</button>
    <button type="button" id="backBtn">Tillbaka</button>
  </form>
</div>

    `;
}

export function renderRegisterForm(router: Navigo): void {
  const registrationContainer = document.querySelector('#registerContainer');
  if (!registrationContainer) {
    return;
  }
  registrationContainer.innerHTML = registerTemplate();
  attachRegisterEvents(router);
}

//Kevin's code
export async function registerUser(router: Navigo) {
  const userName: string = (
    document.querySelector('#regUserName') as HTMLInputElement
  ).value;
  const password: string = (
    document.querySelector('#regPassword') as HTMLInputElement
  ).value;
  const confirmPassword: string = (
    document.querySelector('#confirmPassword') as HTMLInputElement
  ).value;
  const selectedImage = document.querySelector(
    'input[name="profileImage"]:checked'
  ) as HTMLInputElement;

  if (
    formatChecker.isInputEmpty(userName) ||
    formatChecker.isInputEmpty(password) ||
    formatChecker.isInputEmpty(confirmPassword)
  ) {
    showToast('Alla fälten måste vara ifyllda', 5000);
    return;
  }
  if (!formatChecker.isPasswordValid(password)) {
    showToast('Lösenordet måste vara minst 6 tecken långt', 5000);
    return;
  }
  if (password !== confirmPassword) {
    showToast('Lösenorden matchar inte', 5000);
    return;
  }

  if (await getUserByName(userName)) {
    showToast('Användarnamnet är redan taget', 5000);
    return;
  }
  const newUser: UserType = {
    name: userName,
    password: password,
    image: selectedImage ? selectedImage.value : 'black-panther',
  };

  createUser(newUser)
    .then(() => localStorage.setItem('login', userName))
    .then(() => router.navigate(`/user/${userName}`))
    .then(() => showToast('Användare skapad', 5000))
    .then(() => renderNav(router))
    .then(() => renderSideNav(router))
    .catch((error) => {
      console.error('Registration error:', error);
      showToast('Ett fel uppstod under registreringen', 5000);
    });
}

//Kevin's code
function attachRegisterEvents(router: Navigo): void {
  const registerButton = document.querySelector('#registerBtn');
  const backButton = document.querySelector('#backBtn');

  if (registerButton) {
    registerButton.removeEventListener('click', registerClickHandler);
    registerButton.addEventListener('click', registerClickHandler);
  } else {
    console.error('Register button not found');
  }

  if (backButton) {
    backButton.removeEventListener('click', backClickHandler);
    backButton.addEventListener('click', backClickHandler);
  } else {
    console.error('Back button not found');
  }

  function registerClickHandler(e: Event) {
    e.preventDefault();
    registerUser(router);
  }

  function backClickHandler(e: Event) {
    e.preventDefault();
    router.navigate('/login');
  }
  highlightSelectedImage('.regImageRadio', '.regImageLabel');
}
