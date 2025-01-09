import express from "express";
import {connectToMongoDB} from "../Habit-Tracker/Config/mongoose.js";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import habitRouter from "./Routes/details.routes.js";




//Create a server using express
const server= express();

//Creating session

server.use(express.urlencoded({extended:true}));
server.use(express.json());


server.use(express.static("public"));
server.use(ejsLayouts);
server.set("view engine","ejs");

server.set(
    'views',
    path.join(path.resolve(), 'views')
  );

server.use("/habit", habitRouter);

server.get("/",(req,res)=>
{
    res.render("home",{message:null});
})

server.listen(4200,()=>
{
    console.log("Server listening on port 4200");
    connectToMongoDB();
})