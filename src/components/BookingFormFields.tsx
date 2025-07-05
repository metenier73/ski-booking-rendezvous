
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  phone: string;
  courseType: string;
  date: string;
  time: string;
  participants: string;
  level: string;
  message: string;
}

interface BookingFormFieldsProps {
  formData: FormData;
  onChange: (field: string, value: string) => void;
}

const BookingFormFields = ({ formData, onChange }: BookingFormFieldsProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t('booking.name')} *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onChange("name", e.target.value)}
            required
            placeholder={t('booking.placeholders.name')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('booking.email')} *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
            placeholder={t('booking.placeholders.email')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t('booking.phone')} *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          required
          placeholder={t('booking.placeholders.phone')}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>{t('booking.course.type')} *</Label>
          <Select value={formData.courseType} onValueChange={(value) => onChange("courseType", value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('booking.placeholders.course')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="particulier">{t('booking.course.private')}</SelectItem>
              <SelectItem value="collectif">{t('booking.course.group')}</SelectItem>
              <SelectItem value="enfant">{t('booking.course.child')}</SelectItem>
              <SelectItem value="stage">{t('booking.course.stage')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="participants">{t('booking.participants')}</Label>
          <Select value={formData.participants} onValueChange={(value) => onChange("participants", value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('booking.placeholders.participants')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 {t('booking.participants').toLowerCase()}</SelectItem>
              <SelectItem value="2">2 {t('booking.participants').toLowerCase()}</SelectItem>
              <SelectItem value="3">3 {t('booking.participants').toLowerCase()}</SelectItem>
              <SelectItem value="4">4 {t('booking.participants').toLowerCase()}</SelectItem>
              <SelectItem value="5+">5+ {t('booking.participants').toLowerCase()}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">{t('booking.date')}</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => onChange("date", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>{t('booking.time')}</Label>
          <Select value={formData.time} onValueChange={(value) => onChange("time", value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('booking.placeholders.time')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matin">{t('booking.time.morning')}</SelectItem>
              <SelectItem value="apres-midi">{t('booking.time.afternoon')}</SelectItem>
              <SelectItem value="journee">{t('booking.time.fullday')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>{t('booking.level')}</Label>
        <Select value={formData.level} onValueChange={(value) => onChange("level", value)}>
          <SelectTrigger>
            <SelectValue placeholder={t('booking.placeholders.level')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="debutant">{t('booking.level.beginner')}</SelectItem>
            <SelectItem value="intermediaire">{t('booking.level.intermediate')}</SelectItem>
            <SelectItem value="avance">{t('booking.level.advanced')}</SelectItem>
            <SelectItem value="expert">{t('booking.level.expert')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t('booking.message')}</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => onChange("message", e.target.value)}
          placeholder={t('booking.message.placeholder')}
          rows={4}
        />
      </div>
    </div>
  );
};

export default BookingFormFields;
