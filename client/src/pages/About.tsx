import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_NAME } from "@/const";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            À Propos de {SITE_NAME}
          </h1>
          <p className="text-xl text-slate-600">
            Découvrez qui nous sommes et notre engagement envers votre succès financier
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">Notre Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Chez {SITE_NAME}, nous croyons que tout le monde mérite l'accès à des solutions de financement justes et transparentes. Notre mission est de rendre le financement accessible, rapide et sans complications pour tous.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nous nous engageons à fournir un service client exceptionnel, des taux compétitifs et un processus de demande simplifié qui respecte votre temps et vos besoins.
              </p>
            </div>
            <div className="bg-blue-100 rounded-2xl p-12 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-slate-600 font-medium">Mission Centrée sur le Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Confiance</h3>
              <p className="text-slate-600">
                La confiance est le fondement de nos relations avec nos clients. Nous sommes transparents dans tous nos processus.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rapidité</h3>
              <p className="text-slate-600">
                Nous comprenons que le temps est précieux. Nos processus sont conçus pour être rapides et efficaces.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">
                Nous utilisons les dernières technologies pour offrir une expérience de financement moderne et intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Nos Accomplissements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-slate-600">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-slate-600">Ans d'Expérience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-slate-600">Taux d'Approbation</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15</div>
              <p className="text-slate-600">Pays Couverts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Notre Équipe de Direction</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                TL
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Thierry Leclerc</h3>
              <p className="text-slate-600">Directeur Général</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                MR
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Martine Rousseau</h3>
              <p className="text-slate-600">Directrice Financière</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                GF
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Gérard Fontaine</h3>
              <p className="text-slate-600">Responsable Opérations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
