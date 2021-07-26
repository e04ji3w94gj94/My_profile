FROM node:14.13.1-alpine as react_build


WORKDIR /app

COPY package.json /app/ 
# #prepare the contiainer for building react 
RUN npm install --silent

#copy the react app to the container
COPY . /app/ 
RUN npm run build 


#prepare nginx
FROM nginx:1.21.0

COPY nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=react_build /app/build /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'


