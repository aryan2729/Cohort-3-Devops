import express from "express"
import { connectDb } from "./db.js";
import { User } from "./models/User.js";


const app = express();

connectDb()

app.get("/", async (req , res)=>{
    const data = await User.findOne;
    res.json({
        data
    })

})

app.post("/", async ( req ,res)=>{

    await User.create({
        username : Math.random().toString(),
        password : Math.random().toString(),
    })

    res.json({
        "message":"post endpoint"
    })
})

app.listen(3000);
