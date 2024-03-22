// Data managetment and APi calls for forum data
import { db } from "./firebaseConfig";
import {
  ref,
  get,
  remove,
  update,
  set,
  DatabaseReference,
  getDatabase,
  DataSnapshot,
} from "firebase/database";
import { TopicType } from "../types/topicType";

//Kevin's code
export const createTopic = async (topic: TopicType): Promise<void> => {
  const dataRef: DatabaseReference = ref(db, "topics/" + topic.title);
  const exists: boolean = await checkTopicExists(topic.title);
  if (exists) return;
  try {
    await set(dataRef, topic);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const getTopics = async (): Promise<void> => {
  const dataref: DatabaseReference = ref(db, "topics");
  try {
    const data: DataSnapshot = await get(dataref);
    if (data.exists()) {
      return data.val();
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const removeTopic = async (topicName: string): Promise<void> => {
  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) {
    console.log("Topic does not exist");
    return;
  }
  try {
    const dataRef: DatabaseReference = ref(db, "topics/" + topicName);
    await remove(dataRef);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export async function checkTopicExists(topicName: string): Promise<boolean> {
  try {
    const dataRef: DatabaseReference = ref(db, "topics/" + topicName);
    const data: DataSnapshot = await get(dataRef);
    return data.exists();
  } catch (error) {
    console.log(error);
    return false;
  }
}
