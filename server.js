const express = require('express');
const bodyParser = require('body-parser');
const { EmbedBuilder } = require('discord.js');  // Optionnel, si tu veux envoyer des messages avec embeds
const fs = require('fs');

const app = express();

// Middleware pour analyser les données POST de PayPal
app.use(bodyParser.urlencoded({ extended: false }));

// URL de ton webhook PayPal
const PAYPAL_WEBHOOK_URL = 'https://dino-server.onrender.com';  // Remplace par l'URL publique de ton serveur
const PAYPAL_CLIENT_ID = 'AQQODoHs2y8AlgVc7mWpU5ofrXsErHGP4DI7rPSi_f84ByBYKj65ZfXtxm9MrAGp2RrOlnpWxDdrXpsS';  // Ton client ID PayPal
const PAYPAL_SECRET = 'EHBTKuyLSzrJkEYCUdH4QCWLLQK_AZDGg3WotSHdLALXg0509mNHtJIK9IWjNmQ-xrKQUna0dHAzeT5l';  // Ton secret PayPal

// Serveur Express pour recevoir les notifications de PayPal
app.post('/notify', async (req, res) => {
    const webhookEvent = req.body;

    // Vérifier si l'événement est un paiement confirmé
    if (webhookEvent.event_type === 'PAYMENT.SALE.COMPLETED') {
        const paymentId = webhookEvent.resource.id;
        const amount = webhookEvent.resource.amount.total;
        
        // Logique pour traiter le paiement et confirmer la réception
        console.log(`Paiement reçu : ${amount} EUR`);

        // Optionnel : envoyer un message à un canal Discord
        const channel = null;  // Tu peux remplacer par l'ID du canal Discord si tu souhaites envoyer des notifications
        if (channel) {
            const embed = new EmbedBuilder()
                .setTitle('Paiement Confirmé')
                .setDescription(`Un paiement de ${amount} EUR a été reçu. Paiement ID: ${paymentId}`)
                .setColor('#5865F2');
            
            channel.send({ embeds: [embed] });
        }

        res.status(200).send('OK');
    } else {
        res.status(400).send('Événement non traité');
    }
});

// Démarrer le serveur Express
app.listen(3000, () => {
    console.log('Serveur Express démarré sur le port 3000');
});
