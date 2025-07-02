require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/book', async (req, res) => {
  const { name, email, phone, courseType, date, time, participants, level, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.YAHOO_USER,
      pass: process.env.YAHOO_PASS,
    },
  });

  const mailOptions = {
    from: process.env.YAHOO_USER,
    to: process.env.YAHOO_USER,
    subject: 'Nouvelle demande de réservation',
    text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nType de cours: ${courseType}\nDate: ${date}\nHeure: ${time}\nParticipants: ${participants}\nNiveau: ${level}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Demande envoyée avec succès !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de la demande.' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
}); 