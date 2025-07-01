
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "Cours particulier",
      price: "65",
      duration: "1h",
      description: "Idéal pour débuter ou se perfectionner rapidement",
      features: [
        "Cours personnalisé",
        "Matériel inclus",
        "Tous niveaux",
        "Horaires flexibles"
      ],
      popular: false
    },
    {
      title: "Pack 5 cours",
      price: "280",
      originalPrice: "325",
      duration: "5 x 1h",
      description: "Le meilleur rapport qualité-prix pour progresser",
      features: [
        "5 cours particuliers",
        "Suivi personnalisé",
        "Matériel inclus",
        "Économie de 45€"
      ],
      popular: true
    },
    {
      title: "Cours collectif",
      price: "35",
      duration: "2h",
      description: "Partagez l'expérience avec d'autres skieurs",
      features: [
        "Groupe de 4-6 personnes",
        "Ambiance conviviale",
        "Niveau homogène",
        "Matériel inclus"
      ],
      popular: false
    }
  ];

  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarifs Transparents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des prix justes pour un enseignement de qualité. Matériel de ski inclus dans tous les cours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-2xl scale-105' : 'border shadow-lg'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Plus populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </CardTitle>
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}€</span>
                    <span className="text-gray-500">/ {plan.duration}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {plan.originalPrice}€
                    </div>
                  )}
                </div>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToReservation}
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
                    : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  Réserver maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Inclus dans tous les cours :</strong> Matériel de ski complet, casque, forfait remontées mécaniques
          </p>
          <p className="text-sm text-gray-500">
            Annulation gratuite jusqu'à 24h avant le cours • Reprogrammation en cas de mauvais temps
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
