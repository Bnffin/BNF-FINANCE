import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", `${formData.phoneCode}${formData.phone}`);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("occupation", formData.occupation);
      formDataToSend.append("monthlyIncome", formData.monthlyIncome);
      formDataToSend.append("loanAmount", formData.loanAmount);
      formDataToSend.append("loanType", formData.loanType);
      formDataToSend.append("duration", `${formData.duration} ${formData.durationUnit}`);
      formDataToSend.append("reason", formData.reason);

      const response = await fetch(`https://formspree.io/f/mjgzopzp`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Demande envoyée avec succès! Nous vous contacterons bientôt.");
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
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            {t.form.title}
          </h1>
          <p className="text-xl text-slate-600">
            {t.form.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-xl border border-slate-200">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.fullName} <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="fullName"
              placeholder={t.form.fullName}
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.email} <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="email"
              placeholder={t.form.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.phone} <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <Select value={formData.phoneCode} onValueChange={(value) => handleSelectChange("phoneCode", value)}>
                <SelectTrigger className="w-24">
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
                className="flex-1"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
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
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.address} <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="address"
              placeholder={t.form.address}
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.occupation} <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="occupation"
              placeholder={t.form.occupation}
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.monthlyIncome} <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              name="monthlyIncome"
              placeholder="5000"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.loanAmount} <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              name="loanAmount"
              placeholder="50000"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Loan Type */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
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
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.duration} <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                name="duration"
                placeholder="12"
                value={formData.duration}
                onChange={handleChange}
                required
                className="flex-1"
              />
              <Select value={formData.durationUnit} onValueChange={(value) => handleSelectChange("durationUnit", value)}>
                <SelectTrigger className="w-32">
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
            <label className="block text-sm font-medium text-slate-900 mb-2">
              {t.form.reason} <span className="text-red-500">*</span>
            </label>
            <Textarea
              name="reason"
              placeholder={t.form.reason}
              value={formData.reason}
              onChange={handleChange}
              required
              rows={5}
              className="w-full"
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
    </div>
  );
}
