
import { Button } from "@/components/ui/button";
import { Snowflake, Mountain, Award, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-600">
                <Snowflake className="h-8 w-8" />
                <span className="text-lg font-semibold">{t('hero.subtitle')}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title.1')} 
                <span className="text-blue-600 block">{t('hero.title.2')}</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('reservation')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('hero.book.button')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('tarifs')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full"
              >
                {t('hero.pricing.button')}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Mountain className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">{t('hero.experience')}</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">ENSA</div>
                <div className="text-sm text-gray-600">{t('hero.diploma')}</div>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600">7 000+</div>
                <div className="text-sm text-gray-600">{t('hero.students')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Snowflake className="h-24 w-24 text-blue-500 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Myriam Metenier</h3>
                    <p className="text-blue-600 font-semibold">{t('hero.instructor')}</p>
                    <p className="text-gray-600">Val d'Isère & Tignes</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 w-8 h-8 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 bg-pink-400 w-6 h-6 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -left-6 bg-green-400 w-4 h-4 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
