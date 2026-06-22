## Docker installation 
 - Install docker 
 - Start a new network `docker network create user_project`
 - Start postgres
    - docker run --network user_project -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - Build the image `docker build --network=host -t user-project . `
 - Start the image `docker run --network user_project -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres -p 3000:3000 user-project`

## Docker Compose installation steps 
 -  Install docker , docker-compose 
 - Run `docker-compose up`