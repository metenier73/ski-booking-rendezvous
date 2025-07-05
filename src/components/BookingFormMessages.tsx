
import { CheckCircle, AlertCircle } from "lucide-react";

interface BookingFormMessagesProps {
  success: string | null;
  error: string | null;
}

const BookingFormMessages = ({ success, error }: BookingFormMessagesProps) => {
  if (!success && !error) return null;

  return (
    <>
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
    </>
  );
};

export default BookingFormMessages;
