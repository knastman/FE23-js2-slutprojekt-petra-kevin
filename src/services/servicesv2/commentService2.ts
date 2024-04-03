
import { CommentType2 } from "../../types/typesv2/commentType2";
import { showToast, generateUniqeId } from "../../utils/utils";

import { db } from "../firebaseConfig";
import { ref, get, push, remove, DatabaseReference, DataSnapshot } from "firebase/database";

const commentPath = "commentsv2";

/** Kevin's code
 * @param userName required
 * @param commentText required
 * @param threadId required
 * @param userId required
 * @returns CommentType2
 */
export function newComment(
    userName: string,
    commentText: string,
    threadId:number,
    userId:number
    ): CommentType2 {
    const timeStamp = Date.now();
    const id = generateUniqeId();
    return {
        id: id,
        userName: userName,
        comment: commentText,
        timeStamp: timeStamp,
        threadId: threadId,
        userId: userId
    } as CommentType2;
}
/** Kevin's code
 * @returns all commentObjects from firebase
 * @returns empty array if no data
 */
export async function getCommentData(): Promise<CommentType2[]> {
    const dataRef: DatabaseReference = ref(db, commentPath);

    try {
        const data: DataSnapshot = await get(dataRef);
        if (data.exists()) {
            const commentData: CommentType2[] = [];
            data.forEach((childData) => {
                const comment = childData.val();
                commentData.push(comment);
            });
            return commentData as CommentType2[];
        } else {
            return [];
        }
    } catch (error) {
        showToast("Kunde inte hämta kommentarer, testa igen", 5000);
        return [];
    }

}
/** Kevin's code
 *  Append a comment to the database
 * @param comment required CommentType2
 */
export async function createCommentData(comment: CommentType2): Promise<void> {
    const dataRef: DatabaseReference = ref(db, commentPath);  
    try{
        await push(dataRef, comment);
    }catch(error){
        showToast("Kunde inte skapa kommentar, testa igen", 5000);
        console.log(error);
    }
}

/** Kevin's code
 * updates a comment in the database
 * @param comment required CommentType2
 */
export async function updateCommentData(comment: CommentType2): Promise<void> {
    const firebaseKey: string | null = await findCommentById(comment.id);
    if (!firebaseKey) {
        showToast("Kunde inte hitta kommentar, testa igen", 5000);
        return;
    }
    const dataRef: DatabaseReference = ref(db, `${commentPath}/${firebaseKey}`);
    try{
        await push(dataRef, comment);
    }catch(error){
        showToast("Kunde inte uppdatera kommentar, testa igen", 5000);
        console.log(error);
    }
}
/** Kevin's code
 *  Deletes comment from database
 * @param commentId id in commentObject
 */
export async function deleteCommentData(commentId: number): Promise<void> {
    const firebaseKey = await findCommentById(commentId);
    if (!firebaseKey) {
        showToast("Kunde inte hitta kommentar, testa igen", 5000);
        return;
    }
    const dataRef: DatabaseReference = ref(db, `${commentPath}/${firebaseKey}`);
    try{
        await remove(dataRef);
    }catch(error){
        showToast("Kunde inte ta bort kommentar, testa igen", 5000);
        console.log(error);
    }
}

/** Kevin's code
 * @param commentId required
 * @returns firebaseKey if found
 * @returns null if not found
 */
async function findCommentById(commentId: number): Promise<string | null> {
    const dataRef: DatabaseReference = ref(db, commentPath);
    const snapshot: DataSnapshot = await get(dataRef);
    if (!snapshot.exists()) return null;
    let firebaseKey: string | null = null;
    snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().id === commentId) {
            firebaseKey = childSnapshot.key;
        }
    });

    return firebaseKey;
}