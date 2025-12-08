# Stage 1: Build Angular Universal (SSR + browser bundles)
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build localized SSR bundles
RUN npx ng build --localize --configuration=production

# Stage 2: Run SSR
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=build /app/dist ./dist

EXPOSE 4000

# Use your existing SSR script
CMD ["npm", "run", "serve:ssr:oceanrota"]