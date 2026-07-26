import { createFileRoute } from "@tanstack/react-router";
import CasinoPage, { buildStructuredData } from "@/components/CasinoPage";

const CANONICAL = "https://miglior-casino-online-non-aams.consulentia18.it/";
const XDEFAULT = "https://www.consulentia18.it/";

export const Route = createFileRoute("/")({
  component: CasinoPage,
  head: () => ({
    meta: [
      { title: "Miglior casino online non AAMS 2026 - top 10 verificati" },
      { name: "description", content: "Classifica dei migliori casino online non AAMS del 2026: bonus reali, tempi di prelievo, licenze Curacao e Anjouan. Guida testata da esperti." },
      { name: "keywords", content: "miglior casino online non AAMS, casino non AAMS 2026, casino stranieri, bonus casino non AAMS" },
      { property: "og:title", content: "Miglior casino online non AAMS 2026 - top 10 verificati" },
      { property: "og:description", content: "Classifica dei migliori casino online non AAMS del 2026: bonus reali, prelievi rapidi, licenze estere. Guida indipendente." },
      { property: "og:url", content: CANONICAL },
      { property: "og:locale", content: "it_IT" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "Miglior casino online non AAMS 2026" },
      { name: "twitter:description", content: "Top 10 casino non AAMS testati: bonus, licenze, tempi di prelievo verificati." },
    ],
    links: [
      { rel: "canonical", href: CANONICAL },
      { rel: "alternate", hrefLang: "it-IT", href: CANONICAL },
      { rel: "alternate", hrefLang: "x-default", href: XDEFAULT },
    ],
    scripts: buildStructuredData(CANONICAL).map(d => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  }),
});
