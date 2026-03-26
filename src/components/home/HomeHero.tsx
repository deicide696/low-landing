import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Mail, FileDigit, CheckCircle2, Sparkles, Flame, Scale, Brain, Cpu, Network } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeHeroProps {
  onOpenDemo: (source: string) => void;
}

export default function HomeHero({ onOpenDemo }: HomeHeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // 10 seconds per slide
    return () => clearInterval(timer);
  }, [activeSlide]);

  const SLIDE_COUNT = 2;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 pb-32 sm:pb-40 lg:pb-32 lg:min-h-screen lg:flex lg:items-center lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] blur-3xl rounded-full opacity-50 transition-colors duration-1000 ${activeSlide === 1 ? "bg-gradient-to-b from-blue-500/20 to-transparent" : "bg-gradient-to-b from-indigo-500/20 to-transparent"}`} />
      <div className={`absolute bottom-0 right-0 w-96 h-96 blur-3xl rounded-full opacity-40 transition-colors duration-1000 ${activeSlide === 1 ? "bg-gradient-to-t from-emerald-500/10 to-transparent" : "bg-gradient-to-t from-purple-500/10 to-transparent"}`} />

      <div className="relative mx-auto max-w-7xl w-full min-w-0 flex flex-col items-center">

        <div className="w-full relative min-h-[850px] md:min-h-[750px] lg:min-h-[550px]">
          <AnimatePresence mode="wait">
            {activeSlide === 1 ? (
              <motion.div
                key="slide-cleo"
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full"
              >
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 lg:items-center h-full">
                  {/* CLEO Text Content */}
                  <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl min-w-0">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                      <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      Automatiza tu administración con IA
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                      Tus facturas y pagos, capturados <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">sin mover un dedo.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-6 text-lg tracking-tight sm:text-xl leading-relaxed text-slate-300">
                      Cleo lee tu correo, extrae los datos de cada factura y comprobante de pago, y los organiza en un tablero claro — automáticamente. <strong className="text-white">Ve diariamente tu flujo de caja.</strong>
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-0">
                      <button onClick={() => onOpenDemo("HomeHero: Solicitar demo Cleo")} className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto">
                        Solicitar demo gratis
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                      </button>
                      <Link to="/auxiliar-administrativo" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5 border border-white/10 w-full sm:w-auto">
                        Conocer Cleo
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* CLEO Mockup */}
                  <div className="relative flex items-center min-w-0">
                    <div className="relative w-full min-w-0 glass-dark rounded-2xl p-6 shadow-2xl overflow-hidden border border-white/5">
                      <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4 min-w-0">
                        <div className="flex gap-1.5 shrink-0"><div className="w-3 h-3 rounded-full bg-red-500/80" /><div className="w-3 h-3 rounded-full bg-yellow-500/80" /><div className="w-3 h-3 rounded-full bg-green-500/80" /></div>
                        <div className="mx-auto text-xs text-slate-500 font-medium tracking-wide truncate min-w-0">CLEO — EXTRACCIÓN DOCUMENTAL</div>
                      </div>
                      <div className="space-y-3">
                        {/* Processing Row */}
                        <div className="bg-slate-800/50 p-3.5 rounded-xl border border-white/5 relative">
                          <div className="flex gap-3 items-center min-w-0">
                            <div className="flex-none w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                              <Mail className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 min-w-0">
                                <span className="text-sm text-white font-medium truncate">Factura #1847 — Proveedor XYZ</span>
                                <span className="inline-flex items-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-medium text-blue-400 ring-1 ring-inset ring-blue-500/30 shrink-0">Nuevo</span>
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                                <FileDigit className="w-3 h-3 text-slate-500" />Factura_XYZ_Mar2026.pdf
                              </div>
                            </div>
                          </div>
                          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute bottom-0 left-0 h-0.5 bg-blue-500" />
                        </div>
                        {/* Sparkles */}
                        <div className="flex justify-center py-1">
                          <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                        </div>
                        {/* Parsed Result Card */}
                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-emerald-500/10 blur-2xl rounded-full" />
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2"><CheckCircle2 className="w-4 h-4" />Extracción Exitosa</span>
                            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30">Registrado</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2.5">
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5"><span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-0.5">Proveedor</span><span className="text-sm text-white font-medium">XYZ Corp</span></div>
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5"><span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-0.5">Total</span><span className="text-sm text-white font-medium">$2.340.000</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="slide-low"
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full"
              >
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 lg:items-center h-full">
                  {/* LOW Text Content */}
                  <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl min-w-0">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
                      <Cpu className="w-4 h-4" />
                      AI-First
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                      Automatización <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Low Cost.</span><br />Resultados High End.
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-6 text-lg tracking-tight sm:text-xl leading-relaxed text-slate-300">
                      Construimos <strong className="text-white">agentes de IA especializados</strong> que asumen tus tareas operativas. Implementación ágil, estándar y sin interminables horas de consultoría. Democratizamos el acceso a la inteligencia empresarial.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-0">
                      <a href="#productos" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto">
                        Ver catálogo de agentes
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* LOW Ecosystem Mockup */}
                  <div className="relative flex items-center justify-center min-w-0 h-full lg:h-[500px]">
                    <div className="relative w-full max-w-md aspect-square">
                      {/* Central Core */}
                      <motion.div
                        animate={{ boxShadow: ["0 0 20px rgba(99,102,241,0.2)", "0 0 60px rgba(99,102,241,0.6)", "0 0 20px rgba(99,102,241,0.2)"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-indigo-500/10 border border-indigo-500/30 rounded-3xl flex items-center justify-center backdrop-blur-xl z-20"
                      >
                        <Network className="w-12 h-12 text-indigo-400" />
                        <div className="absolute -bottom-6 text-xs font-bold text-indigo-300 tracking-widest">LOW</div>
                      </motion.div>

                      {/* Orbiting Agents */}
                      {[
                        { icon: Mail, label: "CLEO", color: "blue", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                        { icon: Flame, label: "SMOKEY", color: "amber", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                        { icon: Scale, label: "LEXICON", color: "purple", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
                        { icon: Brain, label: "TALAMA", color: "rose", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" }
                      ].map((agent, i) => (
                        <div key={agent.label} className={`absolute ${agent.pos} z-10 hidden sm:block`}>
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
                            className={`w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-xl relative overflow-visible`}
                          >
                            <agent.icon className={`w-7 h-7 text-${agent.color}-400`} />
                            {/* Lines connecting to center */}
                            <motion.div
                              className={`absolute w-full h-full rounded-2xl border border-${agent.color}-400/30`}
                              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            />
                            <div className="absolute -top-6 whitespace-nowrap text-[10px] font-bold text-slate-400">{agent.label}</div>
                          </motion.div>
                        </div>
                      ))}

                      {/* Connecting Pulse Lines */}
                      <svg className="absolute inset-0 w-full h-full hidden sm:block pointer-events-none" viewBox="0 0 100 100">
                        <motion.line x1="50" y1="20" x2="50" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        <motion.line x1="20" y1="50" x2="80" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        <motion.circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Custom Navigation Dots positioned below the slides */}
        <div className="relative  mt-8 flex items-center justify-center gap-3 z-30">
          {Array.from({ length: SLIDE_COUNT }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${activeSlide === idx ? "bg-white w-8" : "bg-white/20 w-2 hover:bg-white/40"}`}
              aria-label={`Ir a diapositiva ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
