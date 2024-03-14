# Base image
FROM node:21-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Expose the port
EXPOSE 4173

# Start the application
CMD ["npm", "run", "preview"]