import { ThreadType, ThreadWithId } from "../types/threadType";
import { db } from "./firebaseConfig";
import {
  ref,
  push,
  get,
  remove,
  set,
  DatabaseReference,
  DataSnapshot,
} from "firebase/database";
import { checkTopicExists } from "./topicService";

//Kevin's code
export function createNewThread(title: string, userName: string): ThreadType {
  const date = Date.now();
  return {
    title: title,
    user: userName,
    date: date,
  } as ThreadType;
}

//Kevin's code
// Returns all threads from a topic with firebase keys
export const getThreadsFromTopic = async (
  topicName: string
): Promise<ThreadWithId[] | undefined> => {
  const dataRef: DatabaseReference = ref(db, `topics/${topicName}/threads`);

  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) return undefined;

  try {
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
      const threads: ThreadWithId[] = [];
      data.forEach((childData) => {
        const key = childData.key;
        const thread = childData.val();
        threads.push({ id: key, ...thread });
      });
      return threads;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

//Kevin's code
export const addThreadToTopic = async (
  thread: ThreadType,
  topicName: string
): Promise<string | null> => {
  const dataRef: DatabaseReference = ref(db, `topics/${topicName}/threads/`);
  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) return null;

  try {
    const newThreadRef = await push(dataRef, thread);
    return newThreadRef.key;
  } catch (error) {
    return error.message;
  }
};

//Kevin's code
export const removeThread = async (
  threadId: string,
  topicName: string
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/threads"
  );
  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) return;

  try {
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
      const threadsObject: Object = data.val();
      const threadIds: Array<string> = Object.keys(threadsObject);
      if (threadIds.includes(threadId)) {
        await remove(dataRef);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const updateThread = async (
  threadId: string,
  topicName: string,
  newThread: ThreadType
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/threads/" + threadId
  );
  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) return;

  try {
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
      await set(dataRef, newThread);
    }
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const getThreadById = async (
  threadId: string,
  topicName: string
): Promise<ThreadType | undefined> => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/threads/" + threadId
  );
  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) return;

  try {
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
      const thread: ThreadType = data.val();
      return thread;
    }
  } catch (error) {
    console.log(error);
  }
};
