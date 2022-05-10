FROM node:16-alpine

WORKDIR /app

COPY ./app/package.json /app/package.json

RUN apk add git

RUN yarn install

RUN npm i -g @nestjs/cli

CMD ["yarn", "start:dev"]