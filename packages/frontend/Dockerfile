FROM node:10.23.0-alpine3.11 AS builder

WORKDIR /usr/app

COPY packages/frontend packages/frontend
COPY package.json package.json

RUN yarn workspace frontend install

RUN yarn workspace frontend build

FROM nginx:1.19.5-alpine
COPY --from=builder /usr/app/packages/frontend/dist /usr/share/nginx/html
