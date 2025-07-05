
import { Button } from "@/components/ui/button";
import { Snowflake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Snowflake className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">SkiPro</h1>
              <p className="text-sm text-gray-600">Cours de ski personnalisés</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('tarifs')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.booking')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              onClick={() => scrollToSection('reservation')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              {t('button.book')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
