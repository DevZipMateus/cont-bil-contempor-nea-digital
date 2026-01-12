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
      className="relative min-h-[110vh] lg:min-h-[115vh] flex items-start justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="w-full h-full overflow-hidden"
        >
          <CarouselContent className="h-full ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0 min-w-full">
                <div className="relative w-full h-screen">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
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
        <div className="absolute bottom-8 sm:bottom-16 lg:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

      <div className="container-custom relative z-20 pt-24 pb-32 md:pt-28 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 sm:mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs sm:text-sm text-primary-foreground/80">
                Confiança, transparência e resultados
              </span>
            </div>

            {/* H1 - Nome da empresa */}
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-4 sm:mb-6 animate-fade-up animation-delay-100">
              Contemporânea Contábil
            </h1>

            {/* H2 - Descrição */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 font-light max-w-2xl mx-auto lg:mx-0 lg:max-w-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed animate-fade-up animation-delay-200 px-4 sm:px-0">
              Transformamos números em estratégias, contabilidade em crescimento.
              Sua parceira moderna para um futuro próspero.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-up animation-delay-300 px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-sm sm:text-base px-6 sm:px-8"
              >
                <a
                  href="https://wa.me/5555984546494"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale com um especialista
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-sm sm:text-base px-6 sm:px-8"
              >
                <a href="#sobre">Conheça nossa história</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-400 mt-6 sm:mt-8 px-2 sm:px-0">
              <div className="flex flex-col items-center lg:items-start p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1 sm:mb-2" />
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">+500</span>
                <span className="text-[10px] sm:text-xs text-primary-foreground/60 text-center lg:text-left">Empresas atendidas</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1 sm:mb-2" />
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">100%</span>
                <span className="text-[10px] sm:text-xs text-primary-foreground/60 text-center lg:text-left">Compliance garantido</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1 sm:mb-2" />
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">Agro</span>
                <span className="text-[10px] sm:text-xs text-primary-foreground/60 text-center lg:text-left">Especialistas no setor</span>
              </div>
            </div>
          </div>

          {/* Right side - Sign image */}
          <div className="hidden lg:flex flex-shrink-0 justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="relative w-64 lg:w-72 xl:w-80">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={heroSign}
                  alt="Placa da Contemporânea Contábil na entrada do escritório"
                  className="w-full h-[320px] lg:h-[360px] xl:h-[400px] object-cover object-[center_30%]"
                />
                {/* Gradiente inferior para suavizar a transição */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-accent/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
