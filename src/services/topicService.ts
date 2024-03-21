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
} from "firebase/database";
import { TopicType } from "../types/topicType";

//Kevin's code
export const createTopic = async (topic: TopicType) => {
  const dataRef: DatabaseReference = ref(db, "topics/" + topic.title);

  checkTopicExists(topic.title).then((exists) => {
    if (exists) return;
  });

  try {
    await set(dataRef, topic);
  } catch (error) {
    console.log(error);
  }
};

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
export const removeTopic = async (topicName: string) => {
  const dataRef: DatabaseReference = ref(db, "topics/" + topicName);
  checkTopicExists(topicName).then((exists) => {
    if (!exists) return;
  });

  try {
    await remove(dataRef);
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
