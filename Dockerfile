# Use the official Node.js image.
FROM node:20-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the React app to generate the /dist folder
RUN npm run build

# Expose the port defined by Cloud Run (default 8080)
EXPOSE 8080

# Run the web service on container startup.
CMD [ "node", "server.js" ]
