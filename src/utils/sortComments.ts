import { CommentType } from "../types/commentType";

// Kevin's code
// Sorts comments by timestamp, latest first
export function sortComments(comments: CommentType[]): CommentType[] {
  if (comments.length === 1) {
    return comments;
  } else {
    return comments.sort((a, b) => b.timeStamp - a.timeStamp);
  }
}
