import AgentLandingTemplate from "../components/AgentLandingTemplate";
import { ShoppingCart, TrendingUp, Search, MousePointerClick } from "lucide-react";

export default function CharliePage() {
    return (
        <AgentLandingTemplate
            name="Charlie"
            role="Estratega de E-commerce"
            description="Tu analista de conversiones 24/7. Optimiza ventas analizando a fondo tus catálogos de productos y destrabando fricciones en los procesos de checkout."
            status="Disponible"
            accentColor="emerald"
            icon={ShoppingCart}
            features={[
                {
                    name: "Auditoría de Catálogo",
                    description: "Analiza descripciones, imágenes y precios para encontrar fricciones o falta de información que impiden la compra.",
                    icon: Search,
                },
                {
                    name: "Optimización de Checkout",
                    description: "Identifica los pasos exactos donde los usuarios abandonan el carrito y sugiere cambios en el UX/UI para recuperar ventas.",
                    icon: MousePointerClick,
                },
                {
                    name: "Predicción de Tendencias",
                    description: "Cruza datos de navegación con patrones de compra para sugerir de forma dinámica qué productos promocionar.",
                    icon: TrendingUp,
                },
            ]}
            steps={[
                {
                    name: "1. Conecta tu tienda",
                    description: "Vincula tu plataforma de e-commerce (Shopify, WooCommerce, etc.) para que Charlie acceda al catálogo y a las analíticas.",
                },
                {
                    name: "2. Diagnóstico profundo",
                    description: "Charlie rastrea las rutas de navegación de tus clientes y evalúa la claridad de tu oferta de valor.",
                },
                {
                    name: "3. Implementa y crece",
                    description: "Recibe un reporte accionable con cambios específicos (e.g. 'Simplifica el paso 2 del pago') y mide el incremento en conversiones.",
                },
            ]}
        />
    );
}
