# ------------------------------
# Stage 1 — Install dependencies
# ------------------------------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ------------------------------
# Stage 2 — Build app
# ------------------------------
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ------------------------------
# Stage 3 — Production runner
# ------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/build ./build

EXPOSE 3000

# ✅ Serve using React Router’s built-in server
CMD ["npx", "react-router-serve", "./build/server/index.js", "--host", "0.0.0.0", "--port", "3000"]
