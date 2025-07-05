import 'dotenv/config';

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Route de test pour vérifier que le serveur fonctionne
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Serveur backend en fonctionnement' });
});

app.post('/api/book', async (req, res) => {
  console.log('Nouvelle demande de réservation reçue:', req.body);
  
  const { name, email, phone, courseType, date, time, participants, level, message } = req.body;

  // Validation des champs obligatoires
  if (!name || !email || !phone || !courseType) {
    console.log('Champs obligatoires manquants');
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  try {
    console.log('Configuration du transporteur email...');
    const transporter = nodemailer.createTransporter({
      service: 'yahoo',
      auth: {
        user: process.env.YAHOO_USER,
        pass: process.env.YAHOO_PASS,
      },
    });

    // Test de la connexion SMTP
    await transporter.verify();
    console.log('Connexion SMTP vérifiée avec succès');

    const mailOptions = {
      from: process.env.YAHOO_USER,
      to: process.env.YAHOO_USER,
      subject: 'Nouvelle demande de réservation - Monitrice de Ski',
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Type de cours:</strong> ${courseType}</p>
        <p><strong>Date:</strong> ${date || 'Non spécifiée'}</p>
        <p><strong>Heure:</strong> ${time || 'Non spécifiée'}</p>
        <p><strong>Participants:</strong> ${participants || 'Non spécifié'}</p>
        <p><strong>Niveau:</strong> ${level || 'Non spécifié'}</p>
        <p><strong>Message:</strong> ${message || 'Aucun message'}</p>
      `,
    };

    console.log('Envoi de l\'email...');
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');
    
    res.status(200).json({ message: 'Demande envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    res.status(500).json({ 
      message: 'Erreur lors de l\'envoi de la demande.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
  console.log(`Variables d'environnement:`);
  console.log(`- YAHOO_USER: ${process.env.YAHOO_USER ? 'Défini' : 'Non défini'}`);
  console.log(`- YAHOO_PASS: ${process.env.YAHOO_PASS ? 'Défini' : 'Non défini'}`);
});
