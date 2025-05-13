//function that will connect us to the mongodb database
import mongoose from "mongoose";

const connectDB = async()=>{

    mongoose.connection.on('connected',()=>console.log("Database Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/EliteBank`);
    
      
};
export default connectDB;