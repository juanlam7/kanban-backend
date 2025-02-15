import Board, { IBoard } from "#models/Board.js";
import { Request, Response } from "express";

export const createBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const board: IBoard = new Board(req.body);
    await board.save();
    return res.json(board);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllBoards = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const boards = await Board.find().populate({
      path: "columns",
      populate: { path: "tasks" },
    });
    return res.json(boards);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(board);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await Board.findByIdAndDelete(req.params.id);
    return res.json({ message: "Board deleted" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
