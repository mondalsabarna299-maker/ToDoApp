import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";

dotenv.config();
const app = express();

// ✅ Allow requests only from your React frontend
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use("/api/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
