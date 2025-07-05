
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServerStatus from "./ServerStatus";
import BookingFormFields from "./BookingFormFields";
import BookingFormMessages from "./BookingFormMessages";

type ServerStatus = 'checking' | 'online' | 'offline';

const BookingForm = () => {
  const { t } = useLanguage();
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
  const [serverStatus, setServerStatus] = useState<ServerStatus>('checking');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Soumission du formulaire avec:', formData);
    
    // Vérification des champs obligatoires
    if (!formData.name || !formData.email || !formData.phone || !formData.courseType) {
      setError(t('booking.error.required'));
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
        setSuccess(t('booking.success'));
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
        setError(responseData.message || t('booking.error.default'));
      }
    } catch (err) {
      console.error("Erreur de connexion:", err);
      setError(t('booking.error.connection'));
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
            {t('booking.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('booking.subtitle')}
          </p>
          
          <ServerStatus onStatusChange={setServerStatus} />
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                <span>{t('booking.form.title')}</span>
              </CardTitle>
              <CardDescription>
                {t('booking.form.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <BookingFormFields formData={formData} onChange={handleChange} />

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-6"
                  disabled={sending || serverStatus === 'offline'}
                >
                  {sending ? t('booking.submit.sending') : t('booking.submit')}
                </Button>

                <BookingFormMessages success={success} error={error} />

                <p className="text-sm text-gray-500 text-center">
                  {t('booking.footer')}
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
