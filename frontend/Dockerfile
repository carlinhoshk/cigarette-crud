FROM node:alpine AS meu-cigarro-crud-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=meu-cigarro-crud-build /app/dist/app-to-run-inside-docker /usr/share/nginx/html
EXPOSE 80