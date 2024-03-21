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
import { handleFirebaseError } from "../utils/errorHandler";
import { FirebaseError } from "firebase/app";

// Porpuse: This file has the CRUD operations and sends the data to the database.

//TODO: Implement error handling

//Kevin's code
export const createUser = async (user: UserType): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  const userExists: Boolean = await checkUserExists(user.name);
  if (userExists) return;

  try {
    await set(dataRef, user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      return handleFirebaseError(error);
    } else {
      console.log(error);
    }
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
    if (error instanceof FirebaseError) {
      return handleFirebaseError(error);
    } else {
      console.log(error);
    }
  }
};

//Kevin's code
export const getUserByName = async (name: string): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const userExists: Boolean = await checkUserExists(name);
  if (!userExists) return;
  try {
    const data: DataSnapshot = await get(dataRef);
    return data.val();
  } catch (error) {
    if (error instanceof FirebaseError) {
      return handleFirebaseError(error);
    } else {
      console.log(error);
    }
  }
};

//Kevin's code
export const deleteUser = async (name: string): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const userExists: Boolean = await checkUserExists(name);
  if (!userExists) return;
  try {
    await remove(dataRef);
  } catch (error) {
    if (error instanceof FirebaseError) {
      return handleFirebaseError(error);
    } else {
      console.log(error);
    }
  }
};

//Kevin's code
export const updateUser = async (user: UserType): Promise<any> => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  const userExists: Boolean = await checkUserExists(user.name);
  if (!userExists) return;
  try {
    await set(dataRef, user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      return handleFirebaseError(error);
    } else {
      console.log(error);
    }
  }
};

//Kevin's code
async function checkUserExists(name: string): Promise<boolean> {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const snapshot: DataSnapshot = await get(dataRef);
  return snapshot.exists() as boolean;
}

//Kevin's code
export async function checkUserNameAndPass(
  inputtedUserName: string,
  inputtedUserPassword: string
): Promise<boolean> {
  const user: UserType = await getUserByName(inputtedUserName);

  const equals = user && user.password === inputtedUserPassword ? true : false;

  return equals as boolean;
}
