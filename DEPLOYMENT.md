# BNF FINANCE - Guide de Déploiement

## Informations du Projet

**Nom**: BNF FINANCE
**Adresse**: 6 COURS FORBIN 13120 GARDANNE
**Email**: eurobnpbank@gmail.com
**Formspree ID**: xbdbjdez

## Langues Supportées

- Français (FR)
- Anglais (EN)
- Allemand (DE)
- Italien (IT)
- Lituanien (LT)
- Norvégien (NO)
- Finnois (FI)
- Slovène (SL)
- Slovaque (SK)
- Espagnol (ES)

## Types de Prêts

1. Prêt Personnel
2. Prêt Immobilier
3. Prêt Professionnel/Entreprise
4. Prêt Auto
5. Prêt Étudiant
6. Autres Solutions

## Déploiement sur Vercel

### Prérequis
- Compte Vercel
- Dépôt GitHub avec le code

### Étapes

1. **Connecter le dépôt GitHub à Vercel**
   - Aller sur vercel.com
   - Cliquer sur "New Project"
   - Importer le dépôt GitHub

2. **Configurer les variables d'environnement**
   - Aucune variable d'environnement requise pour cette version statique

3. **Déployer**
   - Vercel détectera automatiquement le projet React/Vite
   - Le déploiement se fera automatiquement

## Structure du Projet

```
bnf-finance/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Form.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── contexts/
│   │   │   └── LanguageContext.tsx
│   │   ├── const.ts
│   │   └── App.tsx
│   └── index.html
├── package.json
└── vite.config.ts
```

## Fonctionnalités

- ✅ Support multilingue (10 langues)
- ✅ Formulaire de demande de financement avec Formspree
- ✅ Design nordique minimaliste
- ✅ Pages About et Contact
- ✅ Responsive design
- ✅ Navigation fluide
- ✅ Témoignages clients
- ✅ Processus transparent en 3 étapes

## Notes de Développement

- Le site utilise React 19 avec Vite
- Tailwind CSS 4 pour le styling
- Wouter pour le routage côté client
- Formspree pour la gestion des formulaires
- Les traductions sont stockées dans `const.ts`
