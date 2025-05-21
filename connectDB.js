import mongoose from "mongoose";

async function connectDB(){
    try {
    await mongoose.connect("mongodb:////127.0.0.1:27017/Bhoumish's-Blog");
    console.log("Successfully connected to Blogs database");
    } catch(e){
        console.log(e.message);
    }
};

connectDB();
