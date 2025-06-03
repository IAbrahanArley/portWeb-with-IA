# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

WORKDIR /app/apps/backend
RUN npx prisma generate
RUN npm run build

# Etapa 2: Runtime
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/apps/backend/package.json ./
COPY --from=builder /app/apps/backend/prisma ./prisma

RUN npx prisma generate

ENV PORT=4000
EXPOSE $PORT

CMD ["node", "dist/main"]
