import { threadType2 } from "../../types/typesv2/threadType2";
import { generateUniqeId, showToast } from "../../utils/utils";
import { db } from "../firebaseConfig";
import { ref, get, set, push, remove, DatabaseReference, DataSnapshot } from "firebase/database";

// Kevin's code
const threadPath = "threadsv2";
// Kevin's code
export function newThread(
    title: string,
    description: string,
    userId: number,
    forumId: number
): threadType2 {
    const timeStamp = Date.now();
    const id = generateUniqeId();
    return {
    title: title,
    description: description,
    id: id,
    userId: userId,
    forumId: forumId,
    timeStamp: timeStamp
    } as threadType2;
}
// Kevin's code
export async function getThreadData(): Promise<threadType2[]> {
    const dataRef: DatabaseReference = ref(db, threadPath);
    try {
        const data: DataSnapshot = await get(dataRef);
        if (data.exists()) {
            const threadData: threadType2[] = [];
            data.forEach((childData) => {
                const thread = childData.val();
                threadData.push(thread);
            });
            return threadData as threadType2[];
        } else {
            showToast("Inga trådar hittades", 5000);
            return [];
        }
    } catch (error) {
        showToast("Kunde inte hämta trådar, testa igen", 5000);
        return [];
    }

}
// Kevin's code
export async function createThreadData(thread: threadType2): Promise<void> {
    const dataRef: DatabaseReference = ref(db, threadPath);
    try{
        await set(push(dataRef), thread);
    }catch(error){
        showToast("Kunde inte skapa tråd, testa igen", 5000);
        console.log(error);
    }
}
// Kevin's code
export async function updateThreadData(thread: threadType2): Promise<void> {
    const dataRef: DatabaseReference = ref(db, `${threadPath}/${thread.id}`);
    try{
        await set(dataRef, thread);
    }catch(error){
        showToast("Kunde inte uppdatera tråd, testa igen", 5000);
        console.log(error);
    }
}
// Kevin's code
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
// Kevin's code
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