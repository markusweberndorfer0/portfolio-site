FROM node:20.17.0-alpine
WORKDIR /app
COPY . .
RUN npm install --verbose
RUN npm run build --verbose
CMD ["sh", "./run.sh"]
EXPOSE 3000