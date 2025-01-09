import mongoose from "mongoose";

const url= "mongodb://localhost:27017/Tracker";

export const connectToMongoDB= async()=>{

    try {
        await mongoose.connect(url);
        
        console.log("Connected to database using Mongoose");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to database");
    }
    

}
