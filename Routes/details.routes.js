import express from "express";
import HabitController from "../Controller/details.controller.js";

//Create router using express
const habitRouter= express.Router();

//Create instance of HabitController

const habitController= new HabitController();

habitRouter.post("/create",(req,res,next)=>{
    habitController.createHabit(req,res,next);
});

habitRouter.get("/delete",(req,res,next)=>{
    habitController.deleteHabit(req,res,next);
});



habitRouter.get("/updatestatus",(req,res,next)=>{
    habitController.updateStatus(req,res,next);
});

habitRouter.get("/weekview",(req,res,next)=>{
    habitController.weekView(req,res,next);
});



export default habitRouter;