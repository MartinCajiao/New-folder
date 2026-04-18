import { MapPin, Mail, Smartphone } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS, FOOTER_MENU_LINKS, FOOTER_RESOURCE_LINKS } from "../../core/constants/navigation";
import { SITE_INFO } from "../../core/constants/site-info";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white tracking-tight">
              {SITE_INFO.shortName}
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              {SITE_INFO.footerText}
            </p>

            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-md"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Menú
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Recursos
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 w-5 h-5 text-blue-500 shrink-0" />
                <span className="whitespace-pre-line text-slate-400">
                  {CONTACT_INFO.address.replace(" - ", "\n")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-blue-500 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_INFO.shortName}. {SITE_INFO.copyrightText}
          </p>
          <div className="flex space-x-6">
            <a href="/politicas" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" className="hover:text-white transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
