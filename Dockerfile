FROM krmp-d2hub-idock.9rum.cc/goorm/node:20-vapor

WORKDIR /app

ENV NODE_ENV=production

RUN corepack disable && npm uninstall -g yarn && npm install -g yarn@1.22.19

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
