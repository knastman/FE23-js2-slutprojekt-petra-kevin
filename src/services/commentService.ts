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
export const getCommentsFromTopic = async (topicName: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments"
  );
  checkTopicExists(topicName).then((exists) => {
    if (!exists) return;
  });

  try {
    const data = await get(dataRef);
    return data.val();
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const addComment = async (comment: CommentType, topicName: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments"
  );

  checkTopicExists(topicName).then((exists) => {
    if (!exists) return;
  });

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
  checkTopicExists(topicName).then((exists) => {
    if (!exists) return;
    checkCommentKeyExists(topicName, commentKey).then((exists) => {
      if (!exists) return;
    });
  });

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
  checkTopicExists(topicName).then((exists) => {
    if (!exists) return;
    checkCommentKeyExists(topicName, commentKey).then((exists) => {
      if (!exists) return;
    });
  });

  try {
    await set(dataRef, comment);
  } catch (error) {
    console.log(error);
  }
};

//Kevin's code
export const getCommentKeys = async (topicName: string) => {
  const dataRef: DatabaseReference = ref(
    db,
    "topics/" + topicName + "/comments"
  );
  const data = await get(dataRef);
  if (data.exists()) {
    return Object.keys(data.val());
  } else {
    return null;
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
