import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "#controllers/tasksController.js";
import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  createTask(req, res);
});

router.get("/", async (req: Request, res: Response) => {
  getAllTasks(req, res);
});

router.put("/:id", async (req: Request, res: Response) => {
  updateTask(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  deleteTask(req, res);
});

export default router;
