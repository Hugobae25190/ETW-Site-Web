# SOLUTION IMMÉDIATE - Configuration en 2 minutes

## Étape 1: Créer un webhook gratuit

1. Va sur https://webhook.site
2. Copie l'URL unique (ex: https://webhook.site/abc123def456)
3. Garde cette page ouverte

## Étape 2: Configurer l'envoi d'email

1. Va sur https://zapier.com
2. Crée un compte gratuit
3. Crée un nouveau Zap :
   - **Trigger:** Webhooks by Zapier > Catch Hook
   - **Action:** Email by Zapier > Send Email
4. Configure l'action email :
   - **To:** contact@hugobaechler.com
   - **Subject:** Free Audit Request - {{name}}
   - **Body:** 
     ```
     New Free Audit Request:
     
     Name: {{name}}
     Email: {{email}}
     Weight: {{weight}}kg
     Challenge: {{challenge}}
     
     Time: {{timestamp}}
     ```
5. Copie l'URL du webhook Zapier

## Étape 3: Mettre à jour le code

Remplace dans `app/api/send-email/route.ts` :
```javascript
const webhookUrl = 'https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/';
```

Et décommente les lignes du webhook.

## Alternative: Solution sans configuration

Le formulaire fonctionne déjà et log les données dans la console.
Tu peux voir les demandes dans ton terminal quand tu développes.

## Test

1. Teste le formulaire
2. Vérifie que tu reçois l'email dans contact@hugobaechler.com
3. Si ça ne marche pas, vérifie les logs dans la console
