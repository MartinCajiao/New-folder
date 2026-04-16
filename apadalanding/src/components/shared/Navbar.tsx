import { useState } from "react";
import { MAIN_NAV, CTA_LINKS } from "../../core/constants/navigation";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo APADA */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-blue-700"
            >
              APADA
            </a>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {MAIN_NAV.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="flex items-center text-slate-600 font-medium hover:text-blue-600 transition-colors py-2">
                      {item.name}
                      <svg
                        className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Desktop */}
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="text-slate-600 font-medium hover:text-blue-600 transition-colors py-2"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* CTA Desktop - CORREGIDO AQUÍ */}
            <a
              href={CTA_LINKS.donar.href}
              className="ml-4 px-6 py-2.5 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-transform transform hover:-translate-y-0.5 shadow-md shadow-orange-500/20"
            >
              {CTA_LINKS.donar.name}
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full">
          {MAIN_NAV.map((item) => (
            <div key={item.name} className="py-2">
              {item.submenu ? (
                <>
                  <div className="font-semibold text-slate-800 px-3 pb-2">
                    {item.name}
                  </div>
                  <div className="pl-6 space-y-2 border-l-2 border-blue-100 ml-3">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href || "#"}
                  className="block px-3 py-2 font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <div className="pt-4 px-3">
            {/* CTA Móvil - CORREGIDO AQUÍ */}
            <a
              href={CTA_LINKS.donar.href}
              className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 shadow-md"
            >
              {CTA_LINKS.donar.name}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
