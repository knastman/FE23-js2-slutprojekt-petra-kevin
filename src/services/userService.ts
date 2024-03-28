import { db } from "./firebaseConfig";
import {
  ref,
  set,
  get,
  remove,
  DatabaseReference,
  DataSnapshot,
} from "firebase/database";
import { UserType } from "../types/userType";
import { FirebaseError } from "firebase/app";
import { showToast } from "../utils/utils";

// Porpuse: This file has the CRUD operations and sends the data to the database.

//TODO: Implement error handling

//Kevin's code
export const createUser = async (user: UserType): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  const userExists: boolean = await checkUserExists(user.name);
  if (userExists) return;

  try {
    await set(dataRef, user);
  } catch (error) {
    showToast("Kunde inte skapa användare, försök igen senare", 5000);
    console.log(error);
  }
};

//Kevin's code
export const getAllUsers = async (): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users");
  try {
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
      return data.val();
    } else {
      return;
    }
  } catch (error) {
    showToast("Kunde inte hämta alla användare, testa igen", 5000);
    console.log(error);
  }
};

//Kevin's code
export const getUserByName = async (name: string): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const userExists: boolean = await checkUserExists(name);
  if (!userExists) return;
  try {
    const data: DataSnapshot = await get(dataRef);
    return data.val();
  } catch (error) {
    showToast("Kunde inte hämta användare, testa igen", 5000);
    console.log(error);
  }
};

//Kevin's code
export const deleteUser = async (name: string): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const userExists: boolean = await checkUserExists(name);
  if (!userExists) return;
  try {
    await remove(dataRef);
  } catch (error) {
    showToast("Kunde inte ta bort användare, testa igen", 5000);
    console.log(error);
  }
};

//Kevin's code
export const updateUser = async (user: UserType): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  const userExists: boolean = await checkUserExists(user.name);
  if (!userExists) return;
  try {
    await set(dataRef, user);
  } catch (error) {
    showToast("Kunde inte uppdatera användare, testa igen", 5000);
    console.log(error);
  }
};

//Kevin's code
async function checkUserExists(name: string): Promise<boolean> {
  try {
    const dataRef: DatabaseReference = ref(db, "users/" + name);
    const snapshot: DataSnapshot = await get(dataRef);
    return snapshot.exists() as boolean;
  } catch (error) {
    showToast("Kunde inte hitta användare, testa igen", 5000);
    console.log(error);
    return false;
  }
}

//Kevin's code
export async function checkUserNameAndPass(
  inputtedUserName: string,
  inputtedUserPassword: string
): Promise<boolean> {
  try {
    const user: UserType = await getUserByName(inputtedUserName);
    const equals =
      user && user.password === inputtedUserPassword ? true : false;
    return equals as boolean;
  } catch (error) {
    showToast("Kunde inte verifiera användare, testa igen", 5000);
    console.log(error);
    return false;
  }
}
