import { motion } from "motion/react";
import { Mail, Building2, User, Send } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ContactForm() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand/5 -z-10 skew-y-3 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('contact.titlePart1')}
              <span className="text-gradient">{t('contact.titleHighlight')}</span>
              {language === 'de' && t('contact.titlePart2')}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('contact.description')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.emailTitle')}</h4>
                  <p className="text-sm text-gray-600">founders@bimcompliance.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.enterpriseTitle')}</h4>
                  <p className="text-sm text-gray-600">{t('contact.enterpriseDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100"
          >
            <form action="https://formspree.io/f/xwvwavow" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.nameLabel')}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand transition-all outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.emailLabel')}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand transition-all outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.companyLabel')}</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required 
                    placeholder={t('contact.companyPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand transition-all outline-none"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2"
              >
                {t('contact.btnSubmit')} <Send className="w-5 h-5" />
              </button>
              
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                {t('contact.securityText')}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
