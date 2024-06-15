FROM node:21.7.3-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "start"]
