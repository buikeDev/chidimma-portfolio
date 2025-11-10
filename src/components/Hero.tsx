import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Icon,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const contacts = [
  { logo: Facebook, href: "https://www.facebook.com/share/1AK2MdDSxR/" },
  {
    logo: Linkedin,
    href: "https://www.linkedin.com/in/maryviolet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    logo: Instagram,
    href: "https://www.instagram.com/byteddy_?utm_source=qr&igsh=ZHUxcjZ3MmFqcmlt",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hello, I'm <br />
                <span className="text-primary">Chidimma Ubah</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Graphic Designer & Creative Director of byteddy creations.
              </p>
              <p className="text-lg text-muted-foreground">
                I love to provide quality works.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="hero"
                size="lg"
                className="flex items-center gap-4"
              >
                <MessageCircle className="h-3 w-3" />
                <a href="https://wa.me/qr/6XXNJEAV3BTLA1">GET IN TOUCH </a>
              </Button>
            </div>

            <div className="flex gap-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
                >
                  <contact.logo className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Lucas Alves - Creative Designer Portrait"
                className="w-full h-[70%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
