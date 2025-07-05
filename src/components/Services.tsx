
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User, Trophy, Baby } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: User,
      title: t('services.private.title'),
      description: t('services.private.description'),
      features: [t('services.private.feature1'), t('services.private.feature2'), t('services.private.feature3')],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: t('services.group.title'),
      description: t('services.group.description'),
      features: [t('services.group.feature1'), t('services.group.feature2'), t('services.group.feature3')],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Baby,
      title: t('services.children.title'),
      description: t('services.children.description'),
      features: [t('services.children.feature1'), t('services.children.feature2'), t('services.children.feature3')],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Trophy,
      title: t('services.advanced.title'),
      description: t('services.advanced.description'),
      features: [t('services.advanced.feature1'), t('services.advanced.feature2'), t('services.advanced.feature3')],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
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
