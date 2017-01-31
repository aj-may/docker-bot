FROM node:7.4

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN npm install --production

COPY ./dist/ /app/dist/

EXPOSE 80
CMD npm start
