# Use a Node.js base image
FROM node:16-alpine
# Apply any updates to the base image
RUN apk -U upgrade
# Set the working directory in the container
WORKDIR /app
# Install dependencies
RUN npm init -f && npm install
# Copy code into the image
COPY index.js .
# Expose the port
EXPOSE 8080
# Start the application
# CMD [ "node", "index.js" ]