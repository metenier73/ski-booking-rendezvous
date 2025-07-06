
# Site de Réservation de Cours de Ski - Myriam Metenier

Site web professionnel pour une monitrice de ski indépendante proposant des cours personnalisés à Val d'Isère et Tignes.

## Fonctionnalités

- 🎿 Présentation des services de cours de ski
- 💰 Grille tarifaire détaillée
- 📅 Système de réservation en ligne
- 🌐 Interface multilingue (Français/Anglais)
- 📱 Design responsive
- ✉️ Envoi d'emails automatique pour les réservations

## Technologies utilisées

- **Frontend** : React, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend** : Node.js, Express
- **Email** : Nodemailer (Yahoo Mail)

## Installation et configuration

### 1. Cloner le repository
```bash
git clone <url-du-repository>
cd ski-booking-rendezvous
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration des variables d'environnement
Créez un fichier `.env` à la racine du projet avec :
```env
PORT=3001
YAHOO_USER=votre-email@yahoo.fr
YAHOO_PASS=votre-mot-de-passe-application-yahoo
```

**Important** : Pour Yahoo Mail, vous devez utiliser un "mot de passe d'application" et non votre mot de passe principal.

### 4. Démarrer l'application

#### Frontend (développement)
```bash
npm run dev
```

#### Backend
```bash
node server.js
```

L'application sera accessible sur `http://localhost:5173` et le serveur backend sur `http://localhost:3001`.

## Configuration Yahoo Mail

Pour utiliser Yahoo Mail avec Nodemailer :

1. Connectez-vous à votre compte Yahoo
2. Allez dans "Paramètres de compte" > "Sécurité du compte"
3. Activez l'authentification à deux facteurs si ce n'est pas fait
4. Générez un "mot de passe d'application" pour cette application
5. Utilisez ce mot de passe d'application dans la variable `YAHOO_PASS`

## Déploiement

### Variables d'environnement en production
Assurez-vous de configurer les variables d'environnement suivantes sur votre plateforme de déploiement :
- `YAHOO_USER`
- `YAHOO_PASS`
- `PORT` (optionnel, défaut: 3001)

### GitHub Actions (si applicable)
Les secrets GitHub doivent être configurés :
- `YAHOO_USER`
- `YAHOO_PASS`

## Structure du projet

```
├── src/
│   ├── components/          # Composants React
│   ├── contexts/           # Contextes React (LanguageContext)
│   ├── pages/              # Pages de l'application
│   └── ...
├── server.js               # Serveur Express
├── .env.example           # Exemple de configuration
└── README.md
```

## Contact

Pour toute question concernant les cours de ski :
- **Email** : meteniermyriam@yahoo.fr
- **Téléphone** : 07 68 10 61 07
- **Localisation** : Val d'Isère & Tignes
