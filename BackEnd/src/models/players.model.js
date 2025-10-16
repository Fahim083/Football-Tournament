import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    playerId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    assists: [
      {
        year: {
          type: String,
          required: true,
        },
        goal: {
          type: Number,
          required: true,
        },
      },
    ],

    goals: [
      {
        year: {
          type: String,
          required: true,
        },
        goal: {
          type: Number,
          required: true,
        },
      },
    ],

    match: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
      },
    ],

    session: {
      type: String,
      required: true,
    },

    redcard: {
      type: Number,
      default: 0,
    },

    yellowcard: {
      type: Number,
      default: 0,
    },

    teams: [
      {
        team: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Team",
        },
        year: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model("Player", playerSchema);
export default Player;
