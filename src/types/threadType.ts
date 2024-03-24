export type ThreadType = {
  user: string;
  title: string;
  content: string;
  date: number;
};

export type ThreadWithId = ThreadType & { id: string };
