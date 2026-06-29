// docker  ps , docker run -p 27017:27017 mongo , docker images , docker exec -it [container id ] sh , doker build -t {image name }
const express = require("express");

const app = express();

app.get("/", (req ,res)=> {
    res.send("Hello world ");
})
     
app.listen(3000);

// docker build -t [tag you wanna name image]  .[ . means source code] 
// docker run -p 3000:3000 -e [env.Datbase_ruletc] [image name] 

// Volume ?
// what is volume in docker ? so when your locally mongo have some data and when you stops your code then it wipes out automatically so if you want to store that data if you close or kill docker mongo container thing so this data won't lost we use volume 
// docker volume create [name-you-wanna-give] 
// docker volume ls  ( for checking )
// docker run -p  (your port)_:_(that image port)  -v name-you-wanna-give:/data/db mongo      ( here -v is volume )

// Network ? 
// what is network In Docker, a network is a powerful feature that allows containers to communicate with each other and with the outside world.
// docker network create [name-you-wanna-give]
// docker network ls 
// docker run -p 27017:27017  --name mongodb  --network [name-you-wanna-give] -v [name-you-give-to-voume]:/data/db mongo
