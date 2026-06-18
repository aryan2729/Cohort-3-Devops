## Manual Installation 
 - Install nodejs locally()
 - Clone the repo 
 - Install dependencies ( npm install())
 - Start the DB locally
    - docker run -d --name mongo -p 27017:27017 mongo
 - Change the .env file and update your DB credentials 
 - npm run build 
 - npm run start 

## Docker installation 
 - Install docker 
 - start monodb
    - docker run -d -p 27017:27017 --name mongo mongo
 - Build the image - `docker build -t user_project .`
 - Start the image - `docker run -p 3000:3000 user_project`

## Docker compose installation steps 
 - Install docker and docker-compose 
 - Run `docker-compose up`

