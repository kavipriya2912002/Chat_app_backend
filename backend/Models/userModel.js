import mongoose from "mongoose";
const UserModel= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        confirmPassword:{
            type:String,
            required: true,
        },
        pic:{
            type:String,
            default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        }
    },
    {
        timestamps:true
    }
)

const user= mongoose.model("User",UserModel);
export default user;

