import mongoose, { mongo } from "mongoose";

const playersSchema = new mongoose.Schema(
    {
        playerId :{
            type : String,
            required : true,
            unique : true,
        },
        name :{
            type : String,
            required : true,
        },
        pic :{
            type : String,
            required : true,
        },
        position :{
            type : String,
            requird : true,
        },
        category :{
           type : String,
            requird : true,
        },
        assitest :[
            {
                year :{
                    type: String,
                    required : true
                },
                goal :{
                    type :Number,
                    required : true,
                }
            }
        ],
        goals :[
            {
                year :{
                    type: String,
                    required : true
                },
                goal :{
                    type :Number,
                    required : true,
                }
            }
        ],
        match : [ 
            {type : mongoose.Schema.Types.ObjectId,
              ref : "Match"
            }
    ],
    session : {
         type: String,
         required : true
    },
    teams: [
        {
            team:{
                type   : mongoose.Schema.Types.ObjectId,
                ref : "Team",
            },
            year : {
                type: String,
                required : true
            }
        }
    ]
    },
    {
        timestamps : true,
    }
)


export default Player = mongoose.model("Player",playersSchema);