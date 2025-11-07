import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    category: "pedidos",
    questions: [
      {
        question: "¿Cómo puedo hacer un pedido?",
        answer:
          "Puedes hacer tu pedido contactándonos directamente por WhatsApp, teléfono o email. Te asesoraremos sobre el mejor método de personalización para tu proyecto y te enviaremos un presupuesto sin compromiso. También puedes visitarnos en nuestro taller.",
      },
      {
        question: "¿Cuál es el pedido mínimo?",
        answer:
          "No tenemos pedido mínimo. Trabajamos tanto pedidos unitarios como grandes volúmenes. Cada proyecto es importante para nosotros, independientemente de su tamaño.",
      },
      {
        question: "¿Puedo enviar mi propio diseño?",
        answer:
          "¡Por supuesto! Aceptamos diseños en formato vectorial (AI, EPS, PDF) o alta resolución (PNG, JPG). Si no tienes diseño, nuestro equipo puede ayudarte a crearlo sin coste adicional en la mayoría de casos.",
      },
      {
        question: "¿Ofrecéis servicio de recogida y entrega?",
        answer:
          "Sí, trabajamos con servicios de mensajería para toda España. Los gastos de envío dependen del destino y volumen del pedido. Para pedidos grandes, podemos ofrecer envío gratuito.",
      },
    ],
  },
  {
    category: "plazos",
    questions: [
      {
        question: "¿Cuánto tarda un pedido?",
        answer:
          "El plazo estándar es de 3-5 días laborables desde la aprobación del diseño. Para pedidos urgentes, ofrecemos servicio express de 24-48 horas con un pequeño suplemento. Los plazos pueden variar según la técnica y volumen del pedido.",
      },
      {
        question: "¿Tenéis servicio urgente?",
        answer:
          "Sí, ofrecemos servicio express de 24-48 horas para la mayoría de trabajos. Consúltanos disponibilidad y presupuesto. Siempre intentamos adaptarnos a tus necesidades.",
      },
      {
        question: "¿Cuándo debo aprobar el diseño?",
        answer:
          "Te enviaremos una prueba digital del diseño para tu aprobación antes de comenzar la producción. El plazo de entrega comienza una vez apruebes el diseño final. Es importante que revises cuidadosamente los detalles antes de aprobar.",
      },
      {
        question: "¿Puedo hacer cambios después de aprobar?",
        answer:
          "Una vez iniciada la producción, los cambios pueden generar costes adicionales y retrasar la entrega. Por eso es fundamental revisar bien el diseño antes de aprobar. Si necesitas modificaciones, contacta cuanto antes con nosotros.",
      },
    ],
  },
  {
    category: "precios",
    questions: [
      {
        question: "¿Cómo se calculan los precios?",
        answer:
          "El precio depende de varios factores: técnica de personalización, tamaño del diseño, número de colores, cantidad de prendas y tipo de prenda. Te enviamos siempre un presupuesto detallado y sin compromiso antes de empezar.",
      },
      {
        question: "¿Hacéis descuentos por volumen?",
        answer:
          "Sí, ofrecemos precios especiales para pedidos grandes. Cuanto mayor sea la cantidad, mejor precio por unidad conseguirás. Consúltanos para pedidos a partir de 50 unidades y te haremos una oferta personalizada.",
      },
      {
        question: "¿Incluye el precio las prendas?",
        answer:
          "Podemos trabajar de dos formas: personalizamos tus propias prendas o te suministramos nosotros las prendas con la personalización incluida. En ambos casos te indicamos claramente qué incluye el presupuesto.",
      },
      {
        question: "¿Qué formas de pago aceptáis?",
        answer:
          "Aceptamos transferencia bancaria, Bizum, tarjeta y efectivo. Para pedidos grandes, podemos acordar un pago del 50% al confirmar el pedido y el resto a la entrega. Para empresas, trabajamos también con factura a 30 días previo acuerdo.",
      },
    ],
  },
  {
    category: "técnicas",
    questions: [
      {
        question: "¿Qué técnica es mejor para mi proyecto?",
        answer:
          "Depende de varios factores: tipo de tejido, diseño, cantidad y presupuesto. DTF es ideal para diseños complejos y multicolor. Bordado aporta elegancia y durabilidad para logotipos. Sublimación es perfecta para deportivas y diseños a todo color. Te asesoramos sin compromiso.",
      },
      {
        question: "¿El bordado es resistente?",
        answer:
          "El bordado es la técnica más duradera y resistente. No se deteriora con los lavados y mantiene su aspecto original durante años. Es ideal para uniformes corporativos, ropa de trabajo y prendas de alta calidad.",
      },
      {
        question: "¿La impresión DTF se agrieta o despega?",
        answer:
          "La impresión DTF de calidad es muy resistente y flexible. No se agrieta, pela ni despega si se cuida correctamente. Es importante seguir las instrucciones de lavado: lavar del revés, temperatura máxima 30-40°C, no usar secadora.",
      },
      {
        question: "¿En qué tipo de prendas puedo personalizar?",
        answer:
          "Trabajamos con todo tipo de prendas: camisetas, sudaderas, polos, gorras, chaquetas, textil deportivo, ropa de trabajo, toallas, bolsas... Cada técnica tiene sus particularidades. Consúltanos tu proyecto y te indicaremos la mejor opción.",
      },
    ],
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resuelve tus dudas sobre nuestros servicios, plazos y procesos.
            Si no encuentras lo que buscas, contáctanos directamente.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="pedidos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
              <TabsTrigger value="pedidos" className="text-base py-4">
                Pedidos
              </TabsTrigger>
              <TabsTrigger value="plazos" className="text-base py-4">
                Plazos
              </TabsTrigger>
              <TabsTrigger value="precios" className="text-base py-4">
                Precios
              </TabsTrigger>
              <TabsTrigger value="técnicas" className="text-base py-4">
                Técnicas
              </TabsTrigger>
            </TabsList>

            {faqData.map((category) => (
              <TabsContent
                key={category.category}
                value={category.category}
                className="animate-fade-in"
              >
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white mb-4 rounded-lg border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
