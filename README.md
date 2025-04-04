# Quantech Banking

App de gestion de comptes bancaires.

## Technologies utilisées

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [AdonisJS](https://adonisjs.com/)

## Prérequis

- Node.js
- npm, pnpm ou yarn

## Installation et lancement local

1. Cloner le dépôt

   ```bash
   git clone https://github.com/amaryange/quantech_banking.git
   ```
2. Installer les dépendances de chaque projet (backend, frontend)
    
    - Pour le backend
        
        ```bash
        cd back_quantech
        npm i
        bun i
        ```
    - Pour le frontend
        
        ```bash
        cd front_quantech
        npm i
        bun i
        ```

3. Executer la commande suivante pour lancer le docker-compose.yml

   ```bash
   docker compose up -d --build
   ```

4. Exécuter la commande suivante pour lancer la migration de base de donnée du backend

   ```bash
   docker compose exec back_quantech node ace migration:run 
   ```
    
    - Si ça ne fonctionne pas, essayer de lancer la commande suivante
   
        ```bash
        docker compose exec (nom du service en cours via docker ps) node ace migration:run --force
        ```


5. Exécuter la commande suivante pour ajouter des données de démonstration

   ```bash
   docker compose exec back_quantech node ace db:seed
   ```
   il ajoutera ces données avec les utilisateurs suivants :
   - email : kouadio@email.com
   - password : 0987654321
   - email : meledje@email.com
   - password : 0987654321

6. Rendez vous sur http://localhost:3000 pour accéder à l'interface de gestion de comptes et connectez-vous avec les identifiants précédemment définis.

## Si vous avez des questions

Si vous avez des questions ou des problèmes, n'hésitez pas à nous contacter via email à l'adresse suivante : meless@amarycode.dev
