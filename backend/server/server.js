import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";

dotenv.config();
const app = express();

// ✅ Allow requests only from your React frontend
app.use(cors({ origin: "https://to-do-app-one-omega-92.vercel.app" }));

app.use(express.json());
app.use("/api/tasks", taskRoutes);

mongoose.connect("mongodb+srv://mondalsubarna29:Su12345@cluster0.1kmazke.mongodb.net/totododos" )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
