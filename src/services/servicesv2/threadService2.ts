import { ThreadType2 } from "../../types/threadType";
import { generateUniqeId, showToast } from "../../utils/utils";
import { db } from "../firebaseConfig";
import { ref, get, set, push, remove, DatabaseReference, DataSnapshot } from "firebase/database";

// Kevin's code
const threadPath = "threadsv2";


/** Kevin's code
 * @param title required
 * @param description required
 * @param userId required
 * @param forumId required
 * @returns threadObject
 */
export function newThread(
    title: string,
    description: string,
    userId: number,
    forumId: number
): ThreadType2 {
    const timeStamp = Date.now();
    const id = generateUniqeId();
    return {
    title: title,
    description: description,
    id: id,
    userId: userId,
    forumId: forumId,
    timeStamp: timeStamp
    } as ThreadType2;
}
/** Kevin's code
 * @returns all threadObjects from firebase
 */
export async function getThreadData(): Promise<ThreadType2[]> {
    const dataRef: DatabaseReference = ref(db, threadPath);
    try {
        const data: DataSnapshot = await get(dataRef);
        if (data.exists()) {
            const threadData: ThreadType2[] = [];
            data.forEach((childData) => {
                const thread = childData.val();
                threadData.push(thread);
            });
            return threadData as ThreadType2[];
        } else {
            showToast("Inga trådar hittades", 5000);
            return [];
        }
    } catch (error) {
        showToast("Kunde inte hämta trådar, testa igen", 5000);
        return [];
    }

}
/** Kevin's code
 * @param thread 
 */
export async function createThreadData(thread: ThreadType2): Promise<void> {
    const dataRef: DatabaseReference = ref(db, threadPath);
    try{
        await set(push(dataRef), thread);
    }catch(error){
        showToast("Kunde inte skapa tråd, testa igen", 5000);
        console.log(error);
    }
}
/** Kevin's code
 * @param thread 
 */
export async function updateThreadData(thread: ThreadType2): Promise<void> {
    const dataRef: DatabaseReference = ref(db, `${threadPath}/${thread.id}`);
    try{
        await set(dataRef, thread);
    }catch(error){
        showToast("Kunde inte uppdatera tråd, testa igen", 5000);
        console.log(error);
    }
}
/** Kevin's code
 * @param threadId id in threadObject
 */
export async function deleteThreadData(threadId: number): Promise<void> {
    const firebaseKey = await findThreadById(threadId);
    const dataRef: DatabaseReference = ref(db, `${threadPath}/${firebaseKey}`);
    try{
        await set(dataRef, null);       
    }catch(error){
        showToast("Kunde inte ta bort tråd, testa igen", 5000);
        console.log(error);
    }
}
/** Kevin's code
 * @param threadId id in threadObject
 * @returns firebaseKey if true, null if false
 */
async function findThreadById(threadId: number): Promise<string | null> {
    const dataRef: DatabaseReference = ref(db, threadPath);
    const snapshot: DataSnapshot = await get(dataRef);
    if (!snapshot.exists()) return null;
    let firebaseKey: string | null = null; 
    snapshot.forEach((childSnapshot) => {
        const thread = childSnapshot.val();
        if (thread.id === threadId) {
            firebaseKey = childSnapshot.key; 
            return true; 
        }
    });
    return firebaseKey; 
}

/** Kevin's code
 * @param threadId 
 * @returns  whole threadObject from database if true, null if false
 */
export async function getThreadById(threadId: number): Promise<ThreadType2 | null> {
    const dataRef: DatabaseReference = ref(db, threadPath);
    const snapshot: DataSnapshot = await get(dataRef);
    if (!snapshot.exists()) return null;
    let thread: ThreadType2 | null = null; 
    snapshot.forEach((childSnapshot) => {
        const threadData = childSnapshot.val();
        if (threadData.id === threadId) {
            thread = threadData; 
            return true; 
        }
    });
    return thread; 
}