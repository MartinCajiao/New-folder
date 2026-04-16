// Ajusta estas rutas según tu estructura de carpetas o tus alias (@core/...)
import { CONTACT_INFO, SOCIAL_LINKS } from "../../core/constants/navigation";
import { SITE_INFO } from "../../core/constants/site-info";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Arreglos locales para mantener el JSX limpio sin quemar etiquetas repetitivas
  const MENU_LINKS = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Aliados", href: "/aliados" },
    { label: "Ayúdanos", href: "/donaciones" },
  ];

  const RESOURCE_LINKS = [
    { label: "Marco Legal Ecuador", href: "/marco-legal" },
    { label: "Podcast", href: "/podcast" },
    { label: "Blog Apada", href: "/blog" },
    { label: "Día del Autismo", href: "/dia-del-autismo" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Branding */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white tracking-tight">
              {SITE_INFO.shortName}
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              Somos padres que ayudan a padres en el camino del autismo. Una
              organización sin fines de lucro promoviendo inclusión y apoyo.
            </p>

            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-xs">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Menú Principal */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Menú
            </h4>
            <ul className="space-y-3 text-sm">
              {MENU_LINKS.map((link) => (
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

          {/* Columna 3: Recursos */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Recursos
            </h4>
            <ul className="space-y-3 text-sm">
              {RESOURCE_LINKS.map((link) => (
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

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-500">📍</span>
                {/* Reemplazamos el <br/> por lógica CSS y el dato de la constante */}
                <span className="whitespace-pre-line">
                  {CONTACT_INFO.address.replace(" - ", "\n")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📱</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador Legal */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_INFO.shortName}. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4">
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
