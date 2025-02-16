import { login, resetPasswod, signup } from "#controllers/authController.js";
import express, { Request, Response } from "express";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  signup(req, res);
});

router.post("/login", async (req: Request, res: Response) => {
  login(req, res);
});

router.post("/reset-password", async (req: Request, res: Response) => {
  resetPasswod(req, res);
});

export default router;
