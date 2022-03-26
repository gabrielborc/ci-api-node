FROM node:14-alpine

WORKDIR /usr/app
COPY . .
ENV NODE_ENV production
RUN npm install
RUN npm run build

CMD ["npm", "start"]