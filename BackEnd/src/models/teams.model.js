import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
    },
    best : {
        type : String,
        default : ""
    },
    
    managerName: {
      type: String,
      required: true,
    },
    managerPic: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },

    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],

    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
      },
    ],

    group: {
      type: String,
      required: true,
      enum: ["A", "B"],
    },

    news: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "News",
      },
    ],

    played: [
      {
        year: {
          type: String,
          required: true,
        },
        matchPlayed: {
          type: Number,
          required: true,
        },
        win: {
          type: Number,
          required: true,
        },
        lose: {
          type: Number,
          required: true,
        },
        draw: {
          type: Number,
          required: true,
        },
        points: {
          type: Number,
          required: true,
        },
        standing: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true } // ✅ corrected typo
);

const Team = mongoose.model("Team", teamsSchema);
export default Team;
