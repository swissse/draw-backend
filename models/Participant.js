import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  weightCategory: { type: String, required: true },
  rank: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Participant", participantSchema);