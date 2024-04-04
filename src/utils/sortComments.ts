
import { CommentType2 } from "../types/commentType";



//Petra's version (temporary(?) typechange)
/**
 * @param comments CommentType2[]
 * @returns comments sorted by timestamp
 */
export function sortComments2(comments: CommentType2[]): CommentType2[] {
  if (comments.length === 1) {
    return comments;
  } else {
    return comments.sort((a, b) => b.timeStamp - a.timeStamp);
  }
}
