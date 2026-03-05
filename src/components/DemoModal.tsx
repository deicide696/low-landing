import { useState } from "react";
import { X, ArrowRight, Loader2, CheckCircle2, Sparkles } from "lucide-react";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    source: string;
}

export default function DemoModal({ isOpen, onClose, source }: DemoModalProps) {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/maqpwngz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    plan: "Demo gratuito 30 días",
                    origen: source,
                    nombre: formData.name,
                    correo: formData.email,
                    telefono: formData.phone,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", phone: "" });
                setTimeout(() => {
                    setIsSuccess(false);
                    onClose();
                }, 3000);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200 animate-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>

                {isSuccess ? (
                    <div className="text-center py-8">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mb-4">
                            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Listo!</h3>
                        <p className="text-slate-600">
                            Nos pondremos en contacto contigo muy pronto para activar tu demo.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="text-center mb-6">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                                <Sparkles className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                                Prueba gratis por 30 días
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Déjanos tus datos y activamos tu demo sin costo ni compromiso.
                            </p>
                        </div>

                        {/* Highlight */}
                        <div className="flex items-center gap-3 rounded-xl bg-blue-50 border border-blue-100 p-3 mb-6">
                            <span className="text-2xl">🚀</span>
                            <div className="text-sm">
                                <span className="font-semibold text-blue-900">30 días gratis.</span>{" "}
                                <span className="text-blue-700">Sin tarjeta de crédito. Sin compromiso.</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="demo-name" className="sr-only">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="demo-name"
                                    required
                                    placeholder="Tu nombre completo"
                                    className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm placeholder:text-slate-400"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="demo-email" className="sr-only">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="demo-email"
                                    required
                                    placeholder="Tu correo electrónico"
                                    className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm placeholder:text-slate-400"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="demo-phone" className="sr-only">
                                    Celular / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    id="demo-phone"
                                    required
                                    placeholder="Celular (WhatsApp)"
                                    className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm placeholder:text-slate-400"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Solicitar mi demo gratis
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="mt-4 text-center text-xs text-slate-400">
                            Te contactaremos por WhatsApp para activar tu cuenta.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
