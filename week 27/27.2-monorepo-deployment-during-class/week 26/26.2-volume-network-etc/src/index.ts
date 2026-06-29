// Volume ?
// what is volume in docker ? so when your locally mongo have some data and when you stops your code then it wipes out automatically so if you want to store that data if you close or kill docker mongo container thing so this data won't lost we use volume 
// docker volume create [name-you-wanna-give] 
// docker volume ls  ( for checking )
// docker run -p  (your port)_:_(that image port)  -v name-you-wanna-give:/data/db mongo      ( here -v is volume )

// Network ? 
// what is network In Docker, a network is a powerful feature that allows containers to communicate with each other and with the outside world.
// docker network create [name-you-wanna-give]
// docker network ls 
// docker run -p 27017:27017  --name mongodb  --network [name-you-wanna-give] -v [name-you-give-to-voume]:/data/db mongo    (for mongo docker run)
// for node app etc -> docker build -t [name of app] .
// for node app etc -> docker run -p 27017:27017 --network [name-you-wanna-give] [name of app]


import express, { Express, Request, Response } from 'express';
import { User } from './db';

const app: Express = express();
const port: number = 3000;

app.use(express.json());

// Endpoint to create a user
app.post('/user', async (req: Request, res: Response) => {
  const { name, age, email } = req.body;
  const newUser = new User({ name, age, email });

  try {
    const savedUser = await newUser.save();
    res.status(201).send({ message: 'User created', user: savedUser });
  } catch (err) {
    res.status(500).send({ message: 'Error creating user', error: err });
  }
});

// Endpoint to fetch all users
app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: 'Error fetching users', error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
