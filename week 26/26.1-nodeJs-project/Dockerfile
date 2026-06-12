FROM node:22-alpine 

WORKDIR /app

# . . means copy everything from this folder to  /app folder above  and we don't want node modules folder also copy so we add that in .dockerignore file okay
COPY . .

RUN npm install

EXPOSE 3000

#CMD is slightly different from RUN -> CMD tell what will run when you run the image 
CMD ["node","index.js"]


# docker build -t [tag you wanna name image]  .[ . means source code] 




