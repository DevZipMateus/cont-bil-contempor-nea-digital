import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Vamos conversar sobre o{" "}
            <span className="text-gradient-gold">seu negócio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a crescer com segurança e eficiência.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/5555984546494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  (55) 98454-6494
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <a
                  href="mailto:contempocontabil@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  contempocontabil@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Alameda dos Ipês, 50
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário de atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8:30 às 17:30
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
            >
              <a
                href="https://wa.me/5555984546494"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Iniciar conversa no WhatsApp
              </a>
            </Button>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-4">
                Pronto para transformar sua contabilidade?
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Nossa equipe está pronta para entender suas necessidades e oferecer
                as melhores soluções para o seu negócio. Agende uma consulta gratuita
                e descubra como podemos ajudar.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm">Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm">Orçamento sem compromisso</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm">Resposta em até 24 horas</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-primary-foreground/10" />
              <div className="absolute bottom-4 right-8 w-12 h-12 rounded-full border border-primary-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
