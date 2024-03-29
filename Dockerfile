FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install

RUN npm i yarn

COPY . .

CMD ["npm", "run", "start"]