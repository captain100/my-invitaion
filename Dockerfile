# node 版本
FROM node:15-alpine

WORKDIR /my-invitaion

ADD . /my-invitaion

RUN npm install && npm run pub && npm install -g http-server

EXPOSE 8097

RUN mkdir -p ./dist/src/assets && cp -r ./src/assets  ./dist/src/

CMD http-server ./dist -p 8097

