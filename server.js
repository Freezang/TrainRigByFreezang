const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Bot Discord configuration
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const PAYPAL_WEBHOOK_URL = 'https://dino-serveur.com/notify';  // URL du webhook PayPal
const PAYPAL_CLIENT_ID = 'AQQODoHs2y8AlgVc7mWpU5ofrXsErHGP4DI7rPSi_f84ByBYKj65ZfXtxm9MrAGp2RrOlnpWxDdrXpsS';
const PAYPAL_SECRET = 'EHBTKuyLSzrJkEYCUdH4QCWLLQK_AZDGg3WotSHdLALXg0509mNHtJIK9IWjNmQ-xrKQUna0dHAzeT5l';

// Server listening for PayPal notifications
app.post('/notify', async (req, res) => {
    const webhookEvent = req.body;
    // Vérifie si le paiement est confirmé
    if (webhookEvent.event_type === 'PAYMENT.SALE.COMPLETED') {
        // Exemple de traitement du paiement
        const paymentId = webhookEvent.resource.id;
        const amount = webhookEvent.resource.amount.total;
        
        // Processus de confirmation ou autre logique ici...
        console.log(`Paiement reçu : ${amount} EUR`);

        // Optionnel: envoyer un message à un canal Discord, ou à l'acheteur
        const channel = client.channels.cache.get('ID_CANAL');
        channel.send(`Un paiement de ${amount} EUR a été confirmé.`);

        res.status(200).send('OK');
    } else {
        res.status(400).send('Événement non traité');
    }
});

// Démarrer l'Express server
app.listen(3000, () => {
    console.log('Serveur Express démarré sur le port 3000');
});

// Connexion du bot Discord
client.login('TON_TOKEN_BOT');
