import { motion } from "motion/react";
import { User } from "lucide-react";
import { useLanguage } from "../LanguageContext";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Founders() {
  const { t } = useLanguage();

  return (
    <section id="founders" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('founders.sectionTitle')}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {t('founders.sectionSubtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Founder 1 */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center shrink-0 border-2 border-gray-600 overflow-hidden">
                <img
                  src="https://tallsong.github.io/images/profile.jpg"
                  alt="Gaosong Chen"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-1">{t('founders.founder1Name')}</h3>
                <p className="text-brand font-medium mb-3">{t('founders.founder1Title')}</p>
                <a
                  href="https://www.linkedin.com/in/Gaosongchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-brand/20 hover:text-brand text-gray-400 transition-colors"
                  aria-label="Gaosong Chen LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('founders.founder1Bio')}
            </p>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center shrink-0 border-2 border-gray-600 overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEbGqdaeXfkew/profile-displayphoto-crop_800_800/B56Z1ErxFLGwAM-/0/1774973819777?e=1777507200&v=beta&t=5lJPrG1mSOvGRXo7pt18VDQ-dV0aHWIzAuRgFSd6U7U"
                  alt="Hagen Träger"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-1">{t('founders.founder2Name')}</h3>
                <p className="text-brand font-medium mb-3">{t('founders.founder2Title')}</p>
                <a
                  href="https://www.linkedin.com/in/hagen-träger-7269a43ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-brand/20 hover:text-brand text-gray-400 transition-colors"
                  aria-label="Hagen Träger LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('founders.founder2Bio')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
