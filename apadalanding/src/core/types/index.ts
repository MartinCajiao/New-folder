// ==========================================
// CONTRATOS DE DATOS (DOMAIN INTERFACES)
// ==========================================

// --- 1. Aliados Estratégicos ---
export type PartnerCategory =
  | "Educational"
  | "Government"
  | "Private"
  | "Health"
  | "NGO";

export interface Partner {
  name: string;
  logoUrl: string;
  webUrl?: string;
  category: PartnerCategory;
}

// --- 2. Marco Legal ---
export type LegalBody =
  | "National Assembly"
  | "MSP"
  | "Ministry of Education"
  | "MIES"
  | "Other";

export interface LegalResource {
  id: string;
  law: string;
  shortDescription: string;
  downloadLink: string;
  agency: LegalBody;
  isActive: boolean;
}

// --- 3. Podcast "Voces que inspiran" ---
export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  guest?: string;
  audioUrl?: string;
  publishDate: Date | string;
  durationMinutes?: number;
}

// --- 4. Nosotros / Actividades ---
export enum ActivityCategory {
  HEALTH = "HEALTH",
  LEGAL = "LEGAL",
  SUPPORT = "SUPPORT",
  EDUCATION = "EDUCATION",
  EVENTS = "EVENTS",
}

export interface Activity {
  title: string;
  description: string;
  category: ActivityCategory;
  iconRef?: string;
}

// --- 5. Blog y Noticias ---
export interface BlogPost {
  title: string;
  pubDate: Date;
  description: string;
  author?: string;
  image?: string;
  tags?: string[];
  isDraft?: boolean;
}
