
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, User, Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    level: '',
    participants: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Date requise",
        description: "Veuillez sélectionner une date pour votre cours.",
        variant: "destructive",
      });
      return;
    }

    console.log('Réservation soumise:', { ...formData, date });
    
    toast({
      title: "Demande de réservation envoyée !",
      description: "Je vous contacte dans les 24h pour confirmer votre cours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      time: '',
      level: '',
      participants: '1',
      message: ''
    });
    setDate(undefined);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservation" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Réservez votre cours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et je vous contacte rapidement pour confirmer votre réservation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Calendar className="mr-3 h-6 w-6" />
                Formulaire de réservation
              </CardTitle>
              <CardDescription className="text-blue-100">
                Toutes les informations sont nécessaires pour personnaliser votre cours
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Votre nom et prénom"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="06 12 34 56 78"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Nombre de participants</Label>
                    <Select value={formData.participants} onValueChange={(value) => handleInputChange('participants', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 personne</SelectItem>
                        <SelectItem value="2">2 personnes</SelectItem>
                        <SelectItem value="3">3 personnes</SelectItem>
                        <SelectItem value="4">4 personnes</SelectItem>
                        <SelectItem value="5">5 personnes</SelectItem>
                        <SelectItem value="6">6 personnes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Type de cours *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particulier">Cours particulier (65€/h)</SelectItem>
                        <SelectItem value="pack5">Pack 5 cours (280€)</SelectItem>
                        <SelectItem value="collectif">Cours collectif (35€/2h)</SelectItem>
                        <SelectItem value="enfant">Cours enfant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Votre niveau *</Label>
                    <Select value={formData.level} onValueChange={(value) => handleInputChange('level', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant (jamais skié)</SelectItem>
                        <SelectItem value="debutant-plus">Débutant+ (quelques descentes)</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire (pistes bleues/rouges)</SelectItem>
                        <SelectItem value="avance">Avancé (toutes pistes)</SelectItem>
                        <SelectItem value="expert">Expert (hors-piste)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Date souhaitée *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: fr }) : "Choisir une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      Créneau horaire préféré *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un horaire" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9h-10h">9h00 - 10h00</SelectItem>
                        <SelectItem value="10h-11h">10h00 - 11h00</SelectItem>
                        <SelectItem value="11h-12h">11h00 - 12h00</SelectItem>
                        <SelectItem value="14h-15h">14h00 - 15h00</SelectItem>
                        <SelectItem value="15h-16h">15h00 - 16h00</SelectItem>
                        <SelectItem value="16h-17h">16h00 - 17h00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Objectifs particuliers, questions, informations supplémentaires..."
                    rows={4}
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Informations importantes :</strong><br/>
                    • Confirmation par téléphone dans les 24h<br/>
                    • Annulation gratuite jusqu'à 24h avant<br/>
                    • Matériel de ski inclus dans le prix<br/>
                    • Rendez-vous directement sur les pistes
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-6"
                >
                  Envoyer ma demande de réservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
