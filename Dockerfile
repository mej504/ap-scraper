FROM node:alpine

RUN mkdir /app
RUN npm install -g pm2

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install --production
COPY . /app

RUN npm run build

ENV PORT=3010
ENV NODE_ENV=production
ENV INLINE_RUNTIME_CHUNK=false

EXPOSE 3010

USER node

CMD ["pm2-runtime", "npm", "--", "run"]