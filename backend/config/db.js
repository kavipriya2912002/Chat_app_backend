import mongoose from "mongoose";

const ConnectDB =async ()=>{
    try {
        const connect= await mongoose.connect(process.env.MONGO).then(()=>{
            console.log(`MongoDB connected`);
        })
    } catch (error) {
        console.log(`Error`);
    }
}

export default ConnectDB;