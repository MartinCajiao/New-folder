// ==========================================
// CONTRATOS DE DATOS (DOMAIN INTERFACES)
// ==========================================

// --- 1. Aliados Estratégicos ---
export type CategoriaAliado =
  | "Educativo"
  | "Gubernamental"
  | "Privado"
  | "Salud"
  | "ONG";

export interface Aliado {
  nombre: string;
  logoUrl: string;
  webUrl?: string;
  categoria: CategoriaAliado;
}

// --- 2. Marco Legal ---
export type OrganismoLegal =
  | "Asamblea Nacional"
  | "MSP"
  | "Ministerio de Educación"
  | "MIES"
  | "Otro";

export interface RecursoLegal {
  id: string;
  ley: string;
  descripcionBreve: string;
  linkDescarga: string;
  organismo: OrganismoLegal;
  esVigente: boolean;
}

// --- 3. Podcast "Voces que inspiran" ---
export interface EpisodioPodcast {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  invitado?: string;
  audioUrl?: string; // Enlace al embed de Spotify o archivo de audio directo
  fechaPublicacion: Date | string;
  duracionMinutos?: number;
}

// --- 4. Nosotros / Actividades ---
// Usamos un Enum para evitar typos al clasificar los servicios de la fundación
export enum CategoriaActividad {
  SALUD = "Atención Integral en Salud",
  LEGAL = "Defensa de Derechos",
  APOYO = "Apoyo Mutuo",
  EDUCACION = "Capacitación y Conciencia",
  EVENTOS = "Eventos con propósito",
}

export interface Actividad {
  titulo: string;
  descripcion: string;
  categoria: CategoriaActividad;
  iconoRef?: string; // Referencia a un ícono (ej. 'heart', 'scale')
}

// --- 5. Blog y Noticias (Para los Content Collections de Astro) ---
export interface ArticuloBlog {
  title: string;
  pubDate: Date;
  description: string;
  author?: string;
  image?: string;
  tags?: string[];
  isDraft?: boolean;
}
