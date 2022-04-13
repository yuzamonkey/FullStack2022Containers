FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV PORT=4000

CMD ["npm", "run", "dev"]