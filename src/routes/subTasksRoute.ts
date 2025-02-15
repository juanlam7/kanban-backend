import {
  createSubTask,
  deleteSubTask,
  getAllSubTasks,
  updateSubTask,
} from "#controllers/subtasksController.js";
import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  createSubTask(req, res);
});

router.get("/", async (req: Request, res: Response) => {
  getAllSubTasks(req, res);
});

router.put("/:id", async (req: Request, res: Response) => {
  updateSubTask(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  deleteSubTask(req, res);
});

export default router;
