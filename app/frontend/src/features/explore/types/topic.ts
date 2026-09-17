export type topicType = {
  topic: string;
  followers_count: number;
  notes_count: number;
};

export type topicListType = topicType[] | null;
