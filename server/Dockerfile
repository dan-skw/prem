FROM node:lts
WORKDIR /app
COPY server/package*.json ./
RUN npm install
COPY server/ .
EXPOSE 3000
CMD ["node", "src/main.js"]