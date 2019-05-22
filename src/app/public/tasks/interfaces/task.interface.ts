export interface ITask {
  _id: string;
  createdAt: Date;
  createdBy: string;
  title: string;
  description: string;
  online: boolean;
  location: string;
  category: string;
  budget: string;
  pendingExecutors: IPendingExecutor[];
  assets: string[];
}

export interface IPendingExecutor {
  userId: string;
  commentText: string;
  createdAt: Date;
}
