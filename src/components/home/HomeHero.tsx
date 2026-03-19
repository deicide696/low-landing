import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, FileDigit, CheckCircle2, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeHeroProps {
  onOpenDemo: (source: string) => void;
}

export default function HomeHero({ onOpenDemo }: HomeHeroProps) {
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
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 pb-28 sm:pb-32 lg:pb-24 lg:min-h-screen lg:flex lg:items-center lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-emerald-500/10 to-transparent blur-3xl rounded-full opacity-40" />

      <div className="relative mx-auto max-w-7xl w-full min-w-0 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 lg:items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl min-w-0"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Automatiza tu administración con IA
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Tus facturas y pagos, capturados{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              sin mover un dedo.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg tracking-tight sm:text-xl leading-relaxed text-slate-300"
          >
            Low lee tu correo, extrae los datos de cada factura y comprobante de
            pago, y los organiza en un tablero claro — automáticamente.{" "}
            <strong className="text-white">
              Ve diariamente tu flujo de caja.
            </strong>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-0"
          >
            <button
              onClick={() => onOpenDemo("HomeHero: Solicitar demo gratis")}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              Solicitar demo gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>
            <Link
              to="/auxiliar-administrativo"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5 border border-white/10 w-full sm:w-auto"
            >
              Conocer Cleo
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-4 text-sm text-slate-400 min-w-0"
          >
            <p className="min-w-0">
              Para{" "}
              <span className="text-white font-medium">
                Empresas que reciben +50 correos al mes
              </span>{" "}
              con facturas y pagos
            </p>
          </motion.div>
        </motion.div>

        {/* Visual / Inbox-to-Extraction Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center min-w-0"
        >
          <div className="relative w-full min-w-0 glass-dark rounded-2xl p-6 shadow-2xl overflow-hidden shadow-black/50">
            {/* Window header */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4 min-w-0 overflow-hidden">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs text-slate-500 font-medium tracking-wide truncate min-w-0">
                LOW — AUTOMATIZACIÓN ADMINISTRATIVA
              </div>
            </div>

            <div className="space-y-3">
              {/* Email Row 1 — Being processed */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-slate-800/50 p-3.5 rounded-xl border border-white/5 relative"
              >
                <div className="flex gap-3 items-center min-w-0">
                  <div className="flex-none w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <span className="text-sm text-white font-medium truncate">
                        Factura #1847 — Proveedor XYZ
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-medium text-blue-400 ring-1 ring-inset ring-blue-500/30 shrink-0">
                        Nuevo
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                      <FileDigit className="w-3 h-3 text-slate-500" />
                      Factura_XYZ_Mar2026.pdf
                    </div>
                  </div>
                </div>
                {/* Scanning bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                />
              </motion.div>

              {/* Email Row 2 — Processing */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="bg-slate-800/30 p-3.5 rounded-xl border border-white/5"
              >
                <div className="flex gap-3 items-center min-w-0">
                  <div className="flex-none w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <Clock className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <span className="text-sm text-white/70 font-medium truncate">
                        Comprobante de pago — Tigo
                      </span>
                      <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[10px] text-yellow-400 font-medium shrink-0"
                      >
                        Procesando...
                      </motion.span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5">
                      <FileDigit className="w-3 h-3 text-slate-600" />
                      Recibo_Tigo_Mar2026.pdf
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email Row 3 — Already done */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="bg-slate-800/20 p-3.5 rounded-xl border border-white/5 hidden sm:block"
              >
                <div className="flex gap-3 items-center min-w-0">
                  <div className="flex-none w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <span className="text-sm text-white/50 font-medium truncate">
                        Recibo servicios — EPM
                      </span>
                      <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30 shrink-0">
                        Listo
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5">
                      <FileDigit className="w-3 h-3 text-slate-600" />
                      Factura_EPM_Feb2026.pdf
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sparkles divider */}
              <div className="flex justify-center py-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                </motion.div>
              </div>

              {/* Parsed Result Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
                className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-emerald-500/10 blur-2xl rounded-full" />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Extracción Exitosa
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30">
                    Registrado
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-0.5">
                      Proveedor
                    </span>
                    <span className="text-sm text-white font-medium">
                      XYZ Corp
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-0.5">
                      Total
                    </span>
                    <span className="text-sm text-white font-medium">
                      $2.340.000
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-500 block uppercase tracking-tight mb-0.5">
                      Fecha
                    </span>
                    <span className="text-sm text-white font-medium">
                      15 Mar 2026
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[10px] text-emerald-500/70 block uppercase tracking-tight mb-0.5">
                      Estado
                    </span>
                    <span className="text-sm text-emerald-400 font-bold">
                      Registrado
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mt-2 px-1 min-w-0"
              >
                <span className="flex items-center gap-1.5">
                  <FileDigit className="w-3.5 h-3.5" />
                  +3 registros hoy
                </span>
                <span className="text-emerald-400">
                  Consolidado actualizado
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
