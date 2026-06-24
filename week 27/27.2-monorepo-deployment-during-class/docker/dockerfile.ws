FROM oven/bun:1 

WORKDIR /usr/src/app

# we can add here optimization like only copy first package.json etc then run npm install then COPY . . 
COPY ./packages ./packages 
COPY ./bun.lock  ./bun.lock
COPY ./turbo.json ./turbo.json
COPY ./package.json ./package.json
COPY ./apps/ws ./apps/ws 

RUN bun install

COPY . . 

# see root folder .package.json for this script 
RUN bun run db:generate

EXPOSE 8081

CMD ["bun","run","start:web"]