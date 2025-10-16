import mongoose from "mongoose"

const matchsSchema = new mongoose.Schema(
    { 
        matchNo : {
            type: Number,
            required : true,
        },
        teamA: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
        teamB: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
        teamAGoals: [
            { time:{
                type: Number,
                required: true,
                min: 0,
                max: 120
            } ,
              scorer:{
                type: mongoose.Schema.Types.ObjectId,
                 ref: "Player", required: true
              } ,
                   assist: {
                type: mongoose.Schema.Types.ObjectId,
                 ref: "Player", required: true
              } }
        ],
        teamBGoals:  [
            { time:{
                type: Number,
                required: true,
                min: 0,
                max: 120
            } ,
              scorer:{
                type: mongoose.Schema.Types.ObjectId,
                 ref: "Player", required: true
              } ,
                   assist: {
                type: mongoose.Schema.Types.ObjectId,
                 ref: "Player", required: true
              } }
        ],
        date: { type: Date, required: true },
       isPlayed: { type: Boolean, default: false },
       result : {
        type : String,
        required : true ,
       }
    },
    { timestamps: true }
)

const Match = mongoose.model("Match", matchsSchema)

export default Match