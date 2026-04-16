// --- Tipados Estrictos ---

export interface BankData {
  titular: string;
  titularLargo: string;
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  ruc: string;
  emailComprobantes: string;
}

export interface ImpactMetric {
  id: string;
  valor: string;
  etiqueta: string;
}

export interface SiteMetadata {
  name: string;
  shortName: string;
  description: string;
  mission: string;
  vision: string;
  slogan: string;
}

// --- Constantes de la Fundación ---

export const SITE_INFO: SiteMetadata = {
  name: "Asociación de Padres y Amigos para el Apoyo y la Defensa de los Derechos de las Personas con Autismo",
  shortName: "APADA del Ecuador",
  description:
    "Organización sin fines de lucro que reúne a familias, profesionales y personas interesadas en el Trastorno del Espectro Autista (TEA) en Ecuador.",
  mission:
    "Brindar apoyo integral a las personas con Trastorno del Espectro Autista (TEA) y a sus familias en todo el Ecuador, promoviendo su inclusión, autonomía y bienestar mediante acciones educativas, legales y comunitarias.",
  vision:
    "Construir un país donde las personas con autismo sean respetadas, comprendidas y plenamente incluidas en todos los ámbitos de la sociedad.",
  slogan: "Nada sobre nosotros sin nosotros.",
};

export const BANK_INFO: BankData = {
  titular: "APADA del Ecuador",
  titularLargo:
    "Asociación de Padres y Amigos para el Apoyo y la Defensa de Personas Autistas APADA del Ecuador",
  banco: "Banco Internacional",
  tipoCuenta: "Cuenta Corriente",
  numeroCuenta: "700634693",
  ruc: "1792436648001",
  emailComprobantes: "tesoreria@apadadelecuador.org",
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "eventos",
    valor: "50+",
    etiqueta: "Eventos gratuitos",
  },
  {
    id: "familias",
    valor: "200+",
    etiqueta: "Familias favorecidas",
  },
  {
    id: "aliadas",
    valor: "30",
    etiqueta: "Organizaciones aliadas",
  },
  {
    id: "voluntarios",
    valor: "40+",
    etiqueta: "Voluntarios",
  },
];
