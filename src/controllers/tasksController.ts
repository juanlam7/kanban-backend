import Task, { ITask } from "#models/Task.js";
import { Request, Response } from "express";

export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const task: ITask = new Task(req.body);
    await task.save();
    return res.json(task);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tasks = await Task.find().populate("subtasks");
    return res.json(tasks);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(task);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    return res.json({ message: "Task deleted" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
