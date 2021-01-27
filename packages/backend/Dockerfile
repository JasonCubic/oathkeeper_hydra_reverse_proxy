FROM node:10.23.0-alpine3.11

ENV EXPRESS_HOST "0.0.0.0"
ENV EXPRESS_PORT "8084"


WORKDIR /usr/app

COPY packages/backend packages/backend
COPY package.json package.json

RUN yarn workspace backend install --production

# install init system: https://github.com/Yelp/dumb-init
RUN apk add dumb-init

CMD ["/usr/bin/dumb-init", "yarn", "workspace", "backend", "start"]
