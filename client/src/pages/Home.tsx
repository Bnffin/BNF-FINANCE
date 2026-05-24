import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, TrendingUp, Shield, Zap, Award } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Premium Hero Section */}
      <section 
        className="relative w-full h-96 sm:h-[450px] md:h-[520px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-0">
          <div className="flex items-center justify-start h-full">
            <div className="space-y-6 md:space-y-8 w-full md:w-1/2">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">Solutions Financières Premium</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg" style={{ fontFamily: 'Playfair Display' }}>
                  {t.hero.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed drop-shadow-md max-w-lg" style={{ fontFamily: 'Lato' }}>
                  {t.hero.subtitle}
                </p>
              </div>
              <Link href="/form">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 w-fit font-semibold">
                  {t.hero.cta}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">5000+</div>
              <p className="text-xs sm:text-sm text-slate-600">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">€500M+</div>
              <p className="text-xs sm:text-sm text-slate-600">Financés</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">98%</div>
              <p className="text-xs sm:text-sm text-slate-600">Taux d'Approbation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">24h</div>
              <p className="text-xs sm:text-sm text-slate-600">Réponse Rapide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 sm:mb-20 space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display' }}>
              {t.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lato' }}>
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const serviceData = t.services[service.key as "personal" | "real_estate" | "business" | "auto" | "student" | "other"];
              return (
                <div
                  key={service.key}
                  className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                    {serviceData.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Lato' }}>
                    {serviceData.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
              Pourquoi Choisir BNF Finance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-emerald-500">
                  <Zap className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Processus Rapide</h3>
                <p className="text-slate-300">Obtenez une réponse en moins de 24 heures avec notre processus de demande simplifié.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-emerald-500">
                  <Shield className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Sécurité Garantie</h3>
                <p className="text-slate-300">Vos données sont protégées par les standards de sécurité les plus élevés.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-emerald-500">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Taux Compétitifs</h3>
                <p className="text-slate-300">Bénéficiez de taux d'intérêt parmi les plus compétitifs du marché.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-emerald-500">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Experts Reconnus</h3>
                <p className="text-slate-300">Notre équipe d'experts a plus de 15 ans d'expérience en financement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display' }}>
              {t.testimonials.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-emerald-600 font-bold">{testimonial.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
            Prêt à Commencer ?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-50 max-w-2xl mx-auto">
            Soumettez votre demande dès aujourd'hui et rejoignez des milliers de clients satisfaits.
          </p>
          <Link href="/form">
            <Button className="bg-white hover:bg-slate-100 text-emerald-700 px-10 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 font-bold">
              Faire une Demande Maintenant
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
