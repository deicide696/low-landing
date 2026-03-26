import { useState } from "react";
import { Loader2 } from "lucide-react";

interface PricingProps {
  onOpenDemo: (source: string) => void;
}

export default function Pricing({ onOpenDemo }: PricingProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", needs: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/maqpwngz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: "Solución personalizada",
          origen: "Pricing: Formulario Solución Personalizada",
          nombre: formData.name,
          email: formData.email,
          phone: formData.phone,
          necesidad: formData.needs
        }),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", needs: "" });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Inversión Inteligente</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            La automatización que se paga sola
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Recupera tu tiempo y elimina errores. Elige el plan que impulsará el crecimiento de tu negocio.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {/* Tier 1 - Junior (Recomendado) */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-2 ring-blue-600 xl:p-10 shadow-lg shadow-blue-600/10 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Recomendado
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-slate-900">Cleo <span className="text-blue-600 font-bold">Junior</span></h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Ideal para el manejo automático de recibos, facturas y pagos mensuales.
              </p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-slate-900">$ 249.900</span>
                <span className="text-sm font-semibold leading-6 text-slate-600">COP / mes</span>
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <div className="flex items-baseline gap-x-2">
                  <span className="text-sm line-through text-slate-400 font-medium">$ 830.000 COP</span>
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                    -70% Lanzamiento
                  </span>
                </div>
              </div>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                {[
                  "Hasta 200 correos procesados/mes",
                  "Hasta 5 reglas de configuración",
                  "Lectura de facturas y adjuntos",
                  "Lectura de comprobantes de pago",
                  "Validación automática ante la DIAN",
                  "Registro directo a tu Google Sheets o Excel"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3 pl-4 border-l-2 border-blue-500/60">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => onOpenDemo("Pricing: Auxiliar Junior")}
              className="mt-8 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              Solicitar demo gratis
            </button>
          </div>

          {/* Tier 2 - Turbo */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-slate-200 xl:p-10 hover:ring-blue-600 transition-all">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-slate-900">Cleo <span className="text-blue-600 font-bold">Turbo</span> 🚀</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Más volumen, asistencia dedicada e integración API para crecer sin límites.
              </p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-slate-900">$ 498.000</span>
                <span className="text-sm font-semibold leading-6 text-slate-600">COP / mes</span>
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <div className="flex items-baseline gap-x-2">
                  <span className="text-sm line-through text-slate-400 font-medium">$ 1.245.000 COP</span>
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                    -60% Lanzamiento
                  </span>
                </div>
              </div>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                {[
                  "Hasta 1.000 correos procesados/mes",
                  "Hasta 20 reglas de configuración",
                  "Lectura de facturas y adjuntos",
                  "Lectura de comprobantes de pago",
                  "Validación automática ante la DIAN",
                  "Registro directo a tu Google Sheets o Excel",
                  "Dashboards de métricas",
                  "Asistencia telefónica",
                  "Integración vía API"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3 pl-4 border-l-2 border-blue-500/60">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => onOpenDemo("Pricing: Auxiliar Junior Turbo")}
              className="mt-8 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              Solicitar demo gratis
            </button>
          </div>

          {/* Tier 3 */}
          <div className="flex flex-col justify-between rounded-3xl bg-slate-900 p-8 ring-1 ring-slate-700 xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-white">Solución personalizada</h3>
                <p className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-400 ring-1 ring-inset ring-blue-400/20">
                  Business
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Diseñamos un flujo de IA a la medida de los retos específicos de tu negocio.
              </p>
              <div className="mt-6 flex items-baseline gap-x-1 text-white">
                <span className="text-sm font-semibold leading-6">Cotización a medida</span>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-slate-500 font-semibold"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Tu correo"
                      className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-slate-500 font-semibold"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Celular"
                      className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-slate-500 font-semibold"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="¿Qué proceso específico necesitas automatizar?"
                      className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-slate-500 font-semibold resize-none"
                      value={formData.needs}
                      onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      "Solicitar propuesta"
                    )}
                  </button>
                </form>
              ) : (
                <div className="mt-8 p-4 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-emerald-400 text-sm font-medium text-center">
                    ¡Gracias! Te contactaremos pronto.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
