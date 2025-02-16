import mongoose, { Schema, Document } from "mongoose";
import { ITask } from "./Task.js";

export interface IColumn extends Document {
  name: string;
  tasks: ITask[];
}

const ColumnSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

export default mongoose.model<IColumn>("Column", ColumnSchema);
