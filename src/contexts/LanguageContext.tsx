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

const STORAGE_KEY = "fuerte_lang";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem(STORAGE_KEY) as Language) || "en";
  });
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    const isRtl = language === "ar";
    const dir = isRtl ? "rtl" : "ltr";
    setDirection(dir);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Synchronize Google Translate Widget with state on change
    const syncGoogleTranslate = () => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        // Only trigger if the value is actually different to avoid loops
        if (select.value !== language) {
          select.value = language;
          // Dispatch multiple events to ensure the widget's listeners catch it
          select.dispatchEvent(new Event("change", { bubbles: true }));
          select.dispatchEvent(new Event("click", { bubbles: true }));
          select.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
    };

    // Run synchronization immediately and also with short delays to catch async-loaded elements
    syncGoogleTranslate();
    const timer = setTimeout(syncGoogleTranslate, 100);
    const timer2 = setTimeout(syncGoogleTranslate, 500);
    const timer3 = setTimeout(syncGoogleTranslate, 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
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
