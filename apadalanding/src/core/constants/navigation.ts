// ==========================================
// src/core/constants/navigation.ts
// ==========================================

export interface NavItem {
  name: string; // <-- Aquí está la corrección principal
  href?: string;
  submenu?: NavItem[];
}

// --- Main Navigation ---
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

// --- Call To Action Links ---
export const CTA_LINKS = {
  // Ajustado a 'donar' para que haga match perfecto con tu Navbar
  donar: { name: "QUIERO DONAR", href: "/donaciones" },
  contacto: { name: "Contáctanos", href: "/contacto" },
};

// --- Social & Contact Data ---
export const SOCIAL_LINKS = [
  { id: "facebook", name: "Facebook", href: "#facebook" },
  { id: "twitter", name: "Twitter", href: "#twitter" },
  { id: "youtube", name: "YouTube", href: "#youtube" },
  { id: "instagram", name: "Instagram", href: "#instagram" },
  { id: "whatsapp", name: "WhatsApp", href: "https://wa.me/593996062600" },
];

export const CONTACT_INFO = {
  address: "Ulpiano Páez y Ramirez Dávalos. Edificio Eiffel - Quito",
  email: "info@apadadelecuador.org",
  phone: "+593 99 606 2600",
};
