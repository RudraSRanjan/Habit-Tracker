import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

const url= "mongodb+srv://Users:passw0rd@habits.zb9v5.mongodb.net/?retryWrites=true&w=majority&appName=Habits";

export const connectToMongoDB= async()=>{

    try {
        await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log("Connected to database using Mongoose");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to database");
    }
    

}
