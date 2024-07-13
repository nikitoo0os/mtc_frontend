FROM node:22-alpine3.19 AS BUILD
RUN npm install -g angular-http-server

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

WORKDIR /app/dist/frontend/browser
CMD ["angular-http-server", "-p", "4200"]
