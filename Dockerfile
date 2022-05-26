FROM node:16-alpine

COPY . .

RUN yarn install --production

WORKDIR /web
RUN yarn install
RUN yarn build
WORKDIR /

CMD ["yarn", "test"]