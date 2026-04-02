import { motion } from "motion/react";
import { XCircle, CheckCircle2, AlertTriangle, Clock, TrendingDown, Scale } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    { icon: <XCircle className="w-6 h-6 text-red-500" />, title: "Manual Checking", desc: "Architects spend thousands of hours manually verifying thousands of pages of regulations." },
    { icon: <AlertTriangle className="w-6 h-6 text-orange-500" />, title: "Error-Prone", desc: "Human oversight leads to missed violations, causing rework and costly delays after design." },
    { icon: <Scale className="w-6 h-6 text-gray-500" />, title: "Not Scalable", desc: "Increasingly complex ESG and technical standards (DIN, EN) make manual scaling impossible." }
  ];

  const solutions = [
    { icon: <CheckCircle2 className="w-6 h-6 text-green-500" />, title: "Real-time Intelligence", desc: "Integrated AI checking happens during the design phase, not after it's finished." },
    { icon: <Clock className="w-6 h-6 text-brand" />, title: "Instant Validation", desc: "Parse 90MB+ IFC/Revit models in seconds against a comprehensive regulatory knowledge base." },
    { icon: <TrendingDown className="w-6 h-6 text-brand" />, title: "Reduced Rework", desc: "Detect violations early and get actionable suggestions to fix them immediately." }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Compliance Gap</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditional BIM compliance is reactive. We make it proactive, integrated, and intelligent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem Column */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">01</span>
              The Current Challenge
            </h3>
            <div className="space-y-8">
              {problems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Column */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-brand/5 rounded-3xl p-8 lg:p-12 border border-brand/10 shadow-xl shadow-brand/5"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm">02</span>
              The BimCompliance Edge
            </h3>
            <div className="space-y-8">
              {solutions.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
