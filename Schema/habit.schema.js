import mongoose from "mongoose";


const habitSchema= new mongoose.Schema({
    name:{
        type:String,
       
    },

    desc:{
        type:String,
        
    },

    dates:[{
        date:String,
        status:String
    }],

   
},
{
    timestamps:true
})

export default habitSchema;