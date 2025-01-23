# Use a Node.js base image
FROM node:16-alpine
# Apply any updates to the base image
RUN apk -U upgrade
# Set the working directory in the container
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
# Install dependencies
COPY package*.json .
RUN npm init -f && npm install
# Copy code into the image
COPY --chown=node:node index.js .
# Make inxes.js executable
RUN chmod +x /home/node/app/index.js
# Expose the port
EXPOSE 8080
# Start the application
CMD [ "index.js" ]

#ENTRYPOINT ["/root/app.sh"]
