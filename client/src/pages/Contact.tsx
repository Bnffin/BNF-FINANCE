import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_NAME, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_PHONE_2 } from "@/const";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            Nous Contacter
          </h1>
          <p className="text-xl text-slate-600">
            Nous sommes ici pour répondre à vos questions et vous aider dans votre parcours financier
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
              <p className="text-slate-600 mb-4">
                Envoyez-nous un email et nous vous répondrons dans les 24 heures.
              </p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {COMPANY_EMAIL}
              </a>
            </div>

            {/* Phone */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Téléphone</h3>
              <p className="text-slate-600 mb-4">
                Appelez-nous pendant les heures de bureau pour une assistance immédiate.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors block"
                >
                  {COMPANY_PHONE}
                </a>
                <a
                  href={`tel:${COMPANY_PHONE_2}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors block"
                >
                  {COMPANY_PHONE_2}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Adresse</h3>
              <p className="text-slate-600">
                {COMPANY_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Questions Fréquemment Posées</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Combien de temps faut-il pour obtenir une réponse?
              </h3>
              <p className="text-slate-600">
                Notre équipe d'experts examine votre dossier et vous contacte sous 24 heures avec une réponse.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Quels documents dois-je fournir?
              </h3>
              <p className="text-slate-600">
                Les documents requis dépendent du type de financement. Nous vous contacterons avec la liste complète après votre demande initiale.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Quels sont les taux d'intérêt?
              </h3>
              <p className="text-slate-600">
                Les taux varient en fonction du type de financement et de votre profil. Nous offrons des taux compétitifs et transparents.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Puis-je modifier ma demande après l'avoir soumise?
              </h3>
              <p className="text-slate-600">
                Oui, vous pouvez contacter notre équipe pour modifier votre demande avant qu'elle ne soit traitée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">
            Prêt à Commencer?
          </h2>
          <p className="text-xl text-slate-600">
            Soumettez votre demande de financement dès aujourd'hui et commencez votre parcours vers le succès financier.
          </p>
          <a
            href="/form"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            Faire une Demande
          </a>
        </div>
      </section>
    </div>
  );
}
