import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2, Building2, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

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
        
        {/* Mockup / Visual Placeholder */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="aspect-[16/9] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden p-4">
             <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex flex-col p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none" />

                {/* Mockup Top Bar */}
                <div className="w-full flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                   </div>
                   <div className="h-6 w-32 bg-white border border-gray-200 rounded-md shadow-sm" />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  {/* File Upload Card Mockup */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 w-full max-w-md text-left relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="w-6 h-6 text-brand" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-semibold text-sm mb-1">{t('hero.mockupFile')}</p>
                        <p className="text-gray-400 text-xs mb-3">42.5 MB • IFC4</p>
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-brand w-3/4 rounded-full" />
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-brand text-xs font-medium">Scanning compliance...</span>
                          <span className="text-gray-500 text-xs">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated UI elements (Alert Toast) */}
                <div className="absolute top-24 right-8 w-64 bg-white rounded-lg shadow-xl border border-red-100 p-4 text-left z-20">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-red-600 mb-1">{t('hero.mockupViolation')}</div>
                      <div className="h-2 w-full bg-gray-100 rounded mb-1.5" />
                      <div className="h-2 w-3/4 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
             </div>
          </div>
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
