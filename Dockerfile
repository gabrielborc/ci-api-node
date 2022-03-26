FROM node:14-alpine

WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV production
RUN rm -rf node_modules
RUN npm install

CMD ["npm", "start"]