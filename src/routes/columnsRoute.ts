import {
  createColumn,
  deleteColumn,
  getAllColumns,
  updateColumn,
} from "#controllers/columnsController.js";
import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  createColumn(req, res);
});

router.get("/", async (req: Request, res: Response) => {
  getAllColumns(req, res);
});

router.put("/:id", async (req: Request, res: Response) => {
  updateColumn(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  deleteColumn(req, res);
});

export default router;
