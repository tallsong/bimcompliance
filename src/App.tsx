import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import Founders from "./components/Founders";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useLanguage } from "./LanguageContext";

export default function App() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = t("meta.title");
    document.documentElement.lang = language;
  }, [language, t]);

  return (
    <div className="min-h-screen font-sans selection:bg-brand/20">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Founders />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

