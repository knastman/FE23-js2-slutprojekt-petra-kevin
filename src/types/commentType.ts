//Kevin's code
export type CommentType = {
  userName: string;
  comment: string;
  timeStamp: number;
  title:string; //Tillägg av petra pga finns med i db och ska hämtas in i inlägget. Måste hämtas från threadTitle.
};
