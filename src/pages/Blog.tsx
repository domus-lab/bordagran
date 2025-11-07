import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "DTF vs Serigrafía: ¿Cuál elegir para tu proyecto?",
      excerpt: "Comparamos las dos técnicas más populares de personalización textil. Descubre cuál se adapta mejor a tus necesidades.",
      date: "15 de Marzo, 2024",
      category: "Guías",
      readTime: "5 min",
    },
    {
      title: "Cómo preparar tu logo para bordar",
      excerpt: "Consejos profesionales para que tu diseño quede perfecto en bordado. Formatos, colores y resoluciones recomendadas.",
      date: "8 de Marzo, 2024",
      category: "Tutoriales",
      readTime: "4 min",
    },
    {
      title: "Tendencias en personalización textil 2024",
      excerpt: "Las técnicas, colores y estilos que marcarán tendencia este año en uniformes corporativos y merchandising.",
      date: "1 de Marzo, 2024",
      category: "Tendencias",
      readTime: "6 min",
    },
    {
      title: "Guía completa: Elegir la prenda perfecta",
      excerpt: "No todas las prendas son iguales. Te ayudamos a seleccionar el tejido ideal según tu proyecto y presupuesto.",
      date: "22 de Febrero, 2024",
      category: "Guías",
      readTime: "7 min",
    },
    {
      title: "Cuidados de prendas personalizadas",
      excerpt: "Cómo lavar y mantener tus prendas personalizadas para que duren años en perfecto estado.",
      date: "15 de Febrero, 2024",
      category: "Consejos",
      readTime: "4 min",
    },
    {
      title: "Sublimación: Mitos y realidades",
      excerpt: "Desmontamos los mitos más comunes sobre la sublimación y te contamos todo lo que necesitas saber.",
      date: "8 de Febrero, 2024",
      category: "Guías",
      readTime: "5 min",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog y Recursos
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Guías, consejos y novedades sobre personalización textil
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover-lift shadow-medium border-none overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <Button variant="ghost" size="sm">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Cargar más artículos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Suscríbete a Nuestro Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Recibe consejos, guías y ofertas exclusivas directamente en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button size="lg" className="bg-secondary hover:bg-secondary-light">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
