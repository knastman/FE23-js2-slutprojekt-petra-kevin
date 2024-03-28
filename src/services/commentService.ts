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
import { CommentType } from "../types/commentType";
import { checkTopicExists } from "./topicService";
import { ThreadType } from "../types/threadType";
import { showToast } from "../utils/utils";

//TODO: Implement error handling

//Kevin's code
export function createNewComment(
  userName: string,
  commenText: string
): CommentType {
  const timeStamp = Date.now();
  return {
    userName: userName,
    comment: commenText,
    timeStamp: timeStamp,
  } as CommentType;
}

//Kevin's code
// Returns all comments from a specific topic as an array of CommentType
export const getAllCommentsFromThread = async (
  topicName: string,
  threadId: string
): Promise<any> => {
  const dataRef: DatabaseReference = ref(
    db,
    `topics/${topicName}/threads/${threadId}/comments`
  );

  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) return;
  try {
    const data: DataSnapshot = await get(dataRef);
    if (data.exists()) {
      const commentsObject: Object = data.val();
      const commentsArray: Array<CommentType> = Object.values(commentsObject);
      return commentsArray as CommentType[];
    } else {
      return [] as CommentType[];
    }
  } catch (error) {
    showToast("Kunde inte hämta kommentarer, testa igen", 5000);
    console.log(error);
  }
};

//Kevin's code
export const addCommentToThread = async (
  topicName: string,
  threadId: string,
  comment: CommentType
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    `topics/${topicName}/threads/${threadId}/comments`
  );
  const exists: boolean = await checkTopicExists(topicName);
  if (!exists) return;

  try {
    await push(dataRef, comment);
  } catch (error) {
    showToast("Kunde inte lägga till kommentar, testa igen senare", 5000);
    console.log(error);
  }
};

//Kevin's code
export const removeComment = async (
  topicName: string,
  threadId: string,
  commentKey: string
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    `topics/${topicName}/threads/${threadId}/comments`
  );
  const topicExists: boolean = await checkTopicExists(topicName);
  if (!topicExists) {
    console.log("Topic does not exist");
    return;
  }
  const commentKeyExists: boolean = await checkCommentKeyExists(
    topicName,
    threadId,
    commentKey
  );
  if (!commentKeyExists) {
    console.log("Comment key does not exist");
    return;
  }
  try {
    await remove(dataRef);
  } catch (error) {
    showToast("Kunde inte ta bort kommentar, testa igen senare", 5000);
    console.log(error);
  }
};

// Kevin's code
export const updateComment = async (
  topicName: string,
  threadId: string,
  commentKey: string,
  comment: CommentType
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    `topics/${topicName}/threads/${threadId}/comments`
  );
  const topicExists: boolean = await checkTopicExists(topicName);
  if (!topicExists) return;
  const commentKeyExists: boolean = await checkCommentKeyExists(
    topicName,
    threadId,
    commentKey
  );
  if (!commentKeyExists) return;
  try {
    await set(dataRef, comment);
  } catch (error) {
    showToast("Kunde inte uppdatera kommentar, testa igen senare", 5000);
    console.log(error);
  }
};

// Kevin's code
// Returns all comment keys(FirbaseKeys unique "IDs") from a specific topic as an array of strings
export const getCommentKeys = async (topicName: string, threadId: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    `topics/${topicName}/threads/${threadId}/comments`
  );
  try {
    const data: DataSnapshot = await get(dataRef);
    return Object.keys(data.val()) as string[];
  } catch (error) {
    showToast("Kunde inte hämta kommentar-nycklar, testa igen", 5000);
    console.log(error);
  }
};

// Kevin's code
// Returns true if the comment key (Firebase "ID") exists in the topic in the firbase DB
async function checkCommentKeyExists(
  topicName: string,
  threadId: string,
  commentKey: string
): Promise<boolean> {
  try {
    const dataRef: DatabaseReference = ref(
      db,
      `topics/${topicName}/threads/${threadId}/comments/${commentKey}`
    );
    const data = await get(dataRef);
    return data.exists() as boolean;
  } catch (error) {
    showToast("Kunde inte kolla om kommentar-nyckel finns, testa igen", 5000);
    console.log(error);
    return false;
  }
}
