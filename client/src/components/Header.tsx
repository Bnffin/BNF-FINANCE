import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SITE_NAME, LANGUAGES } from "@/const";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 font-bold text-2xl text-slate-900 hover:text-blue-600 transition-colors">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                BNF
              </div>
              <span>{SITE_NAME}</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                {t.nav.home}
              </a>
            </Link>
            <Link href="/about">
              <a className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                {t.nav.about}
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                {t.nav.contact}
              </a>
            </Link>
          </nav>

          {/* Right Side - Language Selector & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                  {LANGUAGES[language as keyof typeof LANGUAGES].flag} {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {Object.entries(LANGUAGES).map(([code, lang]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => setLanguage(code as keyof typeof LANGUAGES)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button - Desktop */}
            <Link href="/form">
              <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200">
                {t.nav.form}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-slate-200 pt-4">
            <Link href="/">
              <a
                className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.home}
              </a>
            </Link>
            <Link href="/about">
              <a
                className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
            </Link>
            <Link href="/form">
              <a
                className="block px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  {t.nav.form}
                </Button>
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
