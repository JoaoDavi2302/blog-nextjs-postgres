FROM node:25.2.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm install && npx next dev -H 0.0.0.0 -p 3000"]
