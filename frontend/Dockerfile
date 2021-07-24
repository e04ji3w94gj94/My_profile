FROM node:14.13.1-alpine as react_build


WORKDIR /usr/app
#copy the react app to the container
COPY ./package.json /usr/app/ 

# #prepare the contiainer for building react 
RUN npm install --silent
COPY . /usr/app/ 
RUN npm run build 

#prepare nginx
FROM nginx:1.16.0-alpine

COPY --from=react_build /usr/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]

