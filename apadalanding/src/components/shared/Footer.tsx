export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Branding */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white tracking-tight">
              APADA
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              Somos padres que ayudan a padres en el camino del autismo. Una
              organización sin fines de lucro promoviendo inclusión y apoyo.
            </p>
            {/* Redes Sociales */}
            <div className="flex space-x-4 pt-2">
              {["Facebook", "Twitter", "Instagram", "Youtube"].map((red) => (
                <a
                  key={red}
                  href={`#${red.toLowerCase()}`}
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  aria-label={red}
                >
                  <span className="text-xs">{red[0]}</span>{" "}
                  {/* Placeholder para íconos */}
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
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/nosotros"
                  className="hover:text-blue-400 transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/aliados"
                  className="hover:text-blue-400 transition-colors"
                >
                  Aliados
                </a>
              </li>
              <li>
                <a
                  href="/donaciones"
                  className="hover:text-blue-400 transition-colors"
                >
                  Ayúdanos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Recursos
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/marco-legal"
                  className="hover:text-blue-400 transition-colors"
                >
                  Marco Legal Ecuador
                </a>
              </li>
              <li>
                <a
                  href="/podcast"
                  className="hover:text-blue-400 transition-colors"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog Apada
                </a>
              </li>
              <li>
                <a
                  href="/dia-del-autismo"
                  className="hover:text-blue-400 transition-colors"
                >
                  Día del Autismo
                </a>
              </li>
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
                <span>
                  Ulpiano Páez y Ramirez Dávalos.
                  <br />
                  Edificio Eiffel - Quito
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span>
                <a
                  href="mailto:info@apadadelecuador.org"
                  className="hover:text-white transition-colors"
                >
                  info@apadadelecuador.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📱</span>
                <a
                  href="https://wa.me/593996062600"
                  className="hover:text-white transition-colors"
                >
                  +593 99 606 2600
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} APADA del Ecuador. Todos los derechos reservados.
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
