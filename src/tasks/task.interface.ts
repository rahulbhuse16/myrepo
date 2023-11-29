// task.interface.ts
import { Document } from 'mongoose';

export interface Task extends Document {
  description: string;
  dueDate: Date;
  assignee: string;
  status: string;
}
