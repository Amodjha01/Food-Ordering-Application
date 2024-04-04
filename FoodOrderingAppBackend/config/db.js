import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://amoddss01:Amod0211@cluster0.ohqwftc.mongodb.net/FoodOrderingApp').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.