FROM node:18 AS builder

WORKDIR /home/node/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

FROM node:18

COPY --from=builder /home/node/app/node_modules ./node_modules
COPY --from=builder /home/node/app/package*.json ./
COPY --from=builder /home/node/app/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
