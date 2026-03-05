import { motion, Variants } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, FileDigit, Mail } from "lucide-react";

export default function Hero() {
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
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8 min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl rounded-full opacity-50" />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Auxiliar Administrativo AI
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Tu negocio al día, sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">vivir pegado al correo.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-lg tracking-tight sm:text-xl leading-relaxed text-slate-300">
            Un auxiliar administrativo invisible que captura facturas y pagos automáticamente por ti. Disfruta un tablero claro, ahorra horas cada semana y despídete del caos de fin de mes. <strong>Modelo "pay-and-go", sin proyectos largos.</strong>
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Empezar ahora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5 border border-white/10">
              Ver cómo funciona
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs">
                  {i === 3 ? "PY" : "PE"}
                </div>
              ))}
            </div>
            <p>Diseñado para <span className="text-white font-medium">PYMEs y Agencias</span></p>
          </motion.div>
        </motion.div>

        {/* Visual / Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative lg:h-[600px] flex items-center"
        >
          <div className="relative w-full lg:h-[90%] glass-dark rounded-2xl p-6 shadow-2xl overflow-hidden shadow-black/50">
            {/* Window header */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs text-slate-500 font-medium tracking-wide">CAJA DE ENTRADA & REGISTRO</div>
            </div>

            <div className="space-y-4">
              {/* Fake Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="bg-slate-800/50 p-4 rounded-xl border border-white/5 relative"
              >
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-sm text-white font-medium">Factura Proveedor IT #992</div>
                    <div className="text-xs text-slate-400 mt-1">Adjunto: F-992.pdf</div>
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
                  <Box className="w-6 h-6 text-slate-600 animate-pulse" />
                </motion.div>
              </div>

              {/* Parsed Result */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="w-full">
                    <div className="text-sm text-emerald-400 font-medium">Datos capturados y registrados</div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-500 block">Emisor</span>
                        <span className="text-slate-300 font-medium">Tech Solutions SAC</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Total</span>
                        <span className="text-slate-300 font-medium">$ 450.00</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Fecha</span>
                        <span className="text-slate-300 font-medium">29 Oct 2023</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Estado</span>
                        <span className="inline-flex px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500">Pendiente</span>
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
                className="flex items-center justify-between text-xs text-slate-400 mt-4 px-2"
              >
                <span className="flex items-center gap-1.5"><FileDigit className="w-4 h-4" /> Consolidado Sheet</span>
                <span className="text-emerald-400">+1 Registro actualizado</span>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
