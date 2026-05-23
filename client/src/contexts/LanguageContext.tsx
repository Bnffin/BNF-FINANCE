import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, LANGUAGES } from "@/const";

export type LanguageCode = keyof typeof TRANSLATIONS;

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (typeof TRANSLATIONS)[LanguageCode];
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return (saved as LanguageCode) || "fr";
    }
    return "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
    languages: LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
