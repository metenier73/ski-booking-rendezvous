
import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ServerStatus = 'checking' | 'online' | 'offline';

interface ServerStatusProps {
  onStatusChange: (status: ServerStatus) => void;
}

const ServerStatus = ({ onStatusChange }: ServerStatusProps) => {
  const { t } = useLanguage();
  const [serverStatus, setServerStatus] = useState<ServerStatus>('checking');

  useEffect(() => {
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/health');
      if (response.ok) {
        setServerStatus('online');
        onStatusChange('online');
        console.log('Serveur backend disponible');
      } else {
        setServerStatus('offline');
        onStatusChange('offline');
      }
    } catch (err) {
      console.error('Serveur backend non disponible:', err);
      setServerStatus('offline');
      onStatusChange('offline');
    }
  };

  return (
    <div className="mt-4 flex items-center justify-center space-x-2">
      {serverStatus === 'checking' && (
        <div className="flex items-center text-gray-500">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-2"></div>
          {t('booking.server.checking')}
        </div>
      )}
      {serverStatus === 'online' && (
        <div className="flex items-center text-green-600">
          <CheckCircle className="w-4 h-4 mr-2" />
          {t('booking.server.online')}
        </div>
      )}
      {serverStatus === 'offline' && (
        <div className="flex items-center text-red-600">
          <AlertCircle className="w-4 h-4 mr-2" />
          {t('booking.server.offline')}
        </div>
      )}
    </div>
  );
};

export default ServerStatus;
