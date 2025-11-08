import express from "express";
import { getAllParticipants, addParticipant, deleteParticipant } from "../controllers/participantController.js";

const router = express.Router();

router.get("/", getAllParticipants);
router.post("/", addParticipant);
router.delete("/:id", deleteParticipant);

export default router;
