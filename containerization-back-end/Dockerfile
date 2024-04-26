FROM node:latest

WORKDIR /containerization-backend

COPY package.json package-lock.json ./

RUN npm install express

COPY . . 

EXPOSE 3751

CMD ["node", "server.js"]