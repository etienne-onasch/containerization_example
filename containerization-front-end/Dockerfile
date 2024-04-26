FROM node:latest

WORKDIR /containerization-frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . . 

RUN npm run build

EXPOSE 3750

CMD npm start

