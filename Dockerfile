FROM node:14.21.3
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
EXPOSE 8080
ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]