import mongoose from "mongoose";

const ChatModel= new mongoose.Schema(
    {
        chatName:{
            type:String,
            required:true,
            trim:true
        },
        isGroupChat:{
            type:Boolean,
            default : false
        },
        userName:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }],
        latestMessages:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        GroupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }

    },
    {
        timestamps:true,
    }
)

const chat= mongoose.model("Chat",ChatModel);
export default chat;