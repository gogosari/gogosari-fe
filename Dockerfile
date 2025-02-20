
FROM krmp-d2hub-idock.9rum.cc/goorm/node:22.13.1-alpine

WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable && corepack prepare yarn@stable --activate

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
