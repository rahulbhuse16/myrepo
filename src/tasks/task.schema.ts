import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: String,
  dueDate: Date,
  assignee: String,
  status: String,
});
