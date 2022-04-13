FROM node:16

USER node

WORKDIR /usr/src/app

COPY --chown=user:node . .

RUN npm ci --only-production

ENV DEBUG=playground:*

CMD npm start