# build environment
FROM node:13.0.1-alpine as build
WORKDIR /zeus-app
COPY package.json .
RUN npm install --unsafe-perm
COPY . .
RUN npm run build

CMD ["npm", "run", "start:prod"]
