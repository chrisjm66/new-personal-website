# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.6.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 9000

CMD node ./dist/index.html
