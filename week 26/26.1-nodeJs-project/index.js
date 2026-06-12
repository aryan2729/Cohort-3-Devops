// docker  ps , docker run -p 27017:27017 mongo , docker images , docker exec -it [container id ] sh , doker build -t {image name }
const express = require("express");

const app = express();

app.get("/", (req ,res)=> {
    res.send("Hello world ");
})

app.listen(3000);

// docker build -t [tag you wanna name image]  .[ . means source code] 
// docker run -p 3000:3000 -e [env.Datbase_ruletc] [image name] 