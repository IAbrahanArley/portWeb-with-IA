FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Copia o backend inteiro e a pasta core
COPY backend ./backend
COPY core ./core

# Entra na pasta do backend e roda o build
WORKDIR /app/backend
RUN npm run build

# Imagem final
FROM node:20-alpine

WORKDIR /app

# Copia o dist e o package.json do builder
COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/package.json ./

RUN npm install --production

EXPOSE 4000
CMD ["node", "dist/main"]
