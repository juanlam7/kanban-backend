import {
  createBoard,
  deleteBoard,
  getAllBoards,
  updateBoard,
} from "#controllers/boardsController.js";
import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  createBoard(req, res);
});

router.get("/", async (req: Request, res: Response) => {
  getAllBoards(req, res);
});

router.put("/:id", async (req: Request, res: Response) => {
  updateBoard(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  deleteBoard(req, res);
});

export default router;
