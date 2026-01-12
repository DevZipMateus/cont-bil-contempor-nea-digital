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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Parceria jurídica
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Assessoria jurídica{" "}
            <span className="text-gradient-gold">especializada</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Em parceria com as advogadas Niederauer e Moraes, oferecemos suporte jurídico 
            completo nas áreas tributária e do agronegócio, diretamente no nosso escritório.
          </p>
        </div>

        {/* Lawyers Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border card-hover overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <Scale className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground">
                      Dra. {lawyer.name}
                    </h3>
                    <span className="text-accent font-medium text-sm">
                      {lawyer.specialty}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {lawyer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/5 border border-primary/10">
            <Handshake className="w-6 h-6 text-primary" />
            <p className="text-foreground">
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
