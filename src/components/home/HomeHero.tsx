import { motion, Variants } from "framer-motion";
import { ArrowRight, Bot, Cpu, BrainCircuit, Workflow, Sparkles } from "lucide-react";

export default function HomeHero() {
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

  const floatingIcons = [
    { Icon: Bot, delay: 0.8, x: "10%", y: "20%" },
    { Icon: Cpu, delay: 1.2, x: "75%", y: "15%" },
    { Icon: BrainCircuit, delay: 1.0, x: "85%", y: "55%" },
    { Icon: Workflow, delay: 1.4, x: "15%", y: "65%" },
    { Icon: Sparkles, delay: 0.6, x: "50%", y: "10%" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:min-h-screen lg:flex lg:items-center lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-emerald-500/10 to-transparent blur-3xl rounded-full opacity-40" />

      {/* Floating icons (desktop only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay, duration: 0.6, type: "spring" }}
            className="absolute"
            style={{ left: x, top: y }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="w-10 h-10 text-blue-400" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Legion of Workers
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Agentes de IA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Personalizados
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto text-balance"
          >
            Creamos agentes de inteligencia artificial que automatizan los
            procesos más tediosos de tu empresa.{" "}
            <strong className="text-white">
              Sin proyectos largos, sin complejidad innecesaria.
            </strong>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#productos"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Ver nuestros productos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5 border border-white/10"
            >
              Contactar
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-400"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Modelo pay-and-go
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sin consultoría infinita
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Resultados desde el día 1
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
