
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: t('pricing.private.name'),
      price: "65",
      duration: "1h",
      description: t('pricing.private.description'),
      features: [
        t('pricing.private.feature1'),
        t('pricing.private.feature2'),
        t('pricing.private.feature3'),
        t('pricing.private.feature4')
      ],
      popular: false
    },
    {
      name: t('pricing.group.name'),
      price: "35",
      duration: "1h30",
      description: t('pricing.group.description'),
      features: [
        t('pricing.group.feature1'),
        t('pricing.group.feature2'),
        t('pricing.group.feature3'),
        t('pricing.group.feature4')
      ],
      popular: true
    },
    {
      name: t('pricing.stage.name'),
      price: "280",
      duration: "5 × 1h30",
      description: t('pricing.stage.description'),
      features: [
        t('pricing.stage.feature1'),
        t('pricing.stage.feature2'),
        t('pricing.stage.feature3'),
        t('pricing.stage.feature4')
      ],
      popular: false
    }
  ];

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl' : 'shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{t('pricing.popular')}</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {plan.description}
                </CardDescription>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-blue-600">
                    {plan.price}€
                  </div>
                  <div className="text-gray-500">
                    {plan.duration}
                  </div>
                </div>
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
                  onClick={() => scrollToSection('reservation')}
                  className={`w-full ${plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {t('pricing.book')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('pricing.discount.title')}
          </h3>
          <p className="text-gray-600">
            {t('pricing.discount.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
