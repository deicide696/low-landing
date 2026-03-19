import AgentLandingTemplate from "../components/AgentLandingTemplate";
import { Brain, HeartPulse, LineChart, MessageCircle } from "lucide-react";

export default function TalamaPage() {
    return (
        <AgentLandingTemplate
            name="Talama"
            role="Asistente de Psicología Terapéutica"
            description="Asistente inteligente diseñado exclusivamente para terapeutas. Analiza patrones de comportamiento a partir de notas de sesión y ayuda a estructurar planes de intervención más efectivos."
            status="Próximamente"
            accentColor="rose"
            icon={Brain}
            features={[
                {
                    name: "Análisis de Patrones",
                    description: "Identifica temas recurrentes, palabras clave y cambios en el estado de ánimo a través de tus notas clínicas anónimas.",
                    icon: LineChart,
                },
                {
                    name: "Sugerencias de Intervención",
                    description: "Propone ejercicios respaldados por evidencia (e.g. TCC, DBT) basados en los síntomas detectados en la evolución del paciente.",
                    icon: HeartPulse,
                },
                {
                    name: "Estructuración de Sesiones",
                    description: "Te ayuda a preparar la próxima consulta resumiendo los puntos clave abordados y las tareas pendientes.",
                    icon: MessageCircle,
                },
            ]}
            steps={[
                {
                    name: "1. Registra tu sesión (anonimizada)",
                    description: "Sube tus notas o dicta un resumen sin datos personales identificables cumpliendo con los estándares de privacidad.",
                },
                {
                    name: "2. Procesamiento cognitivo",
                    description: "Talama extrae los marcadores emocionales y conductuales más relevantes del paciente.",
                },
                {
                    name: "3. Plan de acción",
                    description: "Obtén un resumen estructurado y recomendaciones de abordaje terapéutico para revisar antes de la próxima cita.",
                },
            ]}
        />
    );
}
