export type ThreadType = {
  user: string;
  title: string;
  date: number;
};

export type ThreadWithId = ThreadType & { id: string };
