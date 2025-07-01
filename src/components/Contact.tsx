
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Mountain } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact & Informations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question ou information complémentaire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Réservations & Renseignements</p>
              <a href="tel:+33612345678" className="text-blue-600 font-semibold hover:underline">
                06 12 34 56 78
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Réponse sous 24h</p>
              <a href="mailto:contact@skipro.fr" className="text-green-600 font-semibold hover:underline">
                contact@skipro.fr
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Station</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Domaine skiable</p>
              <p className="text-purple-600 font-semibold">
                Les Deux Alpes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Saison d'hiver</p>
              <p className="text-orange-600 font-semibold">
                9h - 17h
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center mb-2">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                Zone d'intervention
              </CardTitle>
              <CardDescription>
                Je donne mes cours principalement dans ces stations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Les Deux Alpes</h4>
                  <p className="text-sm text-gray-600">Station principale</p>
                  <p className="text-sm text-gray-600">Glacier 3600m</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Alpe d'Huez</h4>
                  <p className="text-sm text-gray-600">Sur demande</p>
                  <p className="text-sm text-gray-600">Domaine de l'Oisans</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">La Grave</h4>
                  <p className="text-sm text-gray-600">Hors-piste uniquement</p>
                  <p className="text-sm text-gray-600">Niveau expert</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
