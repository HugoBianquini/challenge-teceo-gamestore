FROM node:20-alpine

WORKDIR app/

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn prisma generate

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "run", "start:migrate:prod" ]