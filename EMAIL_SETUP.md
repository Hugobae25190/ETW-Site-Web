# Configuration pour l'envoi d'emails

## Option 1: Resend (Recommandé)
1. Va sur https://resend.com
2. Crée un compte gratuit
3. Va dans "API Keys" et crée une nouvelle clé
4. Copie la clé et ajoute-la dans ton fichier .env.local :
   RESEND_API_KEY=re_xxxxxxxxxxxxx

## Option 2: EmailJS (Alternative)
1. Va sur https://www.emailjs.com/
2. Crée un compte gratuit
3. Configure un service email (Gmail, Outlook, etc.)
4. Crée un template d'email
5. Remplace les IDs dans app/api/send-email/route.ts

## Option 3: Webhook simple (Plus simple)
Utilise un service comme Formspree ou Netlify Forms pour un setup plus simple.

## Configuration actuelle
Le formulaire envoie maintenant directement l'email à contact@hugobaechler.com
via l'API route /api/send-email
