import { motion, AnimatePresence, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Terminal, CheckCircle2, AlertCircle, FileText, ArrowRight, RotateCcw, Building2 } from "lucide-react";

const steps = [
  { id: 1, type: "info", prefix: "[SCANNING]", text: "Parsing IFC Geometry: Arcadis_Hospital_Block_A..." },
  { id: 2, type: "info", prefix: "[SPATIAL]", text: "Room 402 (Ward) identified. Adjacency: Corridor A." },
  { id: 3, type: "success", prefix: "[PATHFINDING]", text: "Analyzing egress route: Corridor A -> Stairwell-01. Route confirmed as Primary Escape." },
  { id: 4, type: "warning", prefix: "[KNOWLEDGE]", text: "Retrieving German MBO §35... Regulation requires F90 fire rating for stairwell-connecting doors." },
  { id: 5, type: "error", prefix: "[CRITICAL ERROR]", text: "DETECTION: Door ID-98274 is F30. Required: F90. [HIGH RISK]" },
];

export default function AIAuditTerminal() {
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logsContainerRef = useRef<HTMLDivElement>(null);
  const generationTimeoutRef = useRef<number | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: true });

  useEffect(() => {
    const logsContainer = logsContainerRef.current;
    if (!logsContainer) return;

    logsContainer.scrollTo({
      top: logsContainer.scrollHeight,
      behavior: "smooth",
    });
  }, [activeStepIndex, isRunning, isFinished]);

  useEffect(() => {
    if (isInView && !isRunning && !isFinished) {
      startAudit();
    }
  }, [isInView]);

  useEffect(() => {
    if (isRunning) {
      if (activeStepIndex < steps.length - 1) {
        const timeout = setTimeout(() => {
          setActiveStepIndex(prev => prev + 1);
        }, Math.floor(Math.random() * 400) + 800); // 800ms - 1200ms delay
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsFinished(true), 1000);
      }
    }
  }, [activeStepIndex, isRunning]);

  useEffect(() => {
    return () => {
      if (generationTimeoutRef.current) {
        window.clearTimeout(generationTimeoutRef.current);
      }
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const startAudit = () => {
    if (generationTimeoutRef.current) {
      window.clearTimeout(generationTimeoutRef.current);
      generationTimeoutRef.current = null;
    }
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    }
    setIsRunning(true);
    setIsFinished(false);
    setIsGenerating(false);
    setIsSuccess(false);
    setShowSuccessToast(false);
    setActiveStepIndex(-1);
  };

  const handleGenerateTicket = () => {
    if (isGenerating || isSuccess) return;

    setIsGenerating(true);
    setShowSuccessToast(false);

    generationTimeoutRef.current = window.setTimeout(() => {
      setIsGenerating(false);
      setIsSuccess(true);
      setShowSuccessToast(true);

      toastTimeoutRef.current = window.setTimeout(() => {
        setShowSuccessToast(false);
      }, 2200);
    }, 1500);
  };

  const getPrefixColor = (type: string) => {
    switch (type) {
      case "info": return "text-sky-700";
      case "success": return "text-emerald-700";
      case "warning": return "text-amber-700";
      case "error": return "text-rose-700 font-bold";
      default: return "text-slate-500";
    }
  };

  const getTextColor = (type: string) => {
    if (type === "error") return "text-rose-700 font-bold";
    return "text-slate-700";
  };

  const isErrorDetected = activeStepIndex >= 4;

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200">

        {/* Left Column: Terminal Log */}
        <div className="bg-slate-50 shadow-lg shadow-slate-300/30 rounded-xl p-6 font-mono text-sm overflow-hidden relative flex flex-col h-[400px] border border-slate-200">
          <AnimatePresence>
            {showSuccessToast && (
              <motion.div
                initial={{ opacity: 0, y: -12, x: 12 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -8, x: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute top-3 right-3 z-30 bg-emerald-600 text-white px-3 py-2 rounded-md text-[11px] font-sans shadow-lg border border-emerald-500 flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Architect notified via Jira integration.
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between gap-2 mb-4 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-slate-500 text-xs tracking-wider">AI_AUDIT_TERMINAL // SESSION_71A</span>
            </div>

            <AnimatePresence>
              {isFinished && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={startAudit}
                  className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 px-3 py-1 rounded text-xs transition-colors font-sans"
                >
                  <RotateCcw className="w-3 h-3" />
                  Re-run Audit
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div ref={logsContainerRef} className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-300">
            {activeStepIndex === -1 && isRunning && (
              <div className="text-slate-600">Initializing AI engine...</div>
            )}

            <AnimatePresence>
              {steps.slice(0, activeStepIndex + 1).map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row sm:gap-2 items-start"
                >
                  <span className={`shrink-0 ${getPrefixColor(step.type)}`}>{step.prefix}</span>
                  <span className={getTextColor(step.type)}>{step.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            {isRunning && !isFinished && (
              <div className="flex items-center text-slate-600 mt-2">
                <span className="mr-2">&gt;</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2.5 h-4 bg-slate-600"
                />
              </div>
            )}

            {isFinished && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 border-t border-slate-200 pt-4"
              >
                <motion.button
                  onClick={handleGenerateTicket}
                  disabled={isGenerating || isSuccess}
                  animate={isGenerating ? { scale: [1, 1.015, 1] } : { scale: 1 }}
                  transition={isGenerating ? { repeat: Infinity, duration: 0.9, ease: "easeInOut" } : { duration: 0.2 }}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-sans border ${
                    isSuccess
                      ? "bg-emerald-600 text-white border-emerald-700"
                      : "bg-sky-600 text-white border-sky-700 hover:bg-sky-700"
                  } ${(isGenerating || isSuccess) ? "cursor-not-allowed" : ""}`}
                >
                  {isGenerating ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Terminal className="w-4 h-4" />
                    </motion.div>
                  ) : isSuccess ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <FileText className="w-4 h-4" />
                  )}

                  {isGenerating
                    ? "⏳ Compiling BCF Payload..."
                    : isSuccess
                      ? "✅ Ticket #ARC-492 Created & Sent"
                      : "🛠️ Generate BCF Ticket (Jira)"}

                  {!isGenerating && !isSuccess && <ArrowRight className="w-4 h-4 ml-1" />}
                </motion.button>
              </motion.div>
            )}
            <div />
          </div>
        </div>

        {/* Right Column: Model Context (Schematic) */}
        <div className={`relative rounded-xl overflow-hidden bg-slate-50 border-2 transition-colors duration-500 ${isErrorDetected ? 'border-red-400/50 bg-red-50/30' : 'border-slate-200'}`}>
           <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm flex items-center gap-2">
             <Building2 className="w-3.5 h-3.5" />
             Model Context: Floor 4
           </div>

           {/* Wireframe Diagram */}
           <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full aspect-square max-w-sm">
                 {/* Outer walls */}
                 <div className="absolute inset-0 border-[3px] border-slate-300 rounded-sm" />

                 {/* Corridor A */}
                 <div className="absolute top-1/4 left-0 w-full h-1/4 border-y-[3px] border-slate-300 flex items-center justify-center">
                    <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">Corridor A</span>
                 </div>

                 {/* Room 402 */}
                 <div className="absolute top-0 left-0 w-1/2 h-1/4 border-r-[3px] border-slate-300 bg-slate-200/30 flex items-center justify-center">
                    <span className="text-slate-500 text-xs font-mono">Room 402</span>
                 </div>

                 {/* Stairwell */}
                 <div className="absolute bottom-0 right-0 w-1/3 h-1/2 border-l-[3px] border-t-[3px] border-slate-300 bg-slate-200/50 flex items-center justify-center relative overflow-hidden">
                    <span className="text-slate-500 text-xs font-mono z-10 bg-slate-50 px-1">Stairwell-01</span>
                    {/* Stairs pattern */}
                    <div className="absolute inset-0 opacity-20 flex flex-col justify-between py-2">
                       {[...Array(8)].map((_, i) => (
                         <div key={i} className="w-full border-b-2 border-slate-400" />
                       ))}
                    </div>
                 </div>

                 {/* The Problematic Door */}
                 <motion.div
                    className="absolute bottom-1/2 right-1/3 translate-x-1/2 translate-y-1/2 w-8 h-8 z-20 flex items-center justify-center"
                    animate={isErrorDetected ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                 >
                    {/* Door swing arc */}
                    <div className="absolute w-8 h-8 border-t-2 border-r-2 border-slate-400 rounded-tr-full opacity-50" />

                    {/* Door frame/panel */}
                    <div className={`w-1 h-8 ${isErrorDetected ? 'bg-red-500' : 'bg-slate-500'} absolute right-0 bottom-0`} />

                    {/* Error Highlight */}
                    <AnimatePresence>
                      {isErrorDetected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-12 -right-24 bg-red-500 text-white text-[10px] font-mono px-2 py-1 rounded shadow-lg whitespace-nowrap flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          ID-98274 (F30)
                          <div className="absolute bottom-[-4px] left-4 w-2 h-2 bg-red-500 rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Red Flash Overlay on Door */}
                    {isErrorDetected && (
                      <motion.div
                         animate={{ opacity: [0, 0.5, 0] }}
                         transition={{ repeat: Infinity, duration: 1.5 }}
                         className="absolute inset-[-12px] border-2 border-red-500 bg-red-500/20 rounded"
                      />
                    )}
                 </motion.div>
              </div>
           </div>

           {/* Full panel red flash on error detection */}
           <AnimatePresence>
             {isErrorDetected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.15, 0] }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-red-500 pointer-events-none z-30"
                />
             )}
           </AnimatePresence>

        </div>
      </div>
    </div>
  );
}