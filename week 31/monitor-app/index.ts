import express from "express"
import prometheusClient from "prom-client"

import type {Request  , Response , NextFunction } from "express"

//Counter - it only can increase 
const requestCounter = new prometheusClient.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ['method','route','status_code']
});

//Gauge - it can increase and decrease
const activeRequestsGauge = new prometheusClient.Gauge({
    name: "active_requests",
    help: "Number of active requests"
});


//Histogram - it can use to observe time etc 
const httpRequestDurationMicroseconds = new prometheusClient.Histogram({
    name: "http_request_duration_ms",
    help: "Duration of HTTP requests in ms",
    labelNames: ['method','route','code'],
    buckets: [0.1,5,15,50,100,300,500,1000,3000,5000] // define your own buckets 
})

function middleware(req: Request , res: Response , next: NextFunction){
    
    if (req.path !== '/metrics'){
        activeRequestsGauge.inc();
    }
    
    const startTime = Date.now();

    res.on('finish',()=>{
        const endTime = Date.now();
        console.log(`Request took ${endTime - startTime}ms`);
    

        requestCounter.inc({
            method: req.method,
            route: req.route? req.route.path:req.path,
            status_code: req.statusCode
        });

        if(req.route.path !== "/metrics"){
          activeRequestsGauge.dec();
        }

        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path ,
            code: res.statusCode,
        }, endTime - startTime)

    });
    
    next();
};

 
const app = express();

app.use(middleware); // middlware will apply to all below things | you also can add individually like app.get('/' , middleware, ( req,res)=>{})


app.get("/cpu" , async  ( req , res)=> {

    await new Promise(s => setTimeout(s, Math.random() * 1000 )); // 0s to 1s
    
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

    const metrics = await prometheusClient.register.metrics();
    console.log(prometheusClient.register.contentType)
    res.set('Content-Type', prometheusClient.register.contentType);
    res.end(metrics);

})


app.listen(3000);