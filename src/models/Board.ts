import mongoose, { Schema, Document } from 'mongoose';
import { IColumn } from './Column.js';

export interface IBoard extends Document {
  name: string;
  columns: IColumn[];
}

const BoardSchema: Schema = new Schema({
  name: { type: String, required: true },
  columns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' }],
});

export default mongoose.model<IBoard>('Board', BoardSchema);
