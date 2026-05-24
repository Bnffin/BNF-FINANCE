import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_ID = "mjgzopzp";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
  "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const PHONE_CODES = [
  { code: "+1", country: "USA/Canada" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+370", country: "Lithuania" },
  { code: "+47", country: "Norway" },
  { code: "+358", country: "Finland" },
  { code: "+386", country: "Slovenia" },
  { code: "+421", country: "Slovakia" },
  { code: "+44", country: "United Kingdom" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+43", country: "Austria" },
  { code: "+41", country: "Switzerland" },
  { code: "+45", country: "Denmark" },
  { code: "+46", country: "Sweden" },
  { code: "+48", country: "Poland" },
  { code: "+30", country: "Greece" },
  { code: "+351", country: "Portugal" },
];

export default function Form() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "+33",
    phone: "",
    country: "France",
    address: "",
    occupation: "",
    monthlyIncome: "",
    loanAmount: "",
    loanType: "personal",
    duration: "12",
    durationUnit: "months",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dataToSend = {
        fullName: formData.fullName,
        email: formData.email,
        phone: `${formData.phoneCode}${formData.phone}`,
        country: formData.country,
        address: formData.address,
        occupation: formData.occupation,
        monthlyIncome: formData.monthlyIncome,
        loanAmount: formData.loanAmount,
        loanType: formData.loanType,
        duration: `${formData.duration} ${formData.durationUnit}`,
        reason: formData.reason,
      };

      const response = await fetch(`https://formspree.io/f/mjgzopzp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          fullName: "",
          email: "",
          phoneCode: "+33",
          phone: "",
          country: "France",
          address: "",
          occupation: "",
          monthlyIncome: "",
          loanAmount: "",
          loanType: "personal",
          duration: "12",
          durationUnit: "months",
          reason: "",
        });
      } else {
        toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            {t.form.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            {t.form.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl border border-slate-200">
          {/* Full Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.fullName} <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="fullName"
              placeholder={t.form.fullName}
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.email} <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="email"
              placeholder={t.form.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.phone} <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 flex-col sm:flex-row">
              <Select value={formData.phoneCode} onValueChange={(value) => handleSelectChange("phoneCode", value)}>
                <SelectTrigger className="w-full sm:w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PHONE_CODES.map((code) => (
                    <SelectItem key={code.code} value={code.code}>
                      {code.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="tel"
                name="phone"
                placeholder="123456789"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 min-w-0"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.country} <span className="text-red-500">*</span>
            </label>
            <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.address} <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="address"
              placeholder={t.form.address}
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.occupation} <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="occupation"
              placeholder={t.form.occupation}
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.monthlyIncome} <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              name="monthlyIncome"
              placeholder="5000"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.loanAmount} <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              name="loanAmount"
              placeholder="50000"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Loan Type */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.loanType} <span className="text-red-500">*</span>
            </label>
            <Select value={formData.loanType} onValueChange={(value) => handleSelectChange("loanType", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">{t.services.personal.title}</SelectItem>
                <SelectItem value="real_estate">{t.services.real_estate.title}</SelectItem>
                <SelectItem value="business">{t.services.business.title}</SelectItem>
                <SelectItem value="auto">{t.services.auto.title}</SelectItem>
                <SelectItem value="student">{t.services.student.title}</SelectItem>
                <SelectItem value="other">{t.services.other.title}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.duration} <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 flex-col sm:flex-row">
              <Input
                type="number"
                name="duration"
                placeholder="12"
                value={formData.duration}
                onChange={handleChange}
                required
                className="flex-1 min-w-0"
              />
              <Select value={formData.durationUnit} onValueChange={(value) => handleSelectChange("durationUnit", value)}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months">{t.form.months}</SelectItem>
                  <SelectItem value="years">{t.form.years}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">
              {t.form.reason} <span className="text-red-500">*</span>
            </label>
            <Textarea
              name="reason"
              placeholder={t.form.reason}
              value={formData.reason}
              onChange={handleChange}
              required
              rows={5}
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-lg transition-all duration-200 hover:shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? "Envoi en cours..." : t.form.submit}
          </Button>
        </form>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500" />
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-slate-900">
              Demande bien reçue !
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-6">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Votre demande de financement a été bien reçue. Nous vous remercions de votre confiance.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Notre équipe examinera votre demande et vous contactera très bientôt pour discuter des modalités de financement.
            </p>
            <p className="text-sm sm:text-base text-slate-500 italic">
              Veuillez patienter, vous recevrez une réponse dans peu de temps.
            </p>
          </div>
          <Button
            onClick={() => setShowSuccessModal(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg"
          >
            Fermer
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
