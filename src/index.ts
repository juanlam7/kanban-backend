import cors from "cors";
import express, { Application } from "express";

import boardRoutes from "#routes/boardsRoute.js";
import columnRoutes from "#routes/columnsRoute.js";
import subTasksRoute from "#routes/subTasksRoute.js";
import taskRoutes from "#routes/tasksRoute.js";

import "./db";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/boards", boardRoutes);
app.use("/api/columns", columnRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/subtasks", subTasksRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
