# producer/Dockerfile

FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .

CMD ["node", "producer.js"]