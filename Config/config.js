import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

const url= "mongodb://localhost:27017/Tracker";

export const connectToMongoDB= async()=>{

    try {
        await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log("Connected to database using Mongoose");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to database");
    }
    

}
