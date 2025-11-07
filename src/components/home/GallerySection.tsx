import { useState } from "react";
import { X } from "lucide-react";
import dtfHoodie from "@/assets/gallery/dtf-hoodie.jpg";
import embroideryPolo from "@/assets/gallery/embroidery-polo.jpg";
import sublimationTshirt from "@/assets/gallery/sublimation-tshirt.jpg";
import dtfSweatshirt from "@/assets/gallery/dtf-sweatshirt.jpg";
import embroideryCap from "@/assets/gallery/embroidery-cap.jpg";
import sublimationJersey from "@/assets/gallery/sublimation-jersey.jpg";
import { Badge } from "@/components/ui/badge";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: "DTF" | "Bordados" | "Sublimación";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: dtfHoodie,
    title: "Sudadera con diseño DTF vibrante",
    category: "DTF",
  },
  {
    id: 2,
    image: embroideryPolo,
    title: "Polo con bordado corporativo",
    category: "Bordados",
  },
  {
    id: 3,
    image: sublimationTshirt,
    title: "Camiseta con sublimación fotorrealista",
    category: "Sublimación",
  },
  {
    id: 4,
    image: dtfSweatshirt,
    title: "Sudadera con impresión DTF detallada",
    category: "DTF",
  },
  {
    id: 5,
    image: embroideryCap,
    title: "Gorra con bordado premium",
    category: "Bordados",
  },
  {
    id: 6,
    image: sublimationJersey,
    title: "Camiseta deportiva sublimada",
    category: "Sublimación",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", "DTF", "Bordados", "Sublimación"];

  const filteredItems =
    filter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Trabajos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Descubre la calidad y el detalle de nuestros proyectos completados.
            Cada trabajo refleja nuestro compromiso con la excelencia.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 rounded-b-lg">
              <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30">
                {selectedImage.category}
              </Badge>
              <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
