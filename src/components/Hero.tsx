import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import heroOffice from "@/assets/hero-office-1.jpg";
import heroSign from "@/assets/hero-sign-2.jpg";
import heroWorkspace from "@/assets/hero-workspace-1.jpg";
import heroOfficeRoom from "@/assets/hero-office-room.jpg";

const heroImages = [
  {
    src: heroOffice,
    alt: "Recepção moderna do escritório Contemporânea Contábil",
  },
  {
    src: heroWorkspace,
    alt: "Mesa de trabalho profissional com relatórios financeiros e calculadora",
  },
  {
    src: heroOfficeRoom,
    alt: "Sala de reuniões moderna com documentos financeiros",
  },
];

export function Hero() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="inicio"
      className="relative min-h-[200vh] sm:min-h-[140vh] flex items-start justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full -ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative w-full min-h-[200vh] sm:min-h-[140vh]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full min-h-full object-cover absolute inset-0"
                    style={{ objectPosition: index === 0 ? '50% 70%' : 'center' }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-primary/80" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-accent w-8"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-20 pt-24 md:pt-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-primary-foreground/80">
                Confiança, transparência e resultados
              </span>
            </div>

            {/* H1 - Nome da empresa */}
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-up animation-delay-100">
              Contemporânea Contábil
            </h1>

            {/* H2 - Descrição */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 font-light max-w-2xl lg:max-w-xl mb-10 leading-relaxed animate-fade-up animation-delay-200">
              Transformamos números em estratégias, contabilidade em crescimento.
              Sua parceira moderna para um futuro próspero.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 animate-fade-up animation-delay-300">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-base px-8"
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-base px-8"
              >
                <a href="#sobre">Conheça nossa história</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl animate-fade-up animation-delay-400 mt-8">
              <div className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-accent mb-2" />
                <span className="text-xl font-bold text-primary-foreground">+500</span>
                <span className="text-xs text-primary-foreground/60">Empresas atendidas</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <Shield className="w-6 h-6 text-accent mb-2" />
                <span className="text-xl font-bold text-primary-foreground">100%</span>
                <span className="text-xs text-primary-foreground/60">Compliance garantido</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <Users className="w-6 h-6 text-accent mb-2" />
                <span className="text-xl font-bold text-primary-foreground">Agro</span>
                <span className="text-xs text-primary-foreground/60">Especialistas no setor</span>
              </div>
            </div>
          </div>

          {/* Right side - Sign image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/20">
                <img
                  src={heroSign}
                  alt="Placa da Contemporânea Contábil na entrada do escritório"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
