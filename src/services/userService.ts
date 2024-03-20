import { db } from "./firebaseConfig";
import { ref, set, get, remove, DatabaseReference } from "firebase/database";
import { UserType } from "../types/userType";
import { handleFirebaseError } from "../utils/errorHandler";
import { FirebaseError } from "firebase/app";

// Porpuse: This file has the CRUD operations and sends the data to the database.

//Kevin's code
export const createUser = async (user: UserType) => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  checkUserExists(user.name).then((exists) => {
    if (exists) return;
  });
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
export const getAllUsers = async () => {
  const dataRef: DatabaseReference = ref(db, "users");
  try {
    const data = await get(dataRef);
    if (data.exists()) {
      return data.val();
    } else {
      return null;
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
export const getUserByName = async (name: string) => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  checkUserExists(name).then((exists) => {
    if (!exists) return;
  });
  try {
    const data = await get(dataRef);
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
export const deleteUser = async (name: string) => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  checkUserExists(name).then((exists) => {
    if (!exists) return;
  });
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
export const updateUser = async (user: UserType) => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  checkUserExists(user.name).then((exists) => {
    if (!exists) return;
  });
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
  const snapshot = await get(dataRef);
  return snapshot.exists();
}

//Kevin's code
export async function checkUserNameAndPass(
  inputtedUserName: string,
  inputtedUserPassword: string
): Promise<boolean> {
  const user = await getUserByName(inputtedUserName);

  const equals = user && user.password === inputtedUserPassword ? true : false;

  return equals;
}
