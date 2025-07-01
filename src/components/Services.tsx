
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User, Trophy, Baby } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Cours particuliers",
      description: "Apprentissage personnalisé selon votre niveau et vos objectifs",
      features: ["Progression rapide", "Attention individuelle", "Horaires flexibles"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Cours collectifs",
      description: "Partagez l'expérience avec d'autres passionnés",
      features: ["Ambiance conviviale", "Tarifs avantageux", "Groupes de 4-6 personnes"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Baby,
      title: "Cours enfants",
      description: "Initiation ludique au ski pour les 4-12 ans",
      features: ["Méthode adaptée", "Jeux et activités", "Sécurité prioritaire"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Trophy,
      title: "Perfectionnement",
      description: "Techniques avancées pour skieurs confirmés",
      features: ["Hors-piste", "Compétition", "Techniques expertes"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des cours adaptés à tous les niveaux et tous les âges pour vous faire progresser en toute sécurité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
