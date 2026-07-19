import express from "express"
import prompClient from "prom-client"

import type {Request  , Response , NextFunction } from "express"


const requestCounter = new prompClient.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ['method','route','status_code']
});


function middleware(req: Request , res: Response , next: NextFunction){
    
    const startTime = Date.now();

    res.on('finish',()=>{
        const endTime = Date.now();
        console.log(`Request took ${endTime - startTime}ms`);
    

    requestCounter.inc({
        method: req.method,
        route: req.route? req.route.path:req.path,
        status_code: req.statusCode
    });

    });
    
    next();
};

 
const app = express();

app.use(middleware); // middlware will apply to all below things | you also can add individually like app.get('/' , middleware, ( req,res)=>{})


app.get("/cpu" ,  ( req , res)=> {
    
    for ( let i = 0 ; i < 10000000; i++ ){
        Math.random();
    }
    res.json({
        message: "cpu"
    })
})


app.get("/users", ( req , res )=>{

    res.json({
        message : "user"
    })
})


app.get("/metrics", async ( req,res)=>{

    const metrics = await prompClient.register.metrics();
    console.log(prompClient.register.contentType)
    res.set('Content-Type', prompClient.register.contentType);
    res.end(metrics);

})


app.listen(3000);