<<<<<<< HEAD
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
=======
FROM node:10.1.0
RUN apt-get update \
    && apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install \
&& npm run build \
&& cp -r dist/* /var/www/html \
&& rm -rf /app
CMD ["nginx","-g","daemon off;"]
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
