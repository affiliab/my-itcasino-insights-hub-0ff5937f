import { createFileRoute } from "@tanstack/react-router";
import CasinoPage, { buildStructuredData } from "@/components/CasinoPage";

const CANONICAL = "https://miglior-casino-online-non-aams.consulentia18.it/";
const XDEFAULT = "https://www.consulentia18.it/";

export const Route = createFileRoute("/it-it/")({
  component: CasinoPage,
  head: () => ({
    meta: [
      { title: "Miglior casino online non AAMS 2026 - guida IT" },
      { name: "description", content: "Migliori casino non AAMS del 2026 in italiano: top 10 con bonus verificati, licenze Curacao e Anjouan, prelievi rapidi." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Miglior casino online non AAMS 2026 - guida IT" },
      { property: "og:description", content: "Guida italiana ai migliori casino non AAMS del 2026: bonus, licenze, prelievi." },
      { property: "og:url", content: CANONICAL },
      { property: "og:locale", content: "it_IT" },
      { property: "og:type", content: "article" },
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