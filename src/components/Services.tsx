import { Palette, Smartphone, MonitorPlay } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding Design & Printing",
      description: [
        "Logo designs",
        "Brand Identity",
        "Posters and Flyers",
        "Printing Services",
      ],
    },
    {
      icon: Smartphone,
      title: "Social media mgt",
      description: ["Content creation", "Content calendar & Strategies"],
    },
    {
      icon: MonitorPlay,
      title: "Video editing",
      description: ["Video editing", "Motion graphics"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Things that I can do for my clients. Just make your good trust I
            love to provide quality works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center space-y-6 bg-card border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-10 h-10 text-primary group-hover:text-background transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">
                {service.description.map((d) => (
                  <p>• {d}</p>
                ))}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
