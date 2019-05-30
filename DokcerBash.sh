#!/bin/bash
<<<<<<< HEAD
docker stop ant-vue-blog-front
docker rm ant-vue-blog-front
docker rmi ant-vue-blog-front
docker build -t ant-vue-blog-front .
docker run \
-p 3000:80 \
-d --name ant-vue-blog-front \
ant-vue-blog-front
=======
docker stop ant-vue-blog-admin
docker rm ant-vue-blog-admin
docker rmi ant-vue-blog-admin
docker build -t ant-vue-blog-admin .
docker run \
-p 3000:80 \
-d --name ant-vue-blog-admin \
ant-vue-blog-admin
>>>>>>> 6fc6a46b2db576a3f11175697362b56f063c619d
