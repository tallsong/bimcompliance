import { motion } from "motion/react";
import { Upload, Brain, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-brand" />,
      title: t('how.step1Title'),
      desc: t('how.step1Desc'),
      tag: t('how.step1Tag')
    },
    {
      icon: <Brain className="w-10 h-10 text-brand" />,
      title: t('how.step2Title'),
      desc: t('how.step2Desc'),
      tag: t('how.step2Tag')
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-brand" />,
      title: t('how.step3Title'),
      desc: t('how.step3Desc'),
      tag: t('how.step3Tag')
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('how.sectionTitle')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('how.sectionSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <span className="text-xs font-bold text-brand uppercase tracking-widest mb-2 block">{step.tag}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
