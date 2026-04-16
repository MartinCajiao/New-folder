// Definimos el contrato estricto para la navegación
export interface NavItem {
  name: string;
  href?: string;
  submenu?: NavItem[];
}

// Navegación principal (Usada en Navbar y Footer)
export const MAIN_NAV: NavItem[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Somos APADA",
    submenu: [
      { name: "Conócenos", href: "/nosotros" },
      { name: "Aliados", href: "/aliados" },
      { name: "Día del Autismo", href: "/dia-del-autismo" },
    ],
  },
  {
    name: "Recursos",
    submenu: [
      { name: "Marco Legal", href: "/marco-legal" },
      { name: "Podcast", href: "/podcast" },
      { name: "Blog", href: "/blog" },
    ],
  },
];

// Enlaces de acción directa (Usados en los botones resaltados)
export const CTA_LINKS = {
  donar: { name: "QUIERO DONAR", href: "/donaciones" },
  contacto: { name: "Contáctanos", href: "/contacto" },
};

// Redes sociales y contacto (Para el Footer y botones flotantes)
export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#facebook" },
  { name: "Twitter", href: "#twitter" },
  { name: "YouTube", href: "#youtube" },
  { name: "Instagram", href: "#instagram" },
  { name: "WhatsApp", href: "https://wa.me/593996062600" },
];

export const CONTACT_INFO = {
  address: "Ulpiano Páez y Ramirez Dávalos. Edificio Eiffel - Quito",
  email: "info@apadadelecuador.org",
  phone: "+593 99 606 2600",
};
