FROM node

WORKDIR /ideas-app

COPY package.json /ideas-app

RUN npm install

COPY . /ideas-app

EXPOSE 5000

CMD node index.js