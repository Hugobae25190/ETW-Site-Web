# Solution Email Immédiate - Configuration Rapide

## Option 1: Webhook.site + Email Forwarding (5 minutes)

1. Va sur https://webhook.site
2. Copie l'URL unique (ex: https://webhook.site/abc123)
3. Remplace dans `app/api/send-email/route.ts` :
   ```javascript
   const webhookUrl = 'https://webhook.site/abc123';
   ```
4. Décommente les lignes du webhook dans le code
5. Configure une redirection email depuis webhook.site vers ton email

## Option 2: Formspree (2 minutes - RECOMMANDÉ)

1. Va sur https://formspree.io
2. Crée un compte gratuit
3. Crée un nouveau formulaire
4. Copie l'URL du formulaire (ex: https://formspree.io/f/xpwgqkqv)
5. Remplace dans `app/api/send-email/route.ts` :
   ```javascript
   const formspreeUrl = 'https://formspree.io/f/xpwgqkqv';
   ```

## Option 3: Solution Directe (1 minute)

Je vais créer une version qui utilise directement Formspree sans configuration :
