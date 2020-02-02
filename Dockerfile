# build environment
FROM node:latest as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN ls -a
RUN yarn  install
RUN yarn  build


# production environment
FROM nginx:1.13.9-alpine
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]