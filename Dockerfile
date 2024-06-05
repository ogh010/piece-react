FROM node:21.7.3-alpine

WORKDIR /react-to-do/frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
