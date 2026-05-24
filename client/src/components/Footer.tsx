import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { SITE_NAME, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_PHONE_2 } from "@/const";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
                BNF
              </div>
              <span className="font-bold text-lg">{SITE_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm">
              {t.footer.company}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-slate-400 hover:text-white transition-colors">
                    {t.nav.home}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-slate-400 hover:text-white transition-colors">
                    {t.nav.about}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-slate-400 hover:text-white transition-colors">
                    {t.nav.contact}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/form">
                  <a className="text-slate-400 hover:text-white transition-colors">
                    {t.form.title}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{SITE_NAME}</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>{COMPANY_ADDRESS}</li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-white transition-colors">
                  {COMPANY_PHONE}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_PHONE_2}`} className="hover:text-white transition-colors">
                  {COMPANY_PHONE_2}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
