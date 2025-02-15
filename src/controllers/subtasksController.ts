import SubTask, { ISubTask } from "#models/SubTask.js";
import { Request, Response } from "express";

export const createSubTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const subTask: ISubTask = new SubTask(req.body);
    await subTask.save();
    return res.json(subTask);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllSubTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const subTasks = await SubTask.find();
    return res.json(subTasks);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateSubTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const subTask = await SubTask.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(subTask);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteSubTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await SubTask.findByIdAndDelete(req.params.id);
    return res.json({ message: "SubTask deleted" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
