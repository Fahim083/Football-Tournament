import mongoose from "mongoose";


const newsSchema = new mongoose.Schema(
    {
        title: {
             type: String,
         required : true,
        },
        description: {
             type: String,
         required : true
        },
        pic : {
             type: String,
         required : true
        },
        match :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Match",
            required : true
        },
        date : {
            type : Date,
            required : true
        }

    },
    {
        timestamps: true ,
    },
)


export default News = mongoose.model("News",newsSchema)