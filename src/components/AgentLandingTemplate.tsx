import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

interface AgentFeature {
    name: string;
    description: string;
    icon: React.ElementType;
}

interface AgentStep {
    name: string;
    description: string;
}

interface AgentLandingTemplateProps {
    name: string;
    role: string;
    description: string;
    status: "Próximamente" | "Disponible";
    accentColor: "blue" | "emerald" | "amber" | "rose" | "indigo" | "purple";
    icon: React.ElementType;
    features: AgentFeature[];
    steps: AgentStep[];
}

const colorMap = {
    blue: {
        text: "text-blue-400",
        bg: "bg-blue-500",
        bgMuted: "bg-blue-500/10",
        border: "border-blue-500/20",
        gradient: "from-blue-400 to-indigo-400",
        glow: "bg-blue-500/20",
    },
    emerald: {
        text: "text-emerald-400",
        bg: "bg-emerald-500",
        bgMuted: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        gradient: "from-emerald-400 to-teal-400",
        glow: "bg-emerald-500/20",
    },
    amber: {
        text: "text-amber-400",
        bg: "bg-amber-500",
        bgMuted: "bg-amber-500/10",
        border: "border-amber-500/20",
        gradient: "from-amber-400 to-orange-400",
        glow: "bg-amber-500/20",
    },
    rose: {
        text: "text-rose-400",
        bg: "bg-rose-500",
        bgMuted: "bg-rose-500/10",
        border: "border-rose-500/20",
        gradient: "from-rose-400 to-pink-400",
        glow: "bg-rose-500/20",
    },
    indigo: {
        text: "text-indigo-400",
        bg: "bg-indigo-500",
        bgMuted: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        gradient: "from-indigo-400 to-violet-400",
        glow: "bg-indigo-500/20",
    },
    purple: {
        text: "text-purple-400",
        bg: "bg-purple-500",
        bgMuted: "bg-purple-500/10",
        border: "border-purple-500/20",
        gradient: "from-purple-400 to-fuchsia-400",
        glow: "bg-purple-500/20",
    }
};

export default function AgentLandingTemplate({
    name,
    role,
    description,
    status,
    accentColor,
    icon: MainIcon,
    features,
    steps
}: AgentLandingTemplateProps) {
    const colors = colorMap[accentColor];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <PageTransition>
            <div className="min-h-screen w-full max-w-full bg-slate-50 font-sans overflow-x-hidden">
                <Navbar onOpenDemo={() => { }} />

                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 pb-28 sm:pb-32 lg:pb-24 lg:min-h-screen lg:flex lg:items-center lg:px-8">
                    <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b ${colors.glow} to-transparent blur-3xl rounded-full opacity-50`} />

                    <div className="relative mx-auto max-w-7xl w-full flex flex-col items-center text-center lg:pt-16">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl flex flex-col items-center">

                            <motion.div variants={itemVariants} className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bgMuted} border ${colors.border} ${colors.text} text-sm font-medium mb-8`}>
                                <span className={`flex h-2 w-2 rounded-full ${colors.bg} ${status === "Próximamente" ? "" : "animate-pulse"}`} />
                                {status}
                            </motion.div>

                            <motion.div variants={itemVariants} className={`w-20 h-20 rounded-2xl ${colors.bgMuted} border ${colors.border} flex items-center justify-center mb-8`}>
                                <MainIcon className={`w-10 h-10 ${colors.text}`} />
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                                {name}. <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>{role}</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="mt-6 text-lg tracking-tight sm:text-xl leading-relaxed text-slate-300 max-w-2xl">
                                {description}
                            </motion.p>

                            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <button className={`group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto`}>
                                    {status === "Próximamente" ? "Unirse a la lista de espera" : "Solicitar demo gratis"}
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* FEATURES SECTION */}
                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center shrink-0">
                            <h2 className={`text-base font-semibold leading-7 ${colors.text} uppercase tracking-wide`}>
                                Capacidades Core
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance">
                                Diseñado para expertos
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                {features.map((feature, index) => (
                                    <motion.div key={feature.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col group">
                                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors.bgMuted} ${colors.text} transition-all duration-200 group-hover:${colors.bg} group-hover:text-white`}>
                                                <feature.icon className="h-5 w-5" />
                                            </span>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                            <p className="flex-auto text-balance">{feature.description}</p>
                                        </dd>
                                    </motion.div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS SECTION */}
                <section className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${colors.glow} rounded-full blur-3xl opacity-20`} />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                                Cómo funciona {name}
                            </h2>
                        </div>
                        <div className="mx-auto mt-16 max-w-4xl sm:mt-24 border-l-2 border-slate-200 pl-8 space-y-12">
                            {steps.map((step, index) => (
                                <motion.div key={step.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.15 }} className="relative">
                                    <div className={`absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-slate-200`}>
                                        <CheckCircle2 className={`h-5 w-5 ${colors.text}`} />
                                    </div>
                                    <h3 className="text-xl font-semibold leading-7 text-slate-900">{step.name}</h3>
                                    <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </PageTransition>
    );
}
