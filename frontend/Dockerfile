FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

# Use nodemon for development
CMD ["nodemon", "--watch", ".", "--exec", "npm run dev"]
