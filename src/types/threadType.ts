export type ThreadType = {
  user: string;
  title: string;
  postText: string; //Tillägg av Petra (själva inlägget måste ju vara med)
  date: number;
};

export type ThreadWithId = ThreadType & { id: string };



// Kevin's code
export type ThreadType2 = {
    id: number;
    forumId: number;
    title: string;
    description: string;
    timeStamp: number;
    userId: number;
}