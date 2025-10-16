import Player from "../models/players.model.js";

// GET all players
export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()
      .populate("teams.team", "teamName logo") // populate team name & logo
      .populate("match", "matchNo date teamA teamB") // populate match info
      .exec();

    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
