import { CheckCircle, Award, Target } from "lucide-react";
import logoHistoria from "@/assets/logo-historia-new.png";

export function About() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Nossa história
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Uma contabilidade que vai{" "}
              <span className="text-gradient-gold">além dos números</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tudo começou com um sonho: transformar a contabilidade em algo mais humano,
                moderno e estratégico. A Contemporânea Contábil nasceu do desejo de mostrar
                que números não são apenas registros — eles contam histórias, revelam caminhos
                e podem impulsionar conquistas.
              </p>
              <p>
                No início, eram apenas alguns clientes e uma equipe determinada. Mas havia um
                propósito maior: ser parceira dos empreendedores, caminhar lado a lado em cada
                desafio e celebrar cada vitória.
              </p>
              <p>
                Com dedicação, ética e inovação, a empresa cresceu. Incorporou tecnologia,
                simplificou processos e trouxe transparência para cada decisão. Mais que
                relatórios, passou a entregar confiança. Mais que cálculos, passou a gerar
                resultados.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Tecnologia de ponta</h3>
                  <p className="text-sm text-muted-foreground">Processos digitais e automatizados</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Excelência profissional</h3>
                  <p className="text-sm text-muted-foreground">Equipe qualificada e atualizada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Foco no cliente</h3>
                  <p className="text-sm text-muted-foreground">Soluções personalizadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Especialistas em agro</h3>
                  <p className="text-sm text-muted-foreground">Atendimento ao setor rural</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl transform -rotate-3" />
              
              {/* Main card */}
              <div className="relative bg-card rounded-3xl shadow-card p-8 min-h-[420px] sm:h-full flex flex-col justify-center border border-border">
                <div className="text-center">
                  <img 
                    src={logoHistoria} 
                    alt="Contemporânea Contábil" 
                    className="w-48 h-auto mx-auto mb-6 rounded-2xl"
                  />
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    Contemporânea Contábil
                  </h3>
                  <p className="text-muted-foreground italic mb-6">
                    "Confiança, transparência e resultados"
                  </p>
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-accent">15+</span>
                      <span className="text-xs text-muted-foreground">Anos de experiência</span>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-accent">100%</span>
                      <span className="text-xs text-muted-foreground">Satisfação</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
