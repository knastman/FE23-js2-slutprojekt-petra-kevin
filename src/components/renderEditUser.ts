import { getUserByName, updateUser, deleteUser } from '../services/userService';
import { UserType } from '../types/userType';
import Navigo from 'navigo';
import {
  highlightSelectedImage,
  showToast,
  toggleContainer,
} from '../utils/utils';

import blackPantherImage from '../../public/media/black-panther.png';
import redPandaImage from '../../public/media/red-panda.png';
import babirusaImage from '../../public/media/babirusa.png';
import { get } from 'firebase/database';
import { getLoggedInUser, logoutUser } from './renderLogin';

function editUserTemplate(user: UserType): string {
  return `
        <div class="editUser">
            <h1>Redigera profil för ${user.name}</h1>
            <form>
            <h3>Ändra lösenord</h3>
            <input type="password" id="editPassword" placeholder="Lösenord">
            <input type="password" id="confirmEditPassword" placeholder="Bekräfta lösenord">
            <h3>Ändra profilbild</h3>
            <div class="imageOptions">
            <label for="image1" class="editImageLabel active">
              <input class="editImageRadio" type="radio" id="image1" name="profileImage" value="black-panther" checked>
              <img src="${blackPantherImage}" alt="Profile Image 1">
            </label>
            <label for="image2" class="editImageLabel">
              <input class="editImageRadio" type="radio" id="image2" name="profileImage" value="red-panda">
              <img src="${redPandaImage}" alt="Profile Image 2">
            </label>
            <label for="image3" class="editImageLabel">
              <input class="editImageRadio" type="radio" id="image3" name="profileImage" value="babirusa">
              <img src="${babirusaImage}" alt="Profile Image 3">
            </label>
          </div>
            <button type="submit" id="editUpdate">Uppdatera</button>
            <button type="button" id="editDelete">Ta bort Konto</button>
            </form>
        </div>
        `;
}

//Kevn's code
export async function renderEditUser(
  router: Navigo,
  userName: string
): Promise<void> {
  const editUserContainer = document.querySelector('#editUserContainer');
  if (!editUserContainer) {
    return;
  }

  try {
    const user: UserType = await getUserByName(userName);
    const inloggedUserName = getLoggedInUser();
    if (user.name !== inloggedUserName) {
      showToast('Du kan bara redigera din egen profil', 5000);
      router.navigate(`/user/${inloggedUserName}`);
      return;
    }
    if (!user) {
      showToast('Användaren finns inte', 5000);
      return;
    }
    editUserContainer.innerHTML = editUserTemplate(user);
    attachEditEvents(router, user);
  } catch (error) {
    showToast('Kunde inte hämta användaren', 5000);
  }
}

//Kevin's code
const attachEditEvents = (router: Navigo, user: UserType): void => {
  const editUpdateBtn = document.querySelector('#editUpdate');
  const editDeleteBtn = document.querySelector('#editDelete');
  if (!editUpdateBtn || !editDeleteBtn) {
    return;
  }
  editUpdateBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const selectedImage = document.querySelector(
      'input[name="profileImage"]:checked'
    ) as HTMLInputElement;
    const password = (
      document.querySelector('#editPassword') as HTMLInputElement
    ).value;
    const confPassword = (
      document.querySelector('#confirmEditPassword') as HTMLInputElement
    ).value;
    console.log('password', password);
    console.log('confPassword', confPassword);
    if (password !== confPassword) {
      showToast('Lösenorden matchar inte', 5000);
      return;
    }

    const newUser: UserType = {
      name: user.name,
      image: selectedImage ? selectedImage.value : 'black-panther',
      password: password || user.password,
    };
    await updateUser(newUser);
    router.navigate(`/user/${newUser.name}`);
    showToast('Profilen uppdaterad', 5000);
    toggleContainer(false, '#editUserContainer');
  });
  editDeleteBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    await deleteUser(user.name);
    logoutUser(router);
    router.navigate('/login');
    showToast('Användaren borttagen', 5000);
    toggleContainer(false, '#editUserContainer');
  });
  highlightSelectedImage('.editImageRadio', '.editImageLabel');
};
