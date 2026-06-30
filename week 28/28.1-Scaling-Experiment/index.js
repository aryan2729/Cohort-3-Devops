/* 1) Vertical Scaling (Scale Up): Increase the resources of a single server, 
such as adding more CPU, RAM, or storage. For example, if your deployed 
project starts receiving more visitors, you upgrade your EC2 instance from 
2 vCPUs and 2 GB RAM to 8 vCPUs and 32 GB RAM so the same server can handle 
more traffic.
2) Horizontal Scaling (Scale Out): Add multiple servers and place a load balancer
in front to distribute incoming requests. For example, if your project goes viral
and receives thousands of concurrent visitors, instead of upgrading one server, 
you deploy multiple backend servers so the traffic is shared, improving performance
and reliability. */

import express from "express";
import cluster from "cluster";
import os from "os";

// We want to start this project 4 times but we have run only one time due to port 3000 cann't run again again so cluster will help us to do that 

const totalCPUs = os.cpus().length;

const port = 3000;

if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    res.send(`Final count is ${count} ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
 

