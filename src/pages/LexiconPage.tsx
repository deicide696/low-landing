import AgentLandingTemplate from "../components/AgentLandingTemplate";
import { Scale, FileSearch, BookOpen, Clock } from "lucide-react";

export default function LexiconPage() {
    return (
        <AgentLandingTemplate
            name="Lexicon"
            role="Analista de Derecho Comercial"
            description="Soporte avanzado de derecho comercial diseñado para profesionales legales. Analiza precedentes, extrae cláusulas clave de regulaciones y acelera la redacción de contratos complejos."
            status="Próximamente"
            accentColor="indigo"
            icon={Scale}
            features={[
                {
                    name: "Búsqueda de Precedentes",
                    description: "Encuentra sentencias y casos relevantes en segundos, filtrando por jurisdicción, tema y resultado específico.",
                    icon: FileSearch,
                },
                {
                    name: "Análisis Regulatorio",
                    description: "Interpreta y resume nuevas regulaciones comerciales, destacando los impactos directos para tus clientes corporativos.",
                    icon: BookOpen,
                },
                {
                    name: "Revisión de Contratos",
                    description: "Escanea borradores en busca de cláusulas abusivas, omisiones legales o lenguaje ambiguo que pueda generar riesgos.",
                    icon: Clock,
                },
            ]}
            steps={[
                {
                    name: "1. Ingresa tu consulta legal",
                    description: "Plantea el escenario, la duda regulatoria o sube un borrador de contrato para su revisión.",
                },
                {
                    name: "2. Análisis profundo",
                    description: "Lexicon escanea bases de datos legales buscando jurisprudencia y normativa aplicable al caso específico.",
                },
                {
                    name: "3. Reporte estructurado",
                    description: "Recibe un memorando o resumen de riesgos con citas precisas, listo para ser utilizado en tu argumentación o negociación.",
                },
            ]}
        />
    );
}
