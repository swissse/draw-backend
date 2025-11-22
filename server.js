import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import participantRoutes from "./routes/participants.js";
import drawRoutes from "./routes/draw.js";

dotenv.config(); // Загружаем .env

const app = express();

app.use(cors({
  origin:'*'
}));
app.use(express.json());

// Подключаем роуты
app.use("/api/participants", participantRoutes);
app.use("/api/draw", drawRoutes);

// Проверим, что переменные окружения доступны
console.log("✅ Loaded MONGODB_URI:", process.env.MONGODB_URI);
console.log("✅ Loaded PORT:", process.env.PORT);

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
