import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import AJ1 from "@/assets/1.jpg";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    "All",
    "Aiijay-Reality",
    "BrowLuxebycee",
    "HairGirl",
    "Other",
    "Monarch Homes and Properties",
    "LifeByStanley",
  ];

  const projects = [
    {
      image: AJ1,
      title: "Finding An Appartmant",
      category: "Ad",
      filter: "Aiijay-Reality",
    },
    {
      image: "/Aj/2.jpg",
      title: "Signature Design",
      category: "Ad",
      filter: "Aiijay-Reality",
    },
    {
      image: "/Aj/3.jpg",
      title: "AiijayReality",
      category: "Quote Design",
      filter: "Aiijay-Reality",
    },
    {
      image: "/Aj/4.jpg",
      title: "Medicine Package",
      category: "Package Design",
      filter: "Aiijay-Reality",
    },
    {
      image: "/Aj/5.jpg",
      title: "Beauty Product",
      category: "Package Design",
      filter: "Aiijay-Reality",
    },
    {
      image: "/Aj/6.jpg",
      title: "Conservation Campaign",
      category: "Poster Design",
      filter: "Aiijay-Reality",
    },
    {
      image: "/browLux/BL1.jpg",
      title: "BrowLux Styling",
      category: "Beauty",
      filter: "BrowLuxebycee",
    },
    {
      image: "/browLux/BL2.jpg",
      title: "BrowLux Styling",
      category: "Beauty",
      filter: "BrowLuxebycee",
    },
    {
      image: "/browLux/BL4.jpg",
      title: "BrowLux Styling",
      category: "Beauty",
      filter: "BrowLuxebycee",
    },
    {
      image: "/hairGirl/HG1.jpg",
      title: "Hair Girl Fashion",
      category: "Fashion",
      filter: "HairGirl",
    },
    {
      image: "/hairGirl/HG2.jpg",
      title: "Hair Girl Fashion",
      category: "Fashion",
      filter: "HairGirl",
    },
    {
      image: "/hairGirl/HG3.jpg",
      title: "Hair Girl Fashion",
      category: "Fashion",
      filter: "HairGirl",
    },
    {
      image: "/hairGirl/HG4.jpg",
      title: "Hair Girl Fashion",
      category: "Fashion",
      filter: "HairGirl",
    },
    {
      image: "/hairGirl/HG5.jpg",
      title: "Hair Girl Fashion",
      category: "Fashion",
      filter: "HairGirl",
    },
    {
      image: "/kq/KQ1.jpg",
      title: "KQ Photography",
      category: "Photography",
      filter: "Other",
    },
    {
      image: "/kq/KQ2.jpg",
      title: "KQ Photography",
      category: "Photography",
      filter: "Other",
    },
    {
      image: "/kq/KQ3.jpg",
      title: "KQ Photography",
      category: "Photography",
      filter: "KQ",
    },
    {
      image: "/kq/KQ4.jpg",
      title: "KQ Photography",
      category: "Photography",
      filter: "Other",
    },
    {
      image: "/kq/KQ5.jpg",
      title: "KQ Photography",
      category: "Photography",
      filter: "Other",
    },
    {
      image: "/kq/KQ6.png",
      title: "KQ Photography",
      category: "Photography",
      filter: "Other",
    },
    {
      image: "/kq/KQ7.jpg",
      title: "KQ Photography",
      category: "Photography",
      filter: "Other",
    },
    {
      image: "/lifeByStanley/16_20251107_153942_0001.jpg",
      title: "Life by Stanley",
      category: "Lifestyle",
      filter: "LifeByStanley",
    },
    {
      image: "/monarch/M1.jpg",
      title: "Monarch Collection",
      category: "Collection",
      filter: "Monarch Homes and Properties",
    },
    {
      image: "/monarch/M3.jpg",
      title: "Monarch Collection",
      category: "Collection",
      filter: "Monarch Homes and Properties",
    },
    {
      image: "/monarch/M4.png",
      title: "Monarch Collection",
      category: "Collection",
      filter: "Monarch Homes and Properties",
    },
    {
      image: "/monarch/M5.jpg",
      title: "Monarch Collection",
      category: "Collection",
      filter: "Monarch Homes and Properties",
    },
    {
      image: "/monarch/M6.jpg",
      title: "Monarch Collection",
      category: "Collection",
      filter: "Monarch Homes and Properties",
    },
    {
      image: "/monarch/M7.jpg",
      title: "Monarch Collection",
      category: "Collection",
      filter: "Monarch Homes and Properties",
    },
    {
      image: "/monarch/M1.jpg",
      title: "Monarch Collection",
      category: "Collection",
      filter: "Monarch Homes and Properties",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter)}
              className="min-w-24"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-secondary"
              onClick={() => handleCardClick(project)}
            >
              <img
                src={`${project.image}`}
                alt={`${project.title} - ${project.category}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {project.title}
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg">
            VIEW PORTFOLIO
          </Button>
        </div>
      </div>
      {selectedProject && (
        <Dialog open={isModalOpen}>
          <DialogOverlay onClick={() => setModalOpen(false)} />
          <DialogContent>
            <VisuallyHidden>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </VisuallyHidden>
            <img
              src={selectedProject.image}
              alt={`${selectedProject.title} - Full View`}
              className="w-full h-auto"
              loading="lazy"
            />
            <Button
              onClick={() => {
                setModalOpen(false);
                console.log("Close button clicked");
              }}
              onKeyDown={() => setModalOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Portfolio;
