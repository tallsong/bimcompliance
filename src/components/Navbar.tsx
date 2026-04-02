import { motion } from "motion/react";
import { Building2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full glass border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-brand" />
            <span className="font-bold text-xl tracking-tight text-gray-900">BimCompliance</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">{t('nav.features')}</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">{t('nav.howItWorks')}</a>

            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="text-sm font-medium text-gray-600 hover:text-brand transition-colors uppercase"
            >
              {language === 'en' ? 'DE' : 'EN'}
            </button>

            <a href="#contact" className="bg-brand text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all shadow-sm">
              {t('nav.requestPilot')}
            </a>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="text-sm font-medium text-gray-600 hover:text-brand transition-colors uppercase"
            >
              {language === 'en' ? 'DE' : 'EN'}
            </button>
            <button className="p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
