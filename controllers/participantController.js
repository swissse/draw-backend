import Participant from "../models/Participant.js";

// Получить всех участников
export const getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Добавить участника
export const addParticipant = async (req, res) => {
  try {
    const newParticipant = new Participant(req.body);
    await newParticipant.save();
    res.json(newParticipant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Удалить участника
export const deleteParticipant = async (req, res) => {
  try {
    await Participant.findByIdAndDelete(req.params.id);
    res.json({ message: "Участник удалён" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
