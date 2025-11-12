import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 80 },
    { name: "Canva", level: 98 },
    { name: "Capcut", level: 89 },
    { name: "Premier pro", level: 80 },
    { name: "Microsoft Suite", level: 90 },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m Ubah Chidimma Maryviolet, the creative mind behind By-Teddy
                Creations. My creative journey began with a deep love for color
                and visually appealing things. Back in my university days while
                studying Botany at Nnamdi Azikiwe University, Awka, I found
                myself playing around with PowerPoint, experimenting with shapes
                and layouts just for fun. That curiosity slowly grew into
                passion.
              </p>
              <p>
                By 2021, I began designing intentionally and later earned a
                Graphic Design certificate from Udemy, which helped me refine my
                creative process. Over time, I expanded into social media
                management and video editing, bringing stories to life visually
                and strategically. My creative toolkit includes Canva,
                Photoshop, CapCut, Premiere Pro, and Meta Business Suite. I also
                take on IT support roles, including virtual assistance and
                customer care relations.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <Button variant="default" size="lg">
                <a href="https://wa.me/qr/6XXNJEAV3BTLA1">HIRE ME</a>
              </Button>
              <a href="/cv.docx" download>
                <Button variant="outline" size="lg">
                  DOWNLOAD CV
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
