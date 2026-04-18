export type Language = 'en' | 'de';

export const translations = {
  en: {
    meta: {
      title: "A zero-setup AI compliance engine for BIM"
    },
    // Navbar
    nav: {
      features: "Features",
      howItWorks: "How it Works",
      requestPilot: "Request Pilot"
    },
    // Hero
    hero: {
      badge: "Agentic AI for BIM Compliance",
      titlePart1: "Automate BIM Compliance with ",
      titleHighlight: "Agentic AI",
      description: "Eliminate manual checking, costly rework, and project delays. Our real-time AI intelligence validates BIM models against DIN, EN, and ESG standards instantly.",
      btnPrimary: "Request Pilot",
      btnSecondary: "Watch Demo",
      check1: "DIN/EN Standards",
      check2: "Real-time IFC Parsing",
      check3: "ESG Compliance",
      check4: "Fire Safety (BbgBO / DIN 4102)",
      mockupFile: "Upload_Hospital_IFC_Model.ifc",
      mockupViolation: "DIN 18040-1 VIOLATION"
    },
    // ProblemSolution
    problems: {
      sectionTitle: "The Compliance Gap",
      sectionSubtitle: "Traditional BIM compliance is reactive, manual, and fragmented. We make it proactive, automated, and intelligent.",
      col1Title: "The Current Challenge",
      col2Title: "The BimCompliance Edge",
      p1Title: "Manual Checking",
      p1Desc: "Architects spend countless hours manually verifying thousands of pages of complex regulations.",
      p2Title: "Error-Prone",
      p2Desc: "Given the immense complexity of modern BIM models and building codes, manual oversights are inevitable—leading to costly downstream rework and project delays.",
      p3Title: "Not Scalable",
      p3Desc: "Increasingly complex ESG and technical standards (DIN, EN) make manual scaling impossible.",
      s1Title: "Real-time Intelligence",
      s1Desc: "Integrated AI checking happens during the design phase, not after it's finished.",
      s2Title: "Instant Validation",
      s2Desc: "Parse massive IFC/Revit models (100k+ elements) in seconds against a comprehensive regulatory knowledge base.",
      s3Title: "Reduced Rework",
      s3Desc: "Detect violations early and get actionable suggestions to fix them immediately."
    },
    // HowItWorks
    how: {
      sectionTitle: "How it Works",
      sectionSubtitle: "Our agentic AI integrates seamlessly into your existing BIM workflow, providing real-time compliance intelligence.",
      step1Tag: "Step 1",
      step1Title: "Upload BIM Models",
      step1Desc: "Securely upload your IFC or Revit models (up to 100MB+). Our system supports all major BIM formats and versions.",
      step2Tag: "Step 2",
      step2Title: "AI Parsing & Mapping",
      step2Desc: "Our Agentic AI semantically maps geometry and materials against thousands of pages of DIN, EN, and ESG standards.",
      step3Tag: "Step 3",
      step3Title: "Actionable Feedback",
      step3Desc: "Receive instant alerts (OK / Risk / Violation) with detailed explanations and automated suggestions for fixes."
    },
    // Founders
    founders: {
      sectionTitle: "Meet the Founders",
      sectionSubtitle: "The team behind the next generation of AI-driven compliance auditing.",
      founder1Name: "Gaosong Chen",
      founder1Title: "Co-founder & CTO",
      founder1Bio: "A technical visionary focused on building scalable software architecture and advanced AI systems. Gaosong engineered the core BimCompliance Agentic AI engine, combining deep knowledge of Large Language Models (LLMs) with automated IFC data parsing to create zero-setup compliance auditing.",
      founder2Name: "Hagen Träger",
      founder2Title: "Co-founder & CEO",
      founder2Bio: "An aspiring GTM strategist with a strong foundation in planning and executing complex projects. Hagen brings analytical thinking, structured project management, and a deep interest in platform-based technology solutions in the European market. He drives business development, the building of partnerships, and the development of pilot programs – with the goal of connecting innovative ConTech with established industry players."
    },
    // ContactForm
    contact: {
      titlePart1: "Ready to Automate Your ",
      titleHighlight: "BIM Compliance?",
      description: "Join the waitlist for our exclusive enterprise pilot program. Our team will reach out to discuss how BimCompliance can integrate with your existing Arcadis, Revit, or IFC workflows.",
      emailTitle: "Email Us",
      enterpriseTitle: "Enterprise Ready",
      enterpriseDesc: "Tailored for global engineering consulting firms.",
      nameLabel: "Full Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Work Email",
      emailPlaceholder: "jane@company.com",
      companyLabel: "Company Name",
      companyPlaceholder: "Arcadis / Engineering Firm",
      btnSubmit: "Request Pilot Access",
      securityText: "Protected by enterprise-grade security"
    },
    // Footer
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Contact Support",
      copyright: "© 2026 BimCompliance. All rights reserved."
    }
  },
  de: {
    meta: {
      title: "Eine KI-Compliance-Engine fuer BIM ohne Setup"
    },
    // Navbar
    nav: {
      features: "Funktionen",
      howItWorks: "So funktioniert's",
      requestPilot: "Pilotprojekt anfragen"
    },
    // Hero
    hero: {
      badge: "Agentische KI für BIM-Compliance",
      titlePart1: "Automatisieren Sie BIM-Compliance mit ",
      titleHighlight: "Agentischer KI",
      description: "Vermeiden Sie manuelle Prüfungen, teure Nacharbeiten und Projektverzögerungen. Unsere KI-Intelligenz in Echtzeit validiert BIM-Modelle sofort nach DIN-, EN- und ESG-Standards.",
      btnPrimary: "Pilotprojekt anfragen",
      btnSecondary: "Demo ansehen",
      check1: "DIN/EN-Standards",
      check2: "Echtzeit-IFC-Parsing",
      check3: "ESG-Compliance",
      check4: "Brandschutz (BbgBO / DIN 4102)",
      mockupFile: "Upload_Hospital_IFC_Model.ifc",
      mockupViolation: "VERSTOSS GEGEN DIN 18040-1"
    },
    // ProblemSolution
    problems: {
      sectionTitle: "Die Compliance-Lücke",
      sectionSubtitle: "Traditionelle BIM-Compliance ist reaktiv, manuell und fragmentiert. Wir machen sie proaktiv, automatisiert und intelligent.",
      col1Title: "Die aktuelle Herausforderung",
      col2Title: "Der BimCompliance-Vorteil",
      p1Title: "Manuelle Prüfung",
      p1Desc: "Architekten verbringen unzählige Stunden damit, Tausende von Seiten komplexer Vorschriften manuell zu überprüfen.",
      p2Title: "Fehleranfällig",
      p2Desc: "Angesichts der immensen Komplexität moderner BIM-Modelle und Bauvorschriften sind manuelle Versehen unvermeidlich – was zu kostspieligen Nacharbeiten und Projektverzögerungen führt.",
      p3Title: "Nicht skalierbar",
      p3Desc: "Zunehmend komplexe ESG- und technische Standards (DIN, EN) machen eine manuelle Skalierung unmöglich.",
      s1Title: "Echtzeit-Intelligenz",
      s1Desc: "Die integrierte KI-Prüfung erfolgt während der Planungsphase, nicht erst danach.",
      s2Title: "Sofortige Validierung",
      s2Desc: "Analysieren Sie massive IFC/Revit-Modelle (100k+ Elemente) in Sekundenbruchteilen anhand einer umfassenden regulatorischen Wissensdatenbank.",
      s3Title: "Reduzierte Nacharbeit",
      s3Desc: "Erkennen Sie Verstöße frühzeitig und erhalten Sie umsetzbare Vorschläge zur sofortigen Behebung."
    },
    // HowItWorks
    how: {
      sectionTitle: "So funktioniert's",
      sectionSubtitle: "Unsere agentische KI integriert sich nahtlos in Ihren bestehenden BIM-Workflow und bietet Compliance-Intelligenz in Echtzeit.",
      step1Tag: "Schritt 1",
      step1Title: "BIM-Modelle hochladen",
      step1Desc: "Laden Sie Ihre IFC- oder Revit-Modelle (bis zu 100MB+) sicher hoch. Unser System unterstützt alle gängigen BIM-Formate und Versionen.",
      step2Tag: "Schritt 2",
      step2Title: "KI-Analyse & Mapping",
      step2Desc: "Unsere agentische KI kartiert Geometrie und Materialien semantisch gegen Tausende Seiten von DIN-, EN- und ESG-Standards.",
      step3Tag: "Schritt 3",
      step3Title: "Umsetzbares Feedback",
      step3Desc: "Erhalten Sie sofortige Warnmeldungen (OK / Risiko / Verstoß) mit detaillierten Erklärungen und automatisierten Korrekturvorschlägen."
    },
    // Founders
    founders: {
      sectionTitle: "Lernen Sie die Gründer kennen",
      sectionSubtitle: "Das Team hinter der nächsten Generation KI-gesteuerter Compliance-Prüfungen.",
      founder1Name: "Gaosong Chen",
      founder1Title: "Mitgründer & CTO",
      founder1Bio: "Ein technischer Visionär, der sich auf den Aufbau skalierbarer Softwarearchitektur und fortschrittlicher KI-Systeme konzentriert. Gaosong entwickelte die Kern-Engine der agentischen KI von BimCompliance und kombinierte tiefes Wissen über große Sprachmodelle (LLMs) mit automatisiertem IFC-Daten-Parsing, um eine Compliance-Prüfung ohne Einrichtungsaufwand zu schaffen.",
      founder2Name: "Hagen Träger",
      founder2Title: "Mitgründer & CEO",
      founder2Bio: "Ein angehender GTM-Stratege mit einem starken Fundament in der Planung und Umsetzung komplexer Projekte. Hagen bringt analytisches Denken, strukturiertes Projektmanagement und ein tiefes Interesse an plattformbasierten Technologielösungen im europäischen Markt mit. Er treibt Business Development, den Aufbau von Partnerschaften und die Entwicklung von Pilotprogrammen voran – mit dem Ziel, innovative ConTech mit etablierten Branchenakteuren zu verbinden."
    },
    // ContactForm
    contact: {
      titlePart1: "Bereit, Ihre ",
      titleHighlight: "BIM-Compliance",
      titlePart2: " zu automatisieren?",
      description: "Tragen Sie sich in die Warteliste für unser exklusives Enterprise-Pilotprogramm ein. Unser Team wird sich mit Ihnen in Verbindung setzen, um zu besprechen, wie BimCompliance in Ihre bestehenden Arcadis-, Revit- oder IFC-Workflows integriert werden kann.",
      emailTitle: "Schreiben Sie uns",
      enterpriseTitle: "Enterprise-Ready",
      enterpriseDesc: "Maßgeschneidert für globale Ingenieurberatungsunternehmen.",
      nameLabel: "Vollständiger Name",
      namePlaceholder: "Max Mustermann",
      emailLabel: "Geschäftliche E-Mail",
      emailPlaceholder: "max@unternehmen.de",
      companyLabel: "Firmenname",
      companyPlaceholder: "Arcadis / Ingenieurbüro",
      btnSubmit: "Pilotzugang anfragen",
      securityText: "Geschützt durch Sicherheit auf Enterprise-Niveau"
    },
    // Footer
    footer: {
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      support: "Support kontaktieren",
      copyright: "© 2026 BimCompliance. Alle Rechte vorbehalten."
    }
  }
};
