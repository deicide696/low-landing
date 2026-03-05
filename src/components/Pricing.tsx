import { useState } from "react";
import { Check, Sparkles, Workflow, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [formData, setFormData] = useState({ name: "", company: "", needs: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitud Custom Automation - ${formData.company}`);
    const body = encodeURIComponent(`Hola Camilo,\n\nSoy ${formData.name} de ${formData.company}.\n\nNecesitamos ayuda con lo siguiente:\n${formData.needs}\n\nQuedamos atentos a los próximos pasos.`);
    window.location.href = `mailto:camilo@flowlow.co?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-slate-50 py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 tracking-wide uppercase">Planes y Precios</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Soluciones a tu medida
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Escoge entre nuestro producto empaquetado y listo para usar, o cuéntanos qué proceso específico necesitas automatizar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

          {/* Pre-build Plan */}
          <div className="flex flex-col justify-between rounded-3xl ring-1 ring-slate-200 bg-white p-8 xl:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -m-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                  Pre-build (Email Extractor)
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Paquete estándar para extraer y registrar datos de facturas y pagos automáticamente de tus correos. Rápido y sin implementación.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">$240.000</span>
                <span className="text-sm font-semibold leading-6 text-slate-600">COP / mes</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                {[
                  "Hasta 200 correos procesados/mes",
                  "Lectura de comprobantes de pago",
                  "Lectura de facturas y adjuntos",
                  "Registro directo a tu Dashboard/Sheet",
                  "Ajustes de reglas estándar"
                ].map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-blue-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              className="mt-8 block rounded-xl bg-slate-900 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all font-medium"
            >
              Empezar ahora
            </a>
          </div>

          {/* Custom Automation Plan */}
          <div className="flex flex-col justify-between rounded-3xl ring-1 ring-slate-800 bg-slate-950 p-8 xl:p-10 shadow-2xl glass-dark relative">
            <div className="absolute top-0 right-0 -m-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-emerald-400" />
                  Custom Automation (Agile)
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Soluciones personalizadas con alcance cerrado en <em>sprints</em> de menos de 3 meses. Precio fijo sin sorpresas ni proyectos eternos.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-lg border-0 bg-white/10 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6 placeholder:text-slate-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="sr-only">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="Empresa"
                      className="w-full rounded-lg border-0 bg-white/10 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6 placeholder:text-slate-400"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="needs" className="sr-only">¿Qué proceso necesitas automatizar?</label>
                  <textarea
                    id="needs"
                    rows={3}
                    required
                    placeholder="¿Qué proceso repetitivo te quita más tiempo hoy?"
                    className="w-full rounded-lg border-0 bg-white/10 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6 placeholder:text-slate-400 resize-none"
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all font-medium"
                >
                  Enviar solicitud a Camilo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
