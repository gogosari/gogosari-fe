# FROM krmp-d2hub-idock.9rum.cc/goorm/node:20.16.0-vapor
FROM node:20.16.0-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV NODE_PATH=/app

RUN corepack disable && npm uninstall -g yarn && npm install -g yarn@1.22.19

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN export NODE_PATH=/app && yarn build

EXPOSE 3000

CMD ["yarn", "start"]