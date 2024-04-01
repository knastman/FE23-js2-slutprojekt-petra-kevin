import { ForumType } from "../../types/typesv2/forumType2";
import { showToast } from "../../utils/utils";
import { db } from "../firebaseConfig";
import {
  ref,
  get,
  DatabaseReference,
  DataSnapshot,
} from "firebase/database";


//Kevin's code
export async  function getForumData(): Promise<ForumType[]> {
    const dataRef: DatabaseReference = ref(db, "forumv2");

    try {
        const data: DataSnapshot = await get(dataRef);
        if (data.exists()) {
            const forumData: ForumType[] = [];
            data.forEach((childData) => {
                const forum = childData.val();
                forumData.push(forum);
            });
            return forumData as ForumType[];
        } else {
            showToast("Inga forum hittades", 5000);
            return [];
        }
    } catch (error) {
        showToast("Kunde inte hämta data", 5000);
        return [];
    }

}