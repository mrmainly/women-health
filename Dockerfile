FROM node:16-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g serve
COPY . /app
RUN npm run build
CMD ["serve", "-s", "build"]