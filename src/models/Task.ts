import mongoose, { Schema, Document } from "mongoose";
import { ISubTask } from "./SubTask.js";

export interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  subtasks: ISubTask[];
}

const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    subtasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubTask" }],
  },
  { timestamps: true }
);

export default mongoose.model<ITask>("Task", TaskSchema);
