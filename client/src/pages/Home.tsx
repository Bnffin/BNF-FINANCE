import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const SERVICES = [
  { key: "personal", icon: "💰" },
  { key: "real_estate", icon: "🏠" },
  { key: "business", icon: "💼" },
  { key: "auto", icon: "🚗" },
  { key: "student", icon: "🎓" },
  { key: "other", icon: "❓" },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section with Image */}
      <section 
        className="relative w-full h-96 sm:h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663674993046/RUbfAp2yeLoeVJzkDmZ4BZ/bnf-hero-banner-4kNKXCdG6rvMWaeSNgSt5r.webp)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-0">
          <div className="flex items-center justify-start h-full">
            <div className="space-y-6 md:space-y-8 w-full md:w-1/2">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  {t.hero.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md max-w-lg">
                  {t.hero.subtitle}
                </p>
              </div>
              <Link href="/form">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-lg transition-all duration-200 hover:shadow-lg w-fit">
                  {t.hero.cta}
                  <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              {t.services.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => {
              const serviceData = t.services[service.key as "personal" | "real_estate" | "business" | "auto" | "student" | "other"];
              return (
                <div
                  key={service.key}
                  className="p-6 sm:p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {serviceData.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {serviceData.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-xs sm:text-sm md:text-base text-slate-600">{t.stats.clients}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-xs sm:text-sm md:text-base text-slate-600">{t.stats.experience}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-xs sm:text-sm md:text-base text-slate-600">{t.stats.approval}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">15</div>
              <p className="text-xs sm:text-sm md:text-base text-slate-600">{t.stats.countries}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              {t.testimonials.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                initials: "V",
                name: "Valérie Beaumont",
                country: "France",
                amount: "€50,000",
                quote: "BNF Finance m'a permis de financer mon projet de création d'entreprise en seulement 2 semaines. Équipe très professionnelle et réactive!",
              },
              {
                initials: "R",
                name: "Roberto Gómez",
                country: "Espagne",
                amount: "€75,000",
                quote: "Excelente servicio. El equipo de BNF Finance fue muy atento y me ayudó a obtener el financiamiento que necesitaba.",
              },
              {
                initials: "H",
                name: "Helmut Richter",
                country: "Allemagne",
                amount: "€120,000",
                quote: "Sehr professionell und zuverlässig. BNF Finance hat mir geholfen, mein Immobilienprojekt zu finanzieren.",
              },
              {
                initials: "C",
                name: "Célia Renard",
                country: "Belgique",
                amount: "€35,000",
                quote: "Service rapide et efficace. J'ai reçu mon financement en moins d'un mois. Très satisfaite!",
              },
              {
                initials: "L",
                name: "Lorenzo Benedetti",
                country: "Italie",
                amount: "€250,000",
                quote: "BNF Finance mi ha offerto le migliori condizioni di finanziamento. Molto soddisfatto!",
              },
              {
                initials: "I",
                name: "Ingrid Svensson",
                country: "Suède",
                amount: "€500,000",
                quote: "Mycket nöjd. BNF Finance erbjöd mig finansieringen jag behövde för mitt stora projekt.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm sm:text-lg">
                    {testimonial.initials}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="font-bold text-sm sm:text-base text-slate-900">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-slate-600">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm sm:text-base text-blue-600 font-bold">{testimonial.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              {t.process.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              {t.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-blue-600 text-white font-bold text-sm sm:text-lg">
                    1
                  </div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">
                    {t.process.step1}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {t.process.step1_desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-blue-600 text-white font-bold text-sm sm:text-lg">
                    2
                  </div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">
                    {t.process.step2}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {t.process.step2_desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-blue-600 text-white font-bold text-sm sm:text-lg">
                    3
                  </div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">
                    {t.process.step3}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {t.process.step3_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            {t.hero.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            {t.hero.subtitle}
          </p>
          <Link href="/form">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-lg transition-all duration-200 hover:shadow-lg w-fit mx-auto">
              {t.hero.cta}
              <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
