import { Building2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-brand" />
            <span className="font-bold text-lg tracking-tight text-gray-900">BimCompliance</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-brand transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-brand transition-colors">{t('footer.terms')}</a>
            <a href="mailto:founders@bimcompliance.com" className="hover:text-brand transition-colors">{t('footer.support')}</a>
          </div>
          
          <div className="text-sm text-gray-400">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
}
