FROM node:14-alpine

COPY . .

RUN yarn install --production
CMD ["yarn", "test"]