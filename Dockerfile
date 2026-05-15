FROM node:20-alpine AS build
WORKDIR /app/redux-version
COPY redux-version/package*.json ./
RUN npm ci --legacy-peer-deps
COPY redux-version/ ./
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/redux-version/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=10s --timeout=5s --retries=12 --start-period=15s CMD wget -qO- http://localhost/ >/dev/null || exit 1
CMD ["nginx", "-g", "daemon off;"]
