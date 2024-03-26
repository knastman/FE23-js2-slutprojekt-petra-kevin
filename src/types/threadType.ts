export type ThreadType = {
  user: string;
  title: string;
  postText: string; //Tillägg av Petra (själva inlägget måste ju vara med)
  date: number;
};

export type ThreadWithId = ThreadType & { id: string };
