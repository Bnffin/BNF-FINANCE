import { useState, useEffect } from "react";
import { TRANSLATIONS, LANGUAGES } from "@/const";

export type LanguageCode = keyof typeof TRANSLATIONS;

export function useLanguage() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("language");
    return (saved as LanguageCode) || "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = TRANSLATIONS[language];
  const lang = LANGUAGES[language];

  return {
    language,
    setLanguage,
    t,
    lang,
    languages: LANGUAGES,
  };
}
