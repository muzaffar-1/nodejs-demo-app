# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
