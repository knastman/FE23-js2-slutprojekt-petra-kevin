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
import { checkTopicExists } from "./topicService";

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
  };
}

//TODO GET ALL COMMENTS

//Kevin's code
export const addComment = async (comment: CommentType, topicName: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments"
  );

  if (!checkTopicExists(topicName)) {
    return;
  }
  try {
    await push(dataRef, comment);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const removeComment = async (topicName: string, commentKey: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments/" + commentKey
  );
  if (
    !checkTopicExists(topicName) ||
    !checkCommentKeyExists(topicName, commentKey)
  ) {
    return;
  }
  try {
    await remove(dataRef);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const updateComment = async (
  topicName: string,
  commentKey: string,
  comment: CommentType
) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments/" + commentKey
  );
  if (
    !checkTopicExists(topicName) ||
    !checkCommentKeyExists(topicName, commentKey)
  ) {
    return;
  }

  try {
    await set(dataRef, comment);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
async function checkCommentKeyExists(topicName: string, commentKey: string) {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments/" + commentKey
  );
  const data = await get(dataRef);
  return data.exists();
}
