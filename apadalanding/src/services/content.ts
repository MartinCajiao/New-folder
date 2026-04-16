import type { BlogPost } from "../core/types";

// --- Mock Data ---
const MOCK_POSTS: (BlogPost & { id: string })[] = [
  {
    id: "aptitudes-prosociales-2026",
    title:
      "Aptitudes prosociales en el aula a partir de espacios colaborativos",
    pubDate: new Date("2026-04-10"),
    description:
      "El juego colaborativo es mucho más que una actividad recreativa: es una herramienta clave para desarrollar habilidades sociales, cooperación y sentido de pertenencia en el aula.",
    author: "Redacción APADA",
    tags: ["Educación", "Inclusión"],
    isDraft: false,
  },
  {
    id: "convenio-fe-y-alegria",
    title:
      "APADA y Fe y Alegría firman convenio para fortalecer la inclusión educativa",
    pubDate: new Date("2025-12-05"),
    description:
      "Firmamos un acuerdo estratégico para que familias, educadores e instituciones caminen juntos hacia una sociedad abierta a la neurodiversidad en Quito.",
    author: "Directiva APADA",
    tags: ["Convenios", "Educación"],
    isDraft: false,
  },
  {
    id: "red-nacional-tea",
    title:
      "Nace la Red Nacional de Organizaciones TEA en Ecuador: Un hito histórico",
    pubDate: new Date("2025-07-02"),
    description:
      "Manta fue testigo de la conformación oficial de la Red Nacional. Representantes de 12 provincias se unieron para defender los derechos del autismo.",
    author: "Comunidad APADA",
    tags: ["Comunidad", "Derechos"],
    isDraft: false,
  },
  {
    id: "manifiesto-derechos-2025",
    title: "Manifiesto por los Derechos de las Personas Autistas del Ecuador",
    pubDate: new Date("2025-03-27"),
    description:
      "Hacemos un llamado urgente a los candidatos presidenciales para incluir políticas públicas inclusivas, justas y sostenidas en sus planes de gobierno.",
    author: "Red de Organizaciones TEA",
    tags: ["Legal", "Incidencia"],
    isDraft: false,
  },
  {
    id: "sentencia-corte-constitucional",
    title: "Un Avance en la Lucha por los Derechos: Sentencia No. 10-24-IN",
    pubDate: new Date("2025-02-12"),
    description:
      "La Corte Constitucional falló a favor de APADA, declarando la inconstitucionalidad de reformas que retrocedían en el reconocimiento de derechos de salud mental.",
    author: "Departamento Legal",
    tags: ["Legal", "Victoria"],
    isDraft: false,
  },
  {
    id: "educacion-inclusion-ibarra",
    title:
      "Educación e Inclusión: Casos que evidencian falencias en el sistema",
    pubDate: new Date("2025-02-10"),
    description:
      "Analizamos incidentes recientes en Ibarra que ponen de manifiesto la falta de preparación docente y los prejuicios sociales que persisten en el sistema educativo.",
    author: "Redacción APADA",
    tags: ["Educación", "Derechos"],
    isDraft: false,
  },
  {
    id: "panorama-general-ecuador",
    title: "El Autismo en Ecuador: Panorama General y Prevalencia",
    pubDate: new Date("2025-02-10"),
    description:
      "A pesar de los avances, el conocimiento sobre el autismo sigue siendo limitado. Analizamos las cifras de prevalencia y las barreras que enfrentan las familias.",
    author: "Investigación APADA",
    tags: ["Estadísticas", "Comunidad"],
    isDraft: false,
  },
  {
    id: "desafio-educacion-ecuador",
    title: "Autismo y Educación: Un Desafío Urgente en el Sistema Público",
    pubDate: new Date("2025-02-10"),
    description:
      "Según datos del Ministerio de Educación, miles de estudiantes con autismo enfrentan barreras de inclusión. Es vital la detección y la capacitación docente.",
    author: "Investigación APADA",
    tags: ["Educación", "Estadísticas"],
    isDraft: false,
  },
];

// --- Service Logic ---
export const blogService = {
  getAllPosts: async () => {
    return MOCK_POSTS.filter((post) => !post.isDraft).sort(
      (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
    );
  },
};
