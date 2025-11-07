import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";

const ServicioSublimacion = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sublimación
              <span className="block text-secondary mt-2">Full Color HD</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Impresión fotográfica de máxima calidad integrada en la fibra del tejido
            </p>
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Presupuesto
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                ¿Qué es la Sublimación?
              </h2>
              <p className="text-muted-foreground mb-4">
                La sublimación es un proceso de impresión donde la tinta se transforma de estado sólido a gaseoso mediante calor, integrándose directamente en las fibras del tejido de poliéster.
              </p>
              <p className="text-muted-foreground mb-6">
                A diferencia de otras técnicas que aplican la tinta sobre el tejido, la sublimación la integra dentro de él, consiguiendo colores ultra brillantes, diseños fotográficos de alta definición y una durabilidad excepcional sin relieve ni textura.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Colores ultra brillantes y saturados</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Calidad fotográfica HD sin píxeles visibles</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Totalmente integrada en la tela, sin relieve</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Resistencia permanente, no se agrieta ni despega</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-secondary/20 to-primary/20 h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground text-center px-8">
                [Imagen de producto sublimado con diseño fotográfico]
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de la Sublimación
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Colores Vibrantes</h3>
                  <p className="text-muted-foreground">
                    Reproduce una gama cromática amplísima con colores intensos, brillantes y saturados imposibles de conseguir con otras técnicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Tacto Natural</h3>
                  <p className="text-muted-foreground">
                    Al integrarse en la fibra, no añade peso ni cambia la textura del tejido. La prenda mantiene su tacto original.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Sin Limitaciones</h3>
                  <p className="text-muted-foreground">
                    Perfecta para diseños complejos, gradientes, fotografías y estampados que cubran toda la superficie de la prenda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Info */}
          <div className="bg-muted rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Información Técnica
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-3">Tejidos Compatibles</h3>
                <p className="text-muted-foreground mb-4">
                  La sublimación requiere tejidos con alto contenido en poliéster (mínimo 65%). Cuanto mayor sea el porcentaje de poliéster, más vibrantes serán los colores.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Poliéster 100%: Colores al máximo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Mezclas con poliéster 65-80%: Muy buena calidad</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Tejidos técnicos deportivos: Resultado óptimo</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Colores de Base</h3>
                <p className="text-muted-foreground mb-4">
                  La sublimación funciona mejor sobre prendas de color blanco o muy claro. Los colores oscuros no son recomendables ya que la tinta es semitransparente.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Blanco: Resultado perfecto</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Colores claros: Muy buena opción</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Colores oscuros: No recomendado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Aplicaciones Ideales
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Ropa Deportiva</h3>
                <p className="text-muted-foreground">
                  Maillots de ciclismo, camisetas de running, equipaciones deportivas completas con diseños personalizados.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Moda y Diseño</h3>
                <p className="text-muted-foreground">
                  Colecciones de moda con estampados fotográficos, diseños artísticos all-over, prendas únicas de autor.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Productos Promocionales</h3>
                <p className="text-muted-foreground">
                  Camisetas técnicas para eventos deportivos, merchandising de marcas, ediciones limitadas con foto HD.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Regalos Personalizados</h3>
                <p className="text-muted-foreground">
                  Prendas con fotografías familiares, ilustraciones personalizadas, diseños únicos para ocasiones especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Convierte tus Diseños en Realidad HD
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Solicita información sobre sublimación para tu proyecto. Te asesoramos sin compromiso
          </p>
          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light">
              <Phone className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicioSublimacion;
