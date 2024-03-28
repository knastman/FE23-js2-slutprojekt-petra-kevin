import { CommentType } from "../types/commentType";

// Kevin's code
// Sorts comments by timestamp, oldest first
export function sortComments(comments: CommentType[]): CommentType[] {
  return comments.sort((a, b) => a.timeStamp - b.timeStamp);
}
