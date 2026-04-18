import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2, Building2, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import AIAuditTerminal from "./AIAuditTerminal";

export default function Hero() {
  const { language, t } = useLanguage();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const demoVideoUrl =
    language === 'de'
      ? 'https://www.youtube.com/embed/pYGIxxqN3qQ?autoplay=1'
      : 'https://www.youtube.com/embed/_4upRwm0M88?autoplay=1&rel=0&cc_load_policy=1&cc_lang_pref=en';

  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand mb-6 border border-brand/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            {t('hero.badge')}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
            {t('hero.titlePart1')}<span className="text-gradient">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contact" className="w-full sm:w-auto bg-brand text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20">
              {t('hero.btnPrimary')} <ArrowRight className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Play className="w-5 h-5 fill-current" /> {t('hero.btnSecondary')}
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> {t('hero.check4')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> {t('hero.check1')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> {t('hero.check2')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> {t('hero.check3')}
            </div>
          </div>
        </motion.div>
        
        {/* AI Audit Terminal */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <AIAuditTerminal />
        </motion.div>
      </div>

      {isDemoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setIsDemoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200 transition-colors"
              aria-label="Close demo video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
              <iframe
                className="h-full w-full"
                src={demoVideoUrl}
                title="BIM Compliance Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
