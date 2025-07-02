import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseType: "",
    date: "",
    time: "",
    participants: "",
    level: "",
    message: ""
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  // Vérifier l'état du serveur au chargement
  useEffect(() => {
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/health');
      if (response.ok) {
        setServerStatus('online');
        console.log('Serveur backend disponible');
      } else {
        setServerStatus('offline');
      }
    } catch (err) {
      console.error('Serveur backend non disponible:', err);
      setServerStatus('offline');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Soumission du formulaire avec:', formData);
    
    // Vérification des champs obligatoires
    if (!formData.name || !formData.email || !formData.phone || !formData.courseType) {
      setError("Veuillez remplir tous les champs obligatoires (nom, email, téléphone, type de cours).");
      return;
    }

    setSending(true);
    setSuccess(null);
    setError(null);
    
    try {
      console.log('Envoi de la demande vers le serveur...');
      const response = await fetch('http://localhost:3001/api/book', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Réponse du serveur:', response.status);
      const responseData = await response.json();
      console.log('Données de réponse:', responseData);

      if (response.ok) {
        setSuccess('Demande de réservation envoyée ! Je vous recontacterai rapidement.');
        setFormData({
          name: "",
          email: "",
          phone: "",
          courseType: "",
          date: "",
          time: "",
          participants: "",
          level: "",
          message: ""
        });
      } else {
        setError(responseData.message || "Erreur lors de l'envoi de la demande. Veuillez réessayer.");
      }
    } catch (err) {
      console.error("Erreur de connexion:", err);
      setError("Impossible de contacter le serveur. Vérifiez que le serveur backend est démarré sur le port 3001.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Réserver un Cours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour réserver votre cours de ski. 
            Je vous recontacterai rapidement pour confirmer votre réservation.
          </p>
          
          {/* Indicateur d'état du serveur */}
          <div className="mt-4 flex items-center justify-center space-x-2">
            {serverStatus === 'checking' && (
              <div className="flex items-center text-gray-500">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-2"></div>
                Vérification du serveur...
              </div>
            )}
            {serverStatus === 'online' && (
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                Serveur disponible
              </div>
            )}
            {serverStatus === 'offline' && (
              <div className="flex items-center text-red-600">
                <AlertCircle className="w-4 h-4 mr-2" />
                Serveur non disponible - Démarrez le serveur backend
              </div>
            )}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                <span>Formulaire de réservation</span>
              </CardTitle>
              <CardDescription>
                Toutes les informations sont nécessaires pour traiter votre demande
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Type de cours *</Label>
                    <Select value={formData.courseType} onValueChange={(value) => handleChange("courseType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un type de cours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particulier">Cours particulier (65€/h)</SelectItem>
                        <SelectItem value="collectif">Cours collectif (35€/1h30)</SelectItem>
                        <SelectItem value="enfant">Cours enfant</SelectItem>
                        <SelectItem value="stage">Stage 5 jours (280€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participants">Nombre de participants</Label>
                    <Select value={formData.participants} onValueChange={(value) => handleChange("participants", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Nombre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 personne</SelectItem>
                        <SelectItem value="2">2 personnes</SelectItem>
                        <SelectItem value="3">3 personnes</SelectItem>
                        <SelectItem value="4">4 personnes</SelectItem>
                        <SelectItem value="5+">5+ personnes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date souhaitée</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Créneau horaire</Label>
                    <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un horaire" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matin">Matin (9h-12h)</SelectItem>
                        <SelectItem value="apres-midi">Après-midi (13h-16h)</SelectItem>
                        <SelectItem value="journee">Journée complète</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Niveau de ski</Label>
                  <Select value={formData.level} onValueChange={(value) => handleChange("level", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Quel est votre niveau ?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debutant">Débutant</SelectItem>
                      <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                      <SelectItem value="avance">Avancé</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Objectifs particuliers, informations complémentaires..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-6"
                  disabled={sending || serverStatus === 'offline'}
                >
                  {sending ? "Envoi en cours..." : "Envoyer la demande de réservation"}
                </Button>

                {success && (
                  <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <p>{success}</p>
                  </div>
                )}
                
                {error && (
                  <div className="flex items-center justify-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <p>{error}</p>
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires. Je vous recontacterai dans les 24h pour confirmer votre réservation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
