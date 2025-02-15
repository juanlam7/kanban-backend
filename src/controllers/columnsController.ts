import Column, { IColumn } from "#models/Column.js";
import { Request, Response } from "express";

export const createColumn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const column: IColumn = new Column(req.body);
    await column.save();
    return res.json(column);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllColumns = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const columns = await Column.find().populate({
      path: "tasks",
      populate: { path: "subtasks" },
    });
    return res.json(columns);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateColumn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const column = await Column.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(column);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteColumn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await Column.findByIdAndDelete(req.params.id);
    return res.json({ message: "Column deleted" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
