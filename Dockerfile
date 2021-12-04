FROM node:alpine

WORKDIR '/app'
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package.json .

RUN npm install

RUN npm install -g @vue/cli-service-global
RUN npm install -g @vue/cli
RUN npm install http-server -g

RUN chown -R node:node /app

CMD ["npm", "run", "build"]

EXPOSE 8080
CMD [ "http-server", "dist" ]



