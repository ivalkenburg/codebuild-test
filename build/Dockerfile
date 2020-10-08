FROM node:alpine

WORKDIR /app

RUN npm i -g pm2

COPY / /app

CMD ["npm", "run", "prod"]