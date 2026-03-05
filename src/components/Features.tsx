import { motion } from "framer-motion";

const features = [
  {
    name: "Cero cierres de mes caóticos.",
    description: "Captura facturas y comprobantes en tiempo real automáticamente, para que no pierdas tiempo ni información cuando más importa.",
  },
  {
    name: "Extracción sin errores manuales.",
    description: "La IA analiza los PDFs y correos para extraer proveedor, fecha, monto, concepto y estado de pago sin copiar ni pegar una sola línea.",
  },
  {
    name: "Certeza absoluta de saldos.",
    description: "Siempre sabrás exactamente qué cuentas tienes por pagar y qué ya fue liquidado. Mantén la prioridad en tiempo real.",
  },
  {
    name: "Trazabilidad completa.",
    description: "Si alguien tiene una duda sobre un pago o una factura, rastrea inmediatamente el correo y el registro original en un solo lugar.",
  },
  {
    name: "No contrates personal extra.",
    description: "Un 'auxiliar digital' muy barato que procesa hasta 200 correos al mes por ti. Delega las tareas repetitivas y libera el talento humano.",
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:text-center shrink-0">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">
            Potencia tu Crecimiento
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance">
            Libera a tu equipo del trabajo operativo
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 text-balance">
            Si tu equipo gasta horas procesando facturas y comprobantes manualmente, estás perdiendo dinero. Nuestra IA elimina el error humano y devuelve el enfoque a lo que realmente importa.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col group"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto text-balance">{feature.description}</p>
                </dd>
              </motion.div>
            ))}

            {/* Sixth Block tailored to "Agile / No Project" value prop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 5 * 0.1 }}
              className="flex flex-col group p-6 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/30 text-emerald-300 font-bold text-sm">
                  06
                </span>
                Estandariza sin un "Proyecto"
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm leading-6 text-slate-300">
                <p className="flex-auto">
                  La automatización no debe ser larga ni requerir consultoría infinita. En <em>Low</em> defines reglas simples y haces ajustes rápidos, todo bajo un modelo estándar que empieza a funcionar desde el día uno.
                </p>
              </dd>
            </motion.div>

          </dl>
        </div>
      </div>
    </section>
  )
}
