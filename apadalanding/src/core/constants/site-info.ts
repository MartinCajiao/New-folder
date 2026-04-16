// --- Domain Interfaces ---

export interface BankData {
  accountHolder: string;
  longAccountHolder: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
  taxId: string; // RUC
  receiptEmail: string;
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
}

export interface SiteMetadata {
  name: string;
  shortName: string;
  description: string;
  mission: string;
  vision: string;
  slogan: string;
}

// --- Foundation Constants ---

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
  accountHolder: "APADA del Ecuador",
  longAccountHolder:
    "Asociación de Padres y Amigos para el Apoyo y la Defensa de Personas Autistas APADA del Ecuador",
  bankName: "Banco Internacional",
  accountType: "Cuenta Corriente",
  accountNumber: "700634693",
  taxId: "1792436648001",
  receiptEmail: "tesoreria@apadadelecuador.org",
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "events",
    value: "50+",
    label: "Eventos gratuitos",
  },
  {
    id: "families",
    value: "200+",
    label: "Familias favorecidas",
  },
  {
    id: "partners",
    value: "30",
    label: "Organizaciones aliadas",
  },
  {
    id: "volunteers",
    value: "40+",
    label: "Voluntarios",
  },
];
