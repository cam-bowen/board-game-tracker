FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV MYSQL_HOST=mariadb
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=password
ENV MYSQL_PORT=3000
ENV MYSQL_DATABASE=miechallenge

COPY wait-for-mariadb.sh /usr/src/app
RUN chmod +x /usr/src/app/wait-for-mariadb.sh

CMD ["./wait-for-mariadb.sh", "npm", "start"]

