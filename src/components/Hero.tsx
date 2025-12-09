import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
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
          <h2 className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            Transformamos números em estratégias, contabilidade em crescimento.
            Sua parceira moderna para um futuro próspero.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up animation-delay-400">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <span className="text-2xl font-bold text-primary-foreground">+500</span>
              <span className="text-sm text-primary-foreground/60">Empresas atendidas</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <span className="text-2xl font-bold text-primary-foreground">100%</span>
              <span className="text-sm text-primary-foreground/60">Compliance garantido</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <Users className="w-8 h-8 text-accent mb-3" />
              <span className="text-2xl font-bold text-primary-foreground">Agro</span>
              <span className="text-sm text-primary-foreground/60">Especialistas no setor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
