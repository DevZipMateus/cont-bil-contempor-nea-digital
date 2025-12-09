import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#valores", label: "Valores" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3">
                <span className="font-playfair font-bold text-xl text-accent">C</span>
              </div>
              <span className="font-playfair font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                Contemporânea Contábil
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-4 leading-relaxed">
              Contabilidade moderna com confiança, transparência e resultados.
              Transformamos números em estratégias para o seu negócio.
            </p>
            <p className="text-sm text-primary-foreground/50">
              CNPJ: 12.035.734/0001-95
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5555984546494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-all duration-300"
                >
                  <div className="p-1.5 rounded-lg bg-primary-foreground/5 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">(55) 98454-6494</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contempocontabil@gmail.com"
                  className="group flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-all duration-300"
                >
                  <div className="p-1.5 rounded-lg bg-primary-foreground/5 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">contempocontabil@gmail.com</span>
                </a>
              </li>
              <li className="group flex items-start gap-2 text-primary-foreground/70">
                <div className="p-1.5 rounded-lg bg-primary-foreground/5 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="group-hover:text-accent transition-colors duration-300">Alameda dos Ipês, 50</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>
              © {currentYear} Contemporânea Contábil. Todos os direitos reservados.
            </p>
            <p>
              Seg - Sex: 8:30 às 17:30
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
