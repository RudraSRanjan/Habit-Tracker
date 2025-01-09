import HabitRepository from "../Models/details.repository.js";
import mongoose from "mongoose";
import habitSchema from "../Schema/habit.schema.js";

const habitModel= mongoose.model("habits",habitSchema);

export default class HabitController
{
    constructor()
    {
        this.habitRepository= new HabitRepository();
    }

     getOneWeekDate(){
        let months = ["","Jan", "Feb", "March", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let week = [];
        for(let i = 0; i<7; i++){
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() +i);
            let mm = currentDate.getMonth()+1;
            mm = months[mm];
            let dd = currentDate.getDate();
            if (dd < 10) dd = '0' + dd;
            week.push(mm +" " +dd);
        }
        return week;
    }

    async weekView(req,res)
    {
        let habits= await habitModel.find();
        let week= this.getOneWeekDate();
       
        res.render("weekview",{habits,week});
        console.log(habits+"after render");
    }

    async createHabit(req,res)
    {
        try {

            console.log(req.body)
            const {name,desc}= req.body;

            const result= await this.habitRepository.create(name,desc);

            if(typeof result==="string")
            {
                return res.status(401).render("home",{message:result});
            }
            else
            {
                res.status(200).render("home",{message:"Habit Added Successfully"});
            }
            
            
        } catch (error) {
            res.send(error);
        }
    }

    async deleteHabit(req,res)
    {
        try {
            
            const {id}= req.query;
            

            const habitDeleted= await this.habitRepository.deleteHabit(id);

            if(habitDeleted===0)
            {
                return res.status(400).render("home",{message:"Couldn't delete habit"});
            }

            res.status(201).render("home",{message:"Habit deleted Successfully"});
            
        } catch (error) {
            res.send(error);
        }
    }

    async updateStatus(req,res)
    {
        try {
            const {date,id}= req.query;

            const updatedHabit= await this.habitRepository.updateStatus(date,id);

            if(typeof updatedHabit==="string")
            {
                return res.status(400).render("weekview",{message:updatedHabit});
            }

            else{
                res.render("weekview",{message:"Status Updated Successfully"});
            }
            
        } catch (error) {
            res.send(error);
        }
    }
}