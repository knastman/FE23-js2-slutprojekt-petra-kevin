import { CommentType } from "../types/commentType";
import { CommentType2 } from "../types/typesv2/commentType2";

// Kevin's code
// Sorts comments by timestamp, latest first
export function sortComments(comments: CommentType[]): CommentType[] {
  if (comments.length === 1) {
    return comments;
  } else {
    return comments.sort((a, b) => b.timeStamp - a.timeStamp);
  }
}


//Petra's version (temporary(?) typechange)
export function sortComments2(comments: CommentType2[]): CommentType2[] {
  if (comments.length === 1) {
    return comments;
  } else {
    return comments.sort((a, b) => b.timeStamp - a.timeStamp);
  }
}
