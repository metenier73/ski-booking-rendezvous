
import { Button } from "@/components/ui/button";
import { Snowflake, MapPin, Phone, Mail } from "lucide-react";

const Header = () => {
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
              Services
            </button>
            <button 
              onClick={() => scrollToSection('tarifs')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Réservation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('reservation')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            Réserver
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
