import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, Sparkles } from "lucide-react";

export default function HomeCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
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
          origen: "Home: Formulario de contacto",
          nombre: formData.name,
          correo: formData.email,
          telefono: formData.phone,
          mensaje: formData.message,
          _replyto: formData.email,
          _subject: `Nuevo contacto desde Low — ${formData.name}`,
        }),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 sm:px-16 sm:py-24"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-gradient-to-b from-blue-500/15 to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-emerald-500/10 to-transparent blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl text-balance">
                Hablemos sobre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  tu próximo agente
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 text-balance">
                Cuéntanos qué procesos quieres automatizar y te ayudamos a encontrar
                la solución perfecta para tu negocio.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Respuesta en menos de 24 horas
                </span>
                <span className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Sin compromiso ni letra pequeña
                </span>
                <span className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ventas@flowlow.co
                </span>
              </div>
            </div>

            {/* Right — Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              {isSuccess ? (
                <div className="text-center py-12 px-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-400">
                    Nos pondremos en contacto contigo muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-semibold text-white">Escríbenos</span>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    className="w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm placeholder:text-slate-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    className="w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm placeholder:text-slate-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Celular (WhatsApp)"
                    className="w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm placeholder:text-slate-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <textarea
                    placeholder="¿Qué proceso quieres automatizar?"
                    rows={3}
                    className="w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm placeholder:text-slate-500 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-gray-100 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
