import AgentLandingTemplate from "../components/AgentLandingTemplate";
import { Flame, Database, Shield, Layout } from "lucide-react";

export default function SmokeyPage() {
    return (
        <AgentLandingTemplate
            name="Smokey"
            role="Especialista en Protección Contra Incendios"
            description="Asistente experto de diseño de sistemas de protección contra incendios. Creado específicamente para ingenieros industriales que buscan precisión, cumplimiento normativo y velocidad en sus proyectos."
            status="Próximamente"
            accentColor="amber"
            icon={Flame}
            features={[
                {
                    name: "Análisis Normativo Automatizado",
                    description: "Cruza instantáneamente tus planos con las normativas locales e internacionales (NFPA, etc.) para garantizar un cumplimiento total.",
                    icon: Shield,
                },
                {
                    name: "Cálculos Hidráulicos",
                    description: "Realiza simulaciones de presión y flujo en segundos, identificando cuellos de botella y optimizando el diámetro de las tuberías.",
                    icon: Database,
                },
                {
                    name: "Sugerencias de Distribución",
                    description: "Propone automáticamente la ubicación óptima de rociadores y extintores basándose en la carga de fuego y la geometría del espacio.",
                    icon: Layout,
                },
            ]}
            steps={[
                {
                    name: "1. Sube tus planos",
                    description: "Carga tus layouts industriales en formato PDF o CAD. Smokey analizará las áreas y clasificaciones de riesgo.",
                },
                {
                    name: "2. Define los parámetros",
                    description: "Establece los requisitos específicos del cliente y la normativa aplicable a la región del proyecto.",
                },
                {
                    name: "3. Obtén el prediseño",
                    description: "Recibe un esquema detallado con cálculos iniciales, listo para ser revisado y aprobado por un ingeniero certificado.",
                },
            ]}
        />
    );
}
