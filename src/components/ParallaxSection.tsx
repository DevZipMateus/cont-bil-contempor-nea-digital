import parallaxImage from "@/assets/parallax-accounting.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ParallaxSection() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pb-12 md:pb-16">
        <div className="container-custom text-center">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-4 animate-fade-up">
            Pronto para transformar sua contabilidade?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-100">
            Deixe-nos cuidar dos números enquanto você foca no que realmente importa: 
            o crescimento do seu negócio.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-base px-8 animate-fade-up animation-delay-200"
          >
            <a
              href="https://wa.me/5555984546494"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com um especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
