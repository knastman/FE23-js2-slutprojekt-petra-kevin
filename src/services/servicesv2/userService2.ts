import { UserType2 } from "../../types/userType";
import { generateUniqeId, showToast } from "../../utils/utils";
import { db } from "../firebaseConfig";
import { ref, get, push, remove, set, DatabaseReference, DataSnapshot } from "firebase/database";

// Kevin's code
const userPath = "usersv2";

/** Kevin's code
 * @param userName required
 * @param password required
 * @param image default value is "babirusa"
 * @returns userObject
 */
export function newUserv2(
    userName: string,
    password: string,
    image: string
): UserType2 {
    const id = generateUniqeId();
    return {
        name: userName,
        password: password,
        id: id,
        image: image || "babirusa"
    } as UserType2;
}

/** Kevin's code
 * @returns all userObjects from firebase
 */
export async function getUserData(): Promise<UserType2[]> {
    const dataRef: DatabaseReference = ref(db, userPath);

    try {
        const data: DataSnapshot = await get(dataRef);
        if (data.exists()) {
            const userData: UserType2[] = [];
            data.forEach((childData) => {
                const user = childData.val();
                userData.push(user);
            });
            return userData as UserType2[];
        } else {
            return [];
        }
    } catch (error) {
        showToast("Kunde inte hämta användare, testa igen", 5000);
        return [];
    }

}
/** Kevin's code
 * Adds a userObject to the database
 * @param user 
 */
export async function createUserv2(user: UserType2): Promise<void> {
    const dataRef: DatabaseReference = ref(db, userPath);
    try{
        if(await checkUserNameExists(user.name)){
            showToast("Användarnamnet finns redan", 5000);
            return;
        }
        await push(dataRef, user);
    }catch(error){
        showToast("Kunde inte skapa användare, testa igen", 5000);
        console.log(error);
    }
}
/** Kevin's code
 * updates a user in the database
 * @param user 
 */
export async function updateUserv2(user: UserType2): Promise<void> {
    const firebaseUserId = await findUserKeyByUserName(user.name);
    console.log(firebaseUserId);
    if (firebaseUserId) {
        const dataRef: DatabaseReference = ref(db, `${userPath}/${firebaseUserId}`);
        try {
            await set(dataRef, user);
        } catch (error) {
            showToast("Kunde inte uppdatera användare, testa igen", 5000);
            console.log(error);
        }
    } else {
        showToast("Användare hittades inte", 5000);
    }
}

/** Kevin's code
 *  Deletes a user from the database
 * @param userName 
 */ 
export async function deleteUserv2(userName: string): Promise<void> {
    const firebaseUserId = await findUserKeyByUserName(userName);
    const dataRef: DatabaseReference = ref(db, `${userPath}/${firebaseUserId}`);
    try{
        await remove(dataRef);       
    }catch(error){
        showToast("Kunde inte ta bort användare, testa igen", 5000);
        console.log(error);
    }
}




/** Kevin's code
 * Checks if the inputted username and password exists in the database and are under same id
 * @param inputtedUserName 
 * @param inputtedPassword 
 * @returns true if the username and password are the same in user, false if not
 */
export async function checkCredentials(inputtedUserName: string, inputtedPassword: string): Promise<boolean> {
    const dataRef: DatabaseReference = ref(db, userPath);
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
        let exists: boolean = false;
        data.forEach((childData) => {
            const user = childData.val();
            if (user.name === inputtedUserName && user.password === inputtedPassword) {
                exists = true;
            }
        });
        return exists;
    } else {
        return false;
    }
}

/** Kevin's code
 * Checks if the inputted username exists in the database
 * @param userName 
 * @returns true if username exists in database, false if not
 */
async function checkUserNameExists(userName: string): Promise<boolean> {
    const dataRef: DatabaseReference = ref(db, userPath);
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
        let exists: boolean = false;
        data.forEach((childData) => {
            const user = childData.val();
            if (user.userName === userName) {
                exists = true;
            }
        });
        return exists;
    } else {
        return false;
    }
}
/** Kevin's code
 * @param userName 
 * @returns firebase key of the user
 */
async function findUserKeyByUserName(userName: string): Promise<string | null> {
    const dataRef = ref(db, userPath);
    const snapshot = await get(dataRef);
    if (!snapshot.exists()) {
        showToast("Kunde inte hitta användare, testa igen", 5000);
        return null;
    }
    let userId: string | null = null;
    snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        if (user.name === userName) {
            userId = childSnapshot.key;
            return true; 
        }
    });
    return userId;
}

/** Kevin's code
 * @param userId 
 * @returns if true, returns the firebase key of the user, if false returns null
 */
export async function findUserById(userId: number): Promise<string | null> {
    const dataRef: DatabaseReference = ref(db, userPath);
    const snapshot: DataSnapshot = await get(dataRef);
    if (!snapshot.exists()) return null;
    let firebaseKey: string | null = null;
    snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().id === userId) {
            firebaseKey = childSnapshot.key;
        }
    });
    return firebaseKey;
}

/** Kevin's code
 * @param userId 
 * @returns userObject
 */
export async function getUserById(userId: number): Promise<UserType2 | null> {
    const firebaseKey = await findUserById(userId);
    if (firebaseKey) {
        const dataRef: DatabaseReference = ref(db, `${userPath}/${firebaseKey}`);
        const snapshot: DataSnapshot = await get(dataRef);
        return snapshot.val() as UserType2;
    } else {
        return null;
    }
}