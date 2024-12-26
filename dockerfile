
FROM node:20
WORKDIR  /automacao_mobile
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4723
RUN npm install -g appium
ENTRYPOINT npm run ios