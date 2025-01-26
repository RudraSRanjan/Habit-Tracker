import express from "express";
import {connectToMongoDB} from "./Config/config.js";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import habitRouter from "./Routes/details.routes.js";
import dotenv from "dotenv";

dotenv.config();



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

const port = process.env.PORT || 4000;

server.use("/habit", habitRouter);

server.get("/",(req,res)=>
{
    res.render("home",{message:null});
})

server.listen(port,()=>
{
    console.log("Server listening on port 4200");
    connectToMongoDB();
})