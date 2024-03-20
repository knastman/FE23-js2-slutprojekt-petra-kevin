// Data managetment and APi calls for forum data
import { db } from "./firebaseConfig";
import {
  ref,
  push,
  get,
  remove,
  update,
  set,
  DatabaseReference,
  getDatabase,
} from "firebase/database";
import { CommentType } from "../types/commentType";

//TODO Add new Topics?

//Kevin's code
export const getTopics = async () => {
  const dataref: DatabaseReference = ref(db, "topics");
  try {
    const data = await get(dataref);
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
export async function checkTopicExists(topicName: string) {
  const dataRef: DatabaseReference = ref(db, "topics/" + topicName);
  const data = await get(dataRef);
  return data.exists();
}
