import { Eye, Target, Heart, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Eye,
    label: "Transparência",
    description: "Em cada ação que realizamos",
  },
  {
    icon: Lightbulb,
    label: "Inovação",
    description: "Para soluções inteligentes",
  },
  {
    icon: Heart,
    label: "Compromisso",
    description: "Com o sucesso do cliente",
  },
  {
    icon: Award,
    label: "Excelência",
    description: "Profissional contínua",
  },
];

export function Values() {
  return (
    <section id="valores" className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4 sm:px-0">
          <span className="inline-block text-xs sm:text-sm font-medium text-accent uppercase tracking-wider mb-3 sm:mb-4 animate-fade-up">
            O que nos guia
          </span>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 sm:mb-6 animate-fade-up animation-delay-100">
            Missão, visão e valores
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          <div className="group bg-primary-foreground/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-fade-up animation-delay-200">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Target className="w-6 h-6 sm:w-7 lg:w-8 sm:h-7 lg:h-8 text-accent group-hover:animate-pulse" />
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-primary-foreground">
                Missão
              </h3>
            </div>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Simplificar a contabilidade com ética e inovação, transformando números
              em resultados para nossos clientes.
            </p>
          </div>

          <div className="group bg-primary-foreground/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-fade-up animation-delay-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Eye className="w-6 h-6 sm:w-7 lg:w-8 sm:h-7 lg:h-8 text-accent group-hover:animate-pulse" />
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-primary-foreground">
                Visão
              </h3>
            </div>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Ser a contabilidade moderna que inspira confiança e impulsiona o crescimento
              dos negócios.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 lg:w-14 sm:h-12 lg:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <value.icon className="w-5 h-5 sm:w-6 lg:w-7 sm:h-6 lg:h-7 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-primary-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                {value.label}
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/60">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
