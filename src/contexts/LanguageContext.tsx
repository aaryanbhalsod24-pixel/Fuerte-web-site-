import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translation } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  direction: "ltr" | "rtl";
  t: Translation;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    // Automatically set direction to RTL for Arabic
    setDirection(language === "ar" ? "rtl" : "ltr");
    // Also update the HTML dir attribute
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    direction,
    t: translations[language],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      <div
        dir={direction}
        className={direction === "rtl" ? "text-right font-arabic" : ""}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
