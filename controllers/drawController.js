import Participant from "../models/Participant.js";
import { createDraw } from "../utils/drawLogic.js";

export const getDraw = async (req, res) => {
  try {
    const participants = await Participant.find();
    const draw = createDraw(participants);
    res.json(draw);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
