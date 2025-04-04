# 1️⃣ Image de base
FROM node:20.12.2-alpine3.18 AS base

# 2️⃣ Installation des dépendances
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install  # Installe toutes les dépendances

# 3️⃣ Copie du code source et exécution
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
