// 1) Hono is a lightweight web framework similar to Express, but it's built for modern runtimes like Cloudflare Workers, Bun, Deno, and Node.js. ( serverless backend )
// 2) Instead of using req and res, Hono provides a single context (c) object that gives you access to the request and lets you easily return responses with methods like c.json() and c.text().
// 3) Since Cloudflare Workers don't run a traditional Node.js server, there's no app.listen()—you simply export the Hono app (export default app), and Cloudflare automatically handles incoming requests. 
// 4) and with serverless we have lot of promblems like with databases there can be many connection open to Database since multiple workers open in various region and prisma can't take a lots of request so we have one thing called Connection pooling ( in which there is some kinda pool thing which takes all requests from workers but only send 2 requests to the database prisma so it's limit won't reach)

import { Hono } from 'hono'
import { PrismaClient } from '../src/generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

type Bindings = {
  DATABASE_URL: string;
};


const app = new Hono<{ Bindings: Bindings }>();

 

app.post("/api/v1/signup", async (c)=> {

  const body = await c.req.json();

  const prismaClient = new PrismaClient({
  accelerateUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());



  const user = await prismaClient.user.create({
    data : {
      name : body.name,
      password : body.password,
      email : body.email
    }

  })

  return c.json({
    id : user.id
  })
})

app.post("/api/v1/signin", (c)=> {

  return c.json({
    messge: "Aryan joined"
  })
})

app.post("/api/v1/todo", (c)=> {

  return c.json({
    messge: "Aryan joined"
  })
})

app.get("/api/v1/todo", (c)=> {

  return c.json({
    messge: "Aryan joined"
  })
})

export default app
