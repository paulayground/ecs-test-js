FROM node:lts-alpine3.17

WORKDIR /home/app

COPY . .

RUN npm install

CMD node app.js