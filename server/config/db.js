import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect( process.env.MONGO_URI,{
        dbName:"intern management system"
    }).then(()=>{
        console.log("successfully connected to database ");
    }).catch(err=>{
        console.log("Connection Failed",err);
    })
}