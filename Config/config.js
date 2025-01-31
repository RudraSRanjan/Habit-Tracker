import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

const url= "mongodb://Users:passw0rd@<hostname>/?ssl=true&replicaSet=atlas-3f7w3p-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Habits";

export const connectToMongoDB= async()=>{

    try {
        await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log("Connected to database using Mongoose");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to database");
    }
    

}
