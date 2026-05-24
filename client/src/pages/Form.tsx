import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Lock, Zap, Clock } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
            {t.form.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
            Remplissez ce formulaire simple et rapide pour obtenir votre financement en moins de 24 heures
          </p>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <Zap className="w-6 h-6 text-emerald-400" />
              <p className="text-sm text-slate-300">Rapide</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Lock className="w-6 h-6 text-emerald-400" />
              <p className="text-sm text-slate-300">Sécurisé</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="w-6 h-6 text-emerald-400" />
              <p className="text-sm text-slate-300">24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center" style={{ fontFamily: 'Poppins' }}>
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                  Informations Personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.fullName} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Jean Dupont"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.email} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="jean@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.phone} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <Select value={formData.phoneCode} onValueChange={(value) => handleSelectChange("phoneCode", value)}>
                        <SelectTrigger className="w-24 px-3 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {PHONE_CODES.map((pc) => (
                            <SelectItem key={pc.code} value={pc.code}>
                              {pc.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="612345678"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.country} <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                      <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
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
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.address} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="address"
                      placeholder="123 Rue de la Paix"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Occupation */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.occupation} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="occupation"
                      placeholder="Ingénieur"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Information Section */}
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center" style={{ fontFamily: 'Poppins' }}>
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                  Informations Financières
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Monthly Income */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.monthlyIncome} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="number"
                      name="monthlyIncome"
                      placeholder="5000"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Loan Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.loanAmount} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="number"
                      name="loanAmount"
                      placeholder="50000"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Loan Type */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.loanType} <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.loanType} onValueChange={(value) => handleSelectChange("loanType", value)}>
                      <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
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
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t.form.duration} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <Input
                        type="number"
                        name="duration"
                        placeholder="12"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                      />
                      <Select value={formData.durationUnit} onValueChange={(value) => handleSelectChange("durationUnit", value)}>
                        <SelectTrigger className="w-32 px-3 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="months">Mois</SelectItem>
                          <SelectItem value="years">Ans</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center" style={{ fontFamily: 'Poppins' }}>
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                  Détails du Projet
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {t.form.reason} <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="reason"
                    placeholder="Décrivez votre projet et vos objectifs..."
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 font-bold"
                >
                  {isSubmitting ? "Envoi en cours..." : t.form.submit}
                </Button>
                <p className="text-center text-sm text-slate-600 mt-4">
                  ✓ Vos données sont sécurisées et confidentielles
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

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
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg rounded-lg"
          >
            Fermer
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
