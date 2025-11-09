import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import participantRoutes from "./routes/participants.js";
import drawRoutes from "./routes/draw.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/participants", participantRoutes);
app.use("/api/draw", drawRoutes);


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

export default app; 
