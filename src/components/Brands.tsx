import { Leaf, Apple, Cloud, Squirrel, Mountain, Fingerprint, Layers, Music, Feather, Brain, Heart, Coffee } from "lucide-react";

const Brands = () => {
  const brands = [
    { icon: Leaf, name: "Brand 1" },
    { icon: Apple, name: "Brand 2" },
    { icon: Cloud, name: "Brand 3" },
    { icon: Squirrel, name: "Brand 4" },
    { icon: Mountain, name: "Brand 5" },
    { icon: Fingerprint, name: "Brand 6" },
    { icon: Layers, name: "Brand 7" },
    { icon: Music, name: "Brand 8" },
    { icon: Feather, name: "Brand 9" },
    { icon: Brain, name: "Brand 10" },
    { icon: Heart, name: "Brand 11" },
    { icon: Coffee, name: "Brand 12" },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Brands I've Worked</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Things that I can do for my clients. Just make your good trust I love to
            provide quality works.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <brand.icon className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
