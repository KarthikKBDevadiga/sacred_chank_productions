# Dockerfile

# Use Node 16.14 LTS 16.14.0-alpine3.15
FROM node:latest

# Change Working Directory
WORKDIR /usr/src/app

# Copy The package.json File From Local Machine To The workdir In Container
COPY package.json ./

# Install Dependencies
RUN npm install

# Copy Source Code
COPY . .

# Expose API Port To The Outside
EXPOSE 3000

# Build The Project 
RUN npm run build

# Launch Application
CMD ["npm", "run", "start"]
