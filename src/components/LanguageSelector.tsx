
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:bg-gray-100"
    >
      <span className="text-lg">
        {language === 'fr' ? '🇫🇷' : '🇬🇧'}
      </span>
      <span className="text-sm font-medium">
        {language === 'fr' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSelector;
