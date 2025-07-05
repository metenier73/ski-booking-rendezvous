import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  fr: {
    // Header
    'nav.services': 'Services',
    'nav.pricing': 'Tarifs', 
    'nav.booking': 'Réservation',
    'nav.contact': 'Contact',
    'button.book': 'Réserver',
    
    // Hero
    'hero.subtitle': 'Monitrice Française Diplômée',
    'hero.title.1': 'Apprenez le ski avec',
    'hero.title.2': 'passion',
    'hero.description': 'Plus de 20 ans d\'expérience pour vous accompagner dans votre progression, du débutant au skieur confirmé. Cours personnalisés à Val d\'Isère et Tignes.',
    'hero.book.button': 'Réserver un cours',
    'hero.pricing.button': 'Voir les tarifs',
    'hero.experience': 'Années d\'expérience',
    'hero.diploma': 'Diplôme officiel',
    'hero.students': 'Élèves formés',
    'hero.instructor': 'Monitrice Indépendante',
    
    // Booking Form
    'booking.title': 'Réserver un Cours',
    'booking.subtitle': 'Remplissez le formulaire ci-dessous pour réserver votre cours de ski. Je vous recontacterai rapidement pour confirmer votre réservation.',
    'booking.server.checking': 'Vérification du serveur...',
    'booking.server.online': 'Serveur disponible',
    'booking.server.offline': 'Serveur non disponible - Démarrez le serveur backend',
    'booking.form.title': 'Formulaire de réservation',
    'booking.form.subtitle': 'Toutes les informations sont nécessaires pour traiter votre demande',
    'booking.name': 'Nom complet',
    'booking.email': 'Email',
    'booking.phone': 'Téléphone',
    'booking.course.type': 'Type de cours',
    'booking.course.private': 'Cours particulier (65€/h)',
    'booking.course.group': 'Cours collectif (35€/1h30)',
    'booking.course.child': 'Cours enfant',
    'booking.course.stage': 'Stage 5 jours (280€)',
    'booking.participants': 'Nombre de participants',
    'booking.date': 'Date souhaitée',
    'booking.time': 'Créneau horaire',
    'booking.time.morning': 'Matin (9h-12h)',
    'booking.time.afternoon': 'Après-midi (13h-16h)',
    'booking.time.fullday': 'Journée complète',
    'booking.level': 'Niveau de ski',
    'booking.level.beginner': 'Débutant',
    'booking.level.intermediate': 'Intermédiaire',
    'booking.level.advanced': 'Avancé',
    'booking.level.expert': 'Expert',
    'booking.message': 'Message (optionnel)',
    'booking.message.placeholder': 'Objectifs particuliers, informations complémentaires...',
    'booking.submit': 'Envoyer la demande de réservation',
    'booking.submit.sending': 'Envoi en cours...',
    'booking.success': 'Demande de réservation envoyée ! Je vous recontacterai rapidement.',
    'booking.footer': '* Champs obligatoires. Je vous recontacterai dans les 24h pour confirmer votre réservation.',
    'booking.placeholders.name': 'Votre nom et prénom',
    'booking.placeholders.email': 'votre@email.com',
    'booking.placeholders.phone': '06 12 34 56 78',
    'booking.placeholders.course': 'Choisir un type de cours',
    'booking.placeholders.participants': 'Nombre',
    'booking.placeholders.time': 'Choisir un horaire',
    'booking.placeholders.level': 'Quel est votre niveau ?',
    
    // Common
    'common.required': 'obligatoire',

    // Booking Form errors
    'booking.error.required': 'Veuillez remplir tous les champs obligatoires (nom, email, téléphone, type de cours).',
    'booking.error.default': 'Erreur lors de l\'envoi de la demande. Veuillez réessayer.',
    'booking.error.connection': 'Impossible de contacter le serveur. Vérifiez que le serveur backend est démarré sur le port 3001.',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.booking': 'Booking',
    'nav.contact': 'Contact',
    'button.book': 'Book Now',
    
    // Hero
    'hero.subtitle': 'Certified French Instructor',
    'hero.title.1': 'Learn skiing with',
    'hero.title.2': 'passion',
    'hero.description': 'Over 20 years of experience to guide your progression, from beginner to advanced skier. Personalized lessons in Val d\'Isère and Tignes.',
    'hero.book.button': 'Book a lesson',
    'hero.pricing.button': 'See pricing',
    'hero.experience': 'Years of experience',
    'hero.diploma': 'Official diploma',
    'hero.students': 'Students trained',
    'hero.instructor': 'Independent Instructor',
    
    // Booking Form
    'booking.title': 'Book a Lesson',
    'booking.subtitle': 'Fill out the form below to book your ski lesson. I will contact you shortly to confirm your reservation.',
    'booking.server.checking': 'Checking server...',
    'booking.server.online': 'Server available',
    'booking.server.offline': 'Server unavailable - Start the backend server',
    'booking.form.title': 'Booking form',
    'booking.form.subtitle': 'All information is required to process your request',
    'booking.name': 'Full name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.course.type': 'Course type',
    'booking.course.private': 'Private lesson (€65/h)',
    'booking.course.group': 'Group lesson (€35/1h30)',
    'booking.course.child': 'Children\'s lesson',
    'booking.course.stage': '5-day course (€280)',
    'booking.participants': 'Number of participants',
    'booking.date': 'Preferred date',
    'booking.time': 'Time slot',
    'booking.time.morning': 'Morning (9am-12pm)',
    'booking.time.afternoon': 'Afternoon (1pm-4pm)',
    'booking.time.fullday': 'Full day',
    'booking.level': 'Ski level',
    'booking.level.beginner': 'Beginner',
    'booking.level.intermediate': 'Intermediate',
    'booking.level.advanced': 'Advanced',
    'booking.level.expert': 'Expert',
    'booking.message': 'Message (optional)',
    'booking.message.placeholder': 'Specific goals, additional information...',
    'booking.submit': 'Send booking request',
    'booking.submit.sending': 'Sending...',
    'booking.success': 'Booking request sent! I will contact you shortly.',
    'booking.footer': '* Required fields. I will contact you within 24h to confirm your booking.',
    'booking.placeholders.name': 'Your first and last name',
    'booking.placeholders.email': 'your@email.com',
    'booking.placeholders.phone': '06 12 34 56 78',
    'booking.placeholders.course': 'Choose a course type',
    'booking.placeholders.participants': 'Number',
    'booking.placeholders.time': 'Choose a time slot',
    'booking.placeholders.level': 'What is your level?',
    
    // Common
    'common.required': 'required',

    // Booking Form errors
    'booking.error.required': 'Please fill in all required fields (name, email, phone, course type).',
    'booking.error.default': 'Error sending the request. Please try again.',
    'booking.error.connection': 'Unable to contact the server. Check that the backend server is running on port 3001.',
  }
};
