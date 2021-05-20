FROM node:10-alpine
WORKDIR /app
COPY package*.json ./
COPY public ./public
COPY src ./src
RUN npm install
COPY . .
RUN npm run build && npm run build:server
EXPOSE $PORT
ENTRYPOINT ["npm", "run", "server"]