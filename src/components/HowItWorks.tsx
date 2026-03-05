import { motion } from "framer-motion";
import { MailSearch, FileText, LayoutGrid, BellRing } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      name: "Detecta facturas o pagos",
      description: "La IA monitorea tu bandeja de entrada identificando automáticamente qué correos tienen la información relevante (y descarta la basura).",
      icon: MailSearch,
    },
    {
      id: 2,
      name: "Abre adjuntos y entiende",
      description: "Lee los PDFs, imágenes o el cuerpo del correo, y extrae los datos clave: proveedor, total, fecha e ID de factura.",
      icon: FileText,
    },
    {
      id: 3,
      name: "Clasifica y registra",
      description: "Cruza la información de caja y anota en tu Google Sheets o Excel si el documento está 'Pendiente' o 'Pagado', manteniendo todo en orden.",
      icon: LayoutGrid,
    },
    {
      id: 4,
      name: "Notifica excepciones",
      description: "Si falta un dato, algo no cuadra, o hay una factura urgente a un proveedor clave, te avisa de inmediato para resolverlo.",
      icon: BellRing,
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Proceso Inteligente</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tu administración en piloto automático
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Nuestro Auxiliar Administrativo se encarga del trabajo sucio para que tú tengas la visibilidad.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl sm:mt-24">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-[31px] bottom-8 w-0.5 bg-gradient-to-b from-blue-600/50 via-blue-600/20 to-transparent hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/25 z-10">
                    <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>

                  <div className="md:pt-2">
                    <h3 className="text-xl font-semibold leading-7 text-slate-900">
                      {step.name}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600 max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
