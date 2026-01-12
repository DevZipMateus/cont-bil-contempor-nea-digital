import { Scale, Leaf, FileText, Handshake } from "lucide-react";

const lawyers = [
  {
    name: "Niederauer",
    specialty: "Direito Tributário",
    description: "Especialista em planejamento tributário, defesa em processos fiscais e recuperação de créditos.",
  },
  {
    name: "Moraes",
    specialty: "Direito do Agronegócio",
    description: "Especialista em contratos rurais, regularização fundiária e consultoria para o setor agrícola.",
  },
];

const services = [
  {
    icon: Scale,
    title: "Consultoria tributária",
    description: "Planejamento fiscal estratégico e defesa em processos administrativos e judiciais.",
  },
  {
    icon: Leaf,
    title: "Direito do agronegócio",
    description: "Contratos rurais, arrendamentos, parcerias agrícolas e regularização fundiária.",
  },
  {
    icon: FileText,
    title: "Recuperação de créditos",
    description: "Identificação e recuperação de tributos pagos indevidamente.",
  },
  {
    icon: Handshake,
    title: "Contratos empresariais",
    description: "Elaboração e revisão de contratos comerciais e societários.",
  },
];

export function LegalPartnership() {
  return (
    <section id="parceria-juridica" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4 sm:px-0">
          <span className="inline-block text-xs sm:text-sm font-medium text-accent uppercase tracking-wider mb-3 sm:mb-4">
            Parceria jurídica
          </span>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Assessoria jurídica{" "}
            <span className="text-gradient-gold">especializada</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            Em parceria com as advogadas Niederauer e Moraes, oferecemos suporte jurídico 
            completo nas áreas tributária e do agronegócio, diretamente no nosso escritório.
          </p>
        </div>

        {/* Lawyers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-border card-hover overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent/5 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-foreground">
                      Dra. {lawyer.name}
                    </h3>
                    <span className="text-accent font-medium text-xs sm:text-sm">
                      {lawyer.specialty}
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {lawyer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-border card-hover"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4 sm:px-0">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/10">
            <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
            <p className="text-sm sm:text-base text-foreground text-center sm:text-left">
              Atendimento integrado:{" "}
              <span className="font-semibold">contabilidade + assessoria jurídica</span>{" "}
              no mesmo local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
