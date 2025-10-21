// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import languageData from "./languageData.json";

type Language = "es" | "en";

type LanguageContextType = { 
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  t: (key: any, lang: Language) => string;
};

type TranslationKey = "home" | "products" | "cart" | "checkout" | "thankYou";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en"); // default Spanish
  const translations = languageData as Record<
    any, any
  >;
  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  function t<K extends TranslationKey>(key: K, lang: "en" | "es") {
    return lang === "es" ? translations[`${key}_es`] : translations[key];
  }

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLanguage, setLanguage: setLang, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
