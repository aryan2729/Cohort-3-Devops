import mongoose = require("mongoose")

export async function connectDb() {
    
    await mongoose.connect("mongo://localhost:27017/week27.1");

    console.log("Mongo connected")

}
