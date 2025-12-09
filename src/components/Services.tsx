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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Nossos serviços
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Soluções completas para o{" "}
            <span className="text-gradient-gold">seu negócio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços contábeis e consultivos,
            adaptados às necessidades específicas de cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Precisa de um serviço específico? Entre em contato conosco.
          </p>
          <a
            href="https://wa.me/5555984546494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            Solicitar orçamento →
          </a>
        </div>
      </div>
    </section>
  );
}
