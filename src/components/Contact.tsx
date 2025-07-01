
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Mountain } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "07 68 10 61 07",
      description: "Disponible 7j/7 pendant la saison",
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "meteniermyriam@yahoo.fr",
      description: "Réponse sous 24h garantie",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Lieu",
      content: "Val d'Isère & Tignes",
      description: "Station de ski des Alpes",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "9h - 17h",
      description: "Saison d'hiver : Décembre à Avril",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Me Contacter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question ou pour réserver vos cours de ski. 
            Je suis à votre disposition pour vous accompagner dans votre progression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900 mb-2">{info.content}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center">
                <Mountain className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt(e) à dévaler les pistes ?
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Que vous soyez débutant ou confirmé, je vous accompagne dans votre progression 
              avec passion et professionnalisme. Plus de 20 ans d'expérience à votre service !
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-700">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-gray-700">Élèves formés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-gray-700">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
