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
    
    // Services
    'services.title': 'Mes Services',
    'services.subtitle': 'Des cours adaptés à tous les niveaux et tous les âges pour vous faire progresser en toute sécurité',
    'services.private.title': 'Cours particuliers',
    'services.private.description': 'Apprentissage personnalisé selon votre niveau et vos objectifs',
    'services.private.feature1': 'Progression rapide',
    'services.private.feature2': 'Attention individuelle',
    'services.private.feature3': 'Horaires flexibles',
    'services.group.title': 'Cours collectifs',
    'services.group.description': 'Partagez l\'expérience avec d\'autres passionnés',
    'services.group.feature1': 'Ambiance conviviale',
    'services.group.feature2': 'Tarifs avantageux',
    'services.group.feature3': 'Groupes de 4-6 personnes',
    'services.children.title': 'Cours enfants',
    'services.children.description': 'Initiation ludique au ski pour les 4-12 ans',
    'services.children.feature1': 'Méthode adaptée',
    'services.children.feature2': 'Jeux et activités',
    'services.children.feature3': 'Sécurité prioritaire',
    'services.advanced.title': 'Perfectionnement',
    'services.advanced.description': 'Techniques avancées pour skieurs confirmés',
    'services.advanced.feature1': 'Hors-piste',
    'services.advanced.feature2': 'Compétition',
    'services.advanced.feature3': 'Techniques expertes',
    
    // Pricing
    'pricing.title': 'Tarifs des Cours',
    'pricing.subtitle': 'Des formules adaptées à tous les budgets pour apprendre le ski dans les meilleures conditions',
    'pricing.private.name': 'Cours particulier',
    'pricing.private.description': 'Cours individuel personnalisé',
    'pricing.private.feature1': 'Attention individuelle',
    'pricing.private.feature2': 'Progression adaptée',
    'pricing.private.feature3': 'Horaires flexibles',
    'pricing.private.feature4': 'Tous niveaux',
    'pricing.group.name': 'Cours collectif',
    'pricing.group.description': 'Groupe de 4-6 personnes',
    'pricing.group.feature1': 'Ambiance conviviale',
    'pricing.group.feature2': 'Émulation de groupe',
    'pricing.group.feature3': 'Tarif avantageux',
    'pricing.group.feature4': 'Niveau homogène',
    'pricing.stage.name': 'Stage 5 jours',
    'pricing.stage.description': 'Formule intensive',
    'pricing.stage.feature1': 'Progression rapide',
    'pricing.stage.feature2': 'Suivi personnalisé',
    'pricing.stage.feature3': 'Groupe restreint',
    'pricing.stage.feature4': 'Meilleur rapport qualité/prix',
    'pricing.popular': 'Populaire',
    'pricing.book': 'Réserver',
    'pricing.discount.title': 'Tarifs dégressifs disponibles',
    'pricing.discount.description': 'Réductions pour les familles et les groupes. Forfaits semaine disponibles.',
    
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
    
    // Contact
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'N\'hésitez pas à me contacter pour toute question ou pour réserver vos cours de ski. Je suis à votre disposition pour vous accompagner dans votre progression.',
    'contact.phone.title': 'Téléphone',
    'contact.phone.content': '07 68 10 61 07',
    'contact.phone.description': 'Disponible 7j/7 pendant la saison',
    'contact.email.title': 'Email',
    'contact.email.content': 'meteniermyriam@yahoo.fr',
    'contact.email.description': 'Réponse sous 24h garantie',
    'contact.location.title': 'Lieu',
    'contact.location.content': 'Val d\'Isère & Tignes',
    'contact.location.description': 'Station de ski des Alpes',
    'contact.hours.title': 'Horaires',
    'contact.hours.content': '9h - 17h',
    'contact.hours.description': 'Saison d\'hiver : Décembre à Avril',
    'contact.cta.title': 'Prêt(e) à dévaler les pistes ?',
    'contact.cta.description': 'Que vous soyez débutant ou confirmé, je vous accompagne dans votre progression avec passion et professionnalisme. Plus de 20 ans d\'expérience à votre service !',
    'contact.stats.experience': 'Années d\'expérience',
    'contact.stats.students': 'Élèves formés',
    'contact.stats.satisfaction': 'Satisfaction client',
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
    
    // Services
    'services.title': 'My Services',
    'services.subtitle': 'Lessons adapted to all levels and ages to help you progress safely',
    'services.private.title': 'Private lessons',
    'services.private.description': 'Personalized learning according to your level and goals',
    'services.private.feature1': 'Fast progression',
    'services.private.feature2': 'Individual attention',
    'services.private.feature3': 'Flexible schedule',
    'services.group.title': 'Group lessons',
    'services.group.description': 'Share the experience with other enthusiasts',
    'services.group.feature1': 'Friendly atmosphere',
    'services.group.feature2': 'Advantageous rates',
    'services.group.feature3': 'Groups of 4-6 people',
    'services.children.title': 'Children lessons',
    'services.children.description': 'Fun ski introduction for 4-12 year olds',
    'services.children.feature1': 'Adapted method',
    'services.children.feature2': 'Games and activities',
    'services.children.feature3': 'Safety priority',
    'services.advanced.title': 'Advanced training',
    'services.advanced.description': 'Advanced techniques for experienced skiers',
    'services.advanced.feature1': 'Off-piste',
    'services.advanced.feature2': 'Competition',
    'services.advanced.feature3': 'Expert techniques',
    
    // Pricing
    'pricing.title': 'Lesson Rates',
    'pricing.subtitle': 'Packages adapted to all budgets to learn skiing in the best conditions',
    'pricing.private.name': 'Private lesson',
    'pricing.private.description': 'Personalized individual lesson',
    'pricing.private.feature1': 'Individual attention',
    'pricing.private.feature2': 'Adapted progression',
    'pricing.private.feature3': 'Flexible schedule',
    'pricing.private.feature4': 'All levels',
    'pricing.group.name': 'Group lesson',
    'pricing.group.description': 'Group of 4-6 people',
    'pricing.group.feature1': 'Friendly atmosphere',
    'pricing.group.feature2': 'Group emulation',
    'pricing.group.feature3': 'Advantageous rate',
    'pricing.group.feature4': 'Homogeneous level',
    'pricing.stage.name': '5-day course',
    'pricing.stage.description': 'Intensive format',
    'pricing.stage.feature1': 'Fast progression',
    'pricing.stage.feature2': 'Personalized follow-up',
    'pricing.stage.feature3': 'Small group',
    'pricing.stage.feature4': 'Best value for money',
    'pricing.popular': 'Popular',
    'pricing.book': 'Book',
    'pricing.discount.title': 'Reduced rates available',
    'pricing.discount.description': 'Discounts for families and groups. Week packages available.',
    
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
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Don\'t hesitate to contact me for any questions or to book your ski lessons. I am at your disposal to accompany you in your progression.',
    'contact.phone.title': 'Phone',
    'contact.phone.content': '07 68 10 61 07',
    'contact.phone.description': 'Available 7 days a week during the season',
    'contact.email.title': 'Email',
    'contact.email.content': 'meteniermyriam@yahoo.fr',
    'contact.email.description': 'Response within 24h guaranteed',
    'contact.location.title': 'Location',
    'contact.location.content': 'Val d\'Isère & Tignes',
    'contact.location.description': 'Alpine ski resort',
    'contact.hours.title': 'Hours',
    'contact.hours.content': '9am - 5pm',
    'contact.hours.description': 'Winter season: December to April',
    'contact.cta.title': 'Ready to hit the slopes?',
    'contact.cta.description': 'Whether you are a beginner or advanced, I accompany you in your progression with passion and professionalism. Over 20 years of experience at your service!',
    'contact.stats.experience': 'Years of experience',
    'contact.stats.students': 'Students trained',
    'contact.stats.satisfaction': 'Customer satisfaction',
  }
};
