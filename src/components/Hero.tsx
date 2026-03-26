import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, FileDigit, Mail } from "lucide-react";

interface HeroProps {
  onOpenDemo: (source: string) => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 pb-28 sm:pb-32 lg:pb-24 lg:min-h-screen lg:flex lg:items-center lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl rounded-full opacity-50" />

      <div className="relative mx-auto max-w-7xl w-full min-w-0 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 lg:items-center">

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl min-w-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Cleo AI
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Tu negocio al día, sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">vivir pegado al correo.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-lg tracking-tight sm:text-xl leading-relaxed text-slate-300">
            Cleo es tu auxiliar administrativo invisible que captura facturas y pagos automáticamente por ti, <strong className="text-white">validando cada documento directamente en la DIAN.</strong> Disfruta un tablero claro, ahorra horas cada semana y despídete del caos de fin de mes. <strong>Modelo "pay-and-go", sin proyectos largos.</strong>
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-0">
            <button onClick={() => onOpenDemo("Hero: Solicitar demo gratis")} className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto">
              Solicitar demo gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>
            <button onClick={() => onOpenDemo("Hero: Ver cómo funciona")} className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5 border border-white/10 w-full sm:w-auto">
              Ver cómo funciona
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4 text-sm text-slate-400 min-w-0">
            <p className="min-w-0">Pensado para <span className="text-white font-medium">PyMES, Startups, Agencias e Independientes</span></p>
          </motion.div>
        </motion.div>

        {/* Visual / Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative lg:h-[600px] flex items-center min-w-0"
        >
          <div className="relative w-full min-w-0 lg:h-[90%] glass-dark rounded-2xl p-6 shadow-2xl overflow-hidden shadow-black/50">
            {/* Window header */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4 min-w-0 overflow-hidden">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs text-slate-500 font-medium tracking-wide truncate min-w-0">CLEO JUNIOR</div>
            </div>

            <div className="space-y-4">
              {/* Fake Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="bg-slate-800/50 p-4 rounded-xl border border-white/5 relative"
              >
                <div className="flex gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1 min-w-0 gap-2">
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2 min-w-0 truncate"
                      >
                        NUEVO CORREO
                        <span className="text-[10px] lowercase font-medium opacity-80 truncate">Inteligencia Artificial</span>
                      </motion.span>
                      <span className="text-[10px] text-slate-500 font-medium">Ahora</span>
                    </div>
                    <div className="text-sm text-white font-medium truncate flex items-center gap-2 min-w-0">
                      Recibo de pago - Internet Tigo
                      <span className="inline-flex items-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-medium text-blue-400 ring-1 ring-inset ring-blue-500/30">
                        Nuevo
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                      <FileDigit className="w-3 h-3 text-slate-500" />
                      Recibo_Tigo_Mar2026.pdf
                    </div>
                  </div>
                </div>
                {/* Extraction Animation Overlay */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                />
              </motion.div>

              {/* Extraction Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
                </motion.div>
              </div>

              {/* Parsed Result */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
                className="bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-2xl relative overflow-hidden group"
              >
                {/* Subtle success glow */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-emerald-500/10 blur-2xl rounded-full" />

                <div className="flex gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Extracción Exitosa</span>
                      <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30">
                        Listo
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-1">Proveedor</span>
                          <span className="text-sm text-white font-medium">Tigo Colombia</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-1">Total Pagado</span>
                          <span className="text-sm text-white font-medium">$ 89.900</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-1">Fecha Pago</span>
                          <span className="text-sm text-white font-medium">03 Mar 2026</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                          <span className="text-[10px] text-emerald-500/70 block uppercase tracking-tight mb-1">Estado DIAN</span>
                          <span className="text-sm text-emerald-400 font-bold">Validado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Another row fading in later */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mt-4 px-2 min-w-0"
              >
                <span className="flex items-center gap-1.5"><FileDigit className="w-4 h-4" /> Consolidado Google Sheets</span>
                <span className="text-emerald-400">+1 Registro actualizado</span>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
