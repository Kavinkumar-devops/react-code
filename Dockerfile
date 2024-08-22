FROM node:21-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install --save --legacy-peer-deps
COPY . .
RUN npm run build
CMD [ "npm", "run", "dev"]

# Stage 2: Serve the React app using an nginx server
FROM nginx:stable-alpine

COPY --from=build /usr/src/app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
