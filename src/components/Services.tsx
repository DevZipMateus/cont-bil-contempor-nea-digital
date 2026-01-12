import {
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Building2,
  Leaf,
  ClipboardCheck,
  HandshakeIcon,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Contabilidade empresarial",
    description:
      "Escrituração contábil completa, balancetes, demonstrações financeiras e análise de resultados para sua empresa.",
  },
  {
    icon: FileText,
    title: "Departamento fiscal",
    description:
      "Apuração de impostos, obrigações acessórias, planejamento tributário e otimização da carga fiscal.",
  },
  {
    icon: Users,
    title: "Departamento pessoal",
    description:
      "Folha de pagamento, admissões, rescisões, férias, 13º salário e todas as obrigações trabalhistas.",
  },
  {
    icon: Building2,
    title: "Abertura de empresas",
    description:
      "Constituição societária, escolha do regime tributário, registro na junta comercial e órgãos competentes.",
  },
  {
    icon: Leaf,
    title: "Contabilidade rural",
    description:
      "Especialistas no agronegócio: ITR, LCDPR, análise de custos de produção e planejamento para o produtor rural.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria financeira",
    description:
      "Análise de viabilidade, fluxo de caixa, indicadores de desempenho e estratégias para crescimento sustentável.",
  },
  {
    icon: ClipboardCheck,
    title: "Regularização fiscal",
    description:
      "Recuperação de créditos tributários, parcelamentos, certidões negativas e resolução de pendências.",
  },
  {
    icon: HandshakeIcon,
    title: "Assessoria empresarial",
    description:
      "Suporte estratégico para tomada de decisões, reestruturação societária e gestão de processos.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4 sm:px-0">
          <span className="inline-block text-xs sm:text-sm font-medium text-accent uppercase tracking-wider mb-3 sm:mb-4">
            Nossos serviços
          </span>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Soluções completas para o{" "}
            <span className="text-gradient-gold">seu negócio</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços contábeis e consultivos,
            adaptados às necessidades específicas de cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-border card-hover"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
            Precisa de um serviço específico? Entre em contato conosco.
          </p>
          <a
            href="https://wa.me/5555984546494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm sm:text-base text-accent font-medium hover:underline"
          >
            Solicitar orçamento →
          </a>
        </div>
      </div>
    </section>
  );
}
