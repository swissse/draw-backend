import express from "express";
import { getDraw } from "../controllers/drawController.js";

const router = express.Router();

router.get("/", getDraw);

export default router;
