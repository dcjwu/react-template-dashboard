FROM node:alpine as builder
WORKDIR /usr/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html
RUN touch var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]




