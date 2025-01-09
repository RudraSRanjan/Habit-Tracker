import mongoose from "mongoose";
import habitSchema from "../Schema/habit.schema.js";


//Create habit model using habit schema
const habitModel= mongoose.model("Habit",habitSchema);


class HabitRepository
{
    //Create a method to get today's date
     getDateString(currDate)
    {
        
        
        const day= String(currDate.getDate()).padStart(2,"0"); //Ensures two digit format
        const month= String(currDate.getMonth()+1).padStart(2,"0"); //Ensures two digit format
        const year= currDate.getFullYear();

        return `${day}/${month}/${year}`;
    }

    getToDate()
    {
        const currDate= new Date();
        return currDate;
    }

    

   

    //Function to create habits
    async create(name,desc)
    {
        try {
            
           //Find habit of user
           const habit= await habitModel.findOne({
            name:name,
           
           });

           
           const date= this.getToDate();

           

           if(habit)
           {
            return "Habit Already Exists";
           }

           let dateArray=[{date:this.getDateString(date), status:"none"}];
           for (let i=0;i<6;i++)
           {
              date.setDate(date.getDate() + 1);
              
              dateArray.push({date:this.getDateString(date),status:"none"} );
           }

           console.log(dateArray);

           //If habit exists, create a habit and save it in database
           const newHabit= await habitModel({
            name:name,
            desc:desc,
            dates:dateArray,
            
           });

           console.log(newHabit);
           

           await newHabit.save();
           
           


        } catch (error) {
            console.log(error);
        }
    }

    //Function to delete habits
    async deleteHabit(habitID)
    {
        try {

            const deletedHabits= await habitModel.deleteOne({
                _id:habitID

        });

        return deletedHabits.deletedCount;


            
        } catch (error) {
            console.log(error);
        }
    }

    //function to update status of habit
    async updateStatus(date,habitID)
    {
        try {

            const habit= await habitModel.findById({_id:habitID});
            console.log(habit);

            if(!habit)
            {
                return "Habit Not Found";
            }

            let dates= habit.dates;
            console.log(date);

            let flag=false;

            //Using find() method to find in array
            dates.find((i)=>{
                if(i.date===date)
                {
                    if(i.status==="yes")
                        i.status="no";
                
                    else if(i.status==="no")
                            i.status="none";
                              
                
                    else if(i.status==="none")
                        i.status="yes";
                }
                flag=true;

            })

            
            
           
            console.log(habit);
            await habit.save();

            
            
        } catch (error) {
            console.log(error);
        }
    }

}

export default HabitRepository;