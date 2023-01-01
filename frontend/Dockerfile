FROM node:14-slim

RUN mkdir -p /app
COPY . /app
RUN cd /app && npm install
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
