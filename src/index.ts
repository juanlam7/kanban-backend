import cors from "cors";
import express, { Application } from "express";

import authRoute from "#routes/authRoute.js";
import boardRoutes from "#routes/boardsRoute.js";
import columnRoutes from "#routes/columnsRoute.js";
import subTasksRoute from "#routes/subTasksRoute.js";
import taskRoutes from "#routes/tasksRoute.js";

import { protectRoute } from "#middlewares/protectRoute.js";
import "./db";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);

app.use("/api/boards", protectRoute, boardRoutes);
app.use("/api/columns", protectRoute, columnRoutes);
app.use("/api/tasks", protectRoute, taskRoutes);
app.use("/api/subtasks", protectRoute, subTasksRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
