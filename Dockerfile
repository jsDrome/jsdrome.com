FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app

ADD .babelrc /opt/app/.babelrc

ADD images /opt/app/images
ADD src /opt/app/src
ADD posts /opt/app/posts
ADD templates /opt/app/templates
ADD webpack /opt/app/webpack

COPY package*.json /opt/app/

RUN npm ci --no-optional
RUN npm run build:client:prod

EXPOSE 5000

CMD [ "npm", "start" ]