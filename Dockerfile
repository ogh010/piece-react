FROM node:21.7.3-alpine

WORKDIR /

COPY package.json package-lock.json ./

RUN npm install

RUN mkdir ./build
COPY ./build ./build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]
