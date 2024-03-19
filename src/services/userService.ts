import { db } from "./firebaseConfig";
import { ref, set, get, remove, DatabaseReference } from "firebase/database";
import { UserType } from "./userType";

// Porpuse: This file has the CRUD operations and sends the data to the database.

//Kevin's code
export const createUser = async (user: UserType) => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  const exists = await checkUserExists(user.name);
  if (exists) {
    console.log("User already exists");
    return;
  }
  try {
    await set(dataRef, user);
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

//Kevin's code
export const getUserByName = async (name: string) => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const exists = await checkUserExists(name);
  if (!exists) {
    return;
  }
  try {
    const data = await get(dataRef);
    return data.val();
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const deleteUser = async (name: string) => {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const exists = await checkUserExists(name);
  if (!exists) {
    return;
  }
  try {
    await remove(dataRef);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const updateUser = async (user: UserType) => {
  const dataRef: DatabaseReference = ref(db, "users/" + user.name);
  const exists = await checkUserExists(user.name);
  if (!exists) {
    return;
  }
  try {
    await set(dataRef, user);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
async function checkUserExists(name: string): Promise<boolean> {
  const dataRef: DatabaseReference = ref(db, "users/" + name);
  const snapshot = await get(dataRef);
  return snapshot.exists();
}
