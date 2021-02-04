FROM node:12.19.0-alpine as final

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 8080

USER node

CMD ["sh", "-c", "npm run server"]
