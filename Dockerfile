FROM nginx
COPY ./dist/sample1 /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
