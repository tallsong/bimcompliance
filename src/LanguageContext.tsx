import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Utility to flatten a nested object into a single-level object with dot-notation keys.
 * This enables O(1) translation lookups.
 */
function flattenObject(obj: any, prefix = ''): Record<string, string> {
  return Object.keys(obj).reduce((acc: Record<string, string>, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Get browser language, default to German if it starts with 'de'
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('de')) {
      setLanguage('de');
    } else {
      setLanguage('en');
    }
  }, []);

  // Memoize flattened translations for the current language
  const flattenedTranslations = React.useMemo(() => {
    return flattenObject(translations[language]);
  }, [language]);

  // Optimized translation function with O(1) lookup
  const t = React.useCallback((path: string): string => {
    const result = flattenedTranslations[path];
    if (result === undefined) {
      console.warn(`Translation missing for key: ${path} in language: ${language}`);
      return path;
    }
    return result;
  }, [flattenedTranslations, language]);

  // Memoize context value to prevent unnecessary re-renders
  const value = React.useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
