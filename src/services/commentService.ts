import { db } from "./firebaseConfig";
import {
  ref,
  push,
  get,
  remove,
  set,
  DatabaseReference,
} from "firebase/database";
import { CommentType } from "../types/commentType";
import { checkTopicExists } from "./topicService";

//Kevin's code
export function createNewComment(
  userName: string,
  title: string,
  commenText: string
): CommentType {
  const timeStamp = Date.now();
  return {
    userName: userName,
    title: title,
    comment: commenText,
    timeStamp: timeStamp,
  } as CommentType;
}

//Kevin's code
// Returns all comments from a specific topic as an array of CommentType
export const getCommentsFromTopic = async (topicName: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments"
  );
  try {
    checkTopicExists(topicName).then((exists) => {
      if (!exists) return;
    });

    const data = await get(dataRef);
    if (data.exists()) {
      const commentsObject = data.val();
      const commentsArray = Object.values(commentsObject);
      return commentsArray as CommentType[];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const addCommentToTopic = async (
  comment: CommentType,
  topicName: string
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments"
  );
  const exists = await checkTopicExists(topicName);
  if (!exists) {
    console.log("Topic does not exist");
    return;
  }
  try {
    await push(dataRef, comment);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const removeComment = async (
  topicName: string,
  commentKey: string
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments/" + commentKey
  );
  const topicExists = await checkTopicExists(topicName);
  if (!topicExists) {
    console.log("Topic does not exist");
    return;
  }
  const commentKeyExists = await checkCommentKeyExists(topicName, commentKey);
  if (!commentKeyExists) {
    console.log("Comment key does not exist");
    return;
  }
  try {
    await remove(dataRef);
  } catch (error) {
    console.log(error);
  }
};

// Kevin's code
export const updateComment = async (
  topicName: string,
  commentKey: string,
  comment: CommentType
): Promise<void> => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments/" + commentKey
  );
  const topicExists = await checkTopicExists(topicName);
  if (!topicExists) {
    console.log("Topic does not exist");
    return;
  }
  try {
    await set(dataRef, comment);
  } catch (error) {
    console.log(error);
  }
};

// Kevin's code
// Returns all comment keys(FirbaseKeys unique "IDs") from a specific topic as an array of strings
export const getCommentKeys = async (topicName: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments"
  );
  try {
    const data = await get(dataRef);
    return Object.keys(data.val()) as string[];
  } catch (error) {
    console.log(error);
  }
};

// Kevin's code
// Returns true if the comment key exists in the topic in the firbase DB
async function checkCommentKeyExists(topicName: string, commentKey: string) {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments/" + commentKey
  );
  const data = await get(dataRef);
  return data.exists() as boolean;
}
