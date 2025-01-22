# Use a Node.js base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
