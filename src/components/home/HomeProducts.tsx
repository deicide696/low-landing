import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  Flame,
  Scale,
  Brain,
  ArrowRight,
  CheckCircle2,
  FileDigit,
  Zap,
} from "lucide-react";

const otherProducts = [
  {
    name: "Smokey",
    description:
      "Asistente de diseño de sistemas de protección contra incendios para ingenieros industriales.",
    icon: Flame,
    color: "orange",
  },
  {
    name: "Lexicon",
    description:
      "Soporte de derecho comercial que analiza precedentes y regulaciones para profesionales legales.",
    icon: Scale,
    color: "purple",
  },
  {
    name: "Talama",
    description:
      "Asistente de psicología terapéutica que analiza patrones de comportamiento para terapeutas.",
    icon: Brain,
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  pink: {
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    border: "border-pink-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
};

const cleoFeatures = [
  { icon: Mail, text: "Captura automática de facturas y pagos desde tu correo" },
  { icon: FileDigit, text: "Extracción inteligente de datos desde PDFs y adjuntos" },
  { icon: CheckCircle2, text: "Validación directa y automática de facturas en la DIAN" },
  { icon: Zap, text: "Registro directo a tu Google Sheets o Excel" },
];

export default function HomeProducts() {
  return (
    <section id="productos" className="bg-slate-950 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-emerald-500/5 blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <h2 className="text-base font-semibold leading-7 text-blue-400 uppercase tracking-wide">
            Nuestros Productos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Agentes de IA que trabajan por ti
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400 text-balance">
            Cada producto es un agente especializado en un dominio específico.
            Diseñados para integrarse en tu flujo de trabajo sin fricciones.
          </p>
        </div>

        {/* CLEO — Featured Product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-slate-900/50 to-emerald-500/5 p-8 sm:p-10 overflow-hidden"
        >
          {/* Glow effects */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-emerald-500/10 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <Mail className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Cleo</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Disponible
                    </span>
                  </div>
                  <p className="text-sm text-blue-400 font-medium mt-0.5">Auxiliar Administrativo AI</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-slate-300 mb-8">
                Tu auxiliar administrativo invisible que captura facturas y pagos
                automáticamente desde tu correo, validando cada factura en la DIAN al instante. Despídete del caos de fin de mes
                y recupera horas cada semana.
              </p>

              <ul className="space-y-3 mb-8">
                {cleoFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <div className="flex-none mt-0.5">
                      <feature.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-sm text-slate-300">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/auxiliar-administrativo"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Conocer Cleo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/auxiliar-administrativo#beneficios"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5 border border-white/10"
                >
                  Ver beneficios
                </Link>
              </div>
            </div>

            {/* Right — Mini preview */}
            <div className="hidden lg:block">
              <div className="glass-dark rounded-2xl p-6 border border-white/5 shadow-2xl shadow-black/30">
                {/* Window header */}
                <div className="flex items-center gap-2 mb-5 border-b border-white/5 pb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto text-[11px] text-slate-500 font-medium tracking-wide">CLEO — AUXILIAR ADMINISTRATIVO</div>
                </div>

                {/* Sample extraction */}
                <div className="space-y-3">
                  <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Nuevo correo detectado</p>
                      <p className="text-sm text-white truncate">Factura #2847 — Proveedor ABC</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Zap className="h-5 w-5 text-blue-400 animate-pulse" />
                  </div>

                  <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Extracción exitosa</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[10px] text-slate-500 block uppercase">Proveedor</span>
                        <span className="text-xs text-white font-medium">ABC Corp</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[10px] text-slate-500 block uppercase">Total</span>
                        <span className="text-xs text-white font-medium">$ 1.250.000</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[10px] text-slate-500 block uppercase">Fecha</span>
                        <span className="text-xs text-white font-medium">18 Mar 2026</span>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <span className="text-[10px] text-emerald-500/70 block uppercase">Estado DIAN</span>
                        <span className="text-xs text-emerald-400 font-bold">Validado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Products — Coming Soon */}
        <div>
          <h3 className="text-lg font-semibold text-slate-400 mb-6 text-center uppercase tracking-wide">
            Próximamente
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {otherProducts.map((product, index) => {
              const colors = colorMap[product.color];
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative glass-dark rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <Link to={`/${product.name.toLowerCase()}`} className="block relative focus:outline-none">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg} border ${colors.border}`}
                      >
                        <product.icon className={`h-5 w-5 ${colors.text}`} />
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{product.name}</h4>
                    </div>
                    <p className="text-sm leading-6 text-slate-400 mb-4">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-400 ring-1 ring-inset ring-white/10 group-hover:bg-slate-700 transition-colors">
                      Unirte a lista de espera
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
