import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

const CANONICAL = "https://miglior-casino-online-non-aams.consulentia18.it/contacts";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contatti - Consulentia18" },
      { name: "description", content: "Contatta la redazione di Consulentia18 per segnalazioni, collaborazioni o richieste sulla guida ai casinos non AAMS 2026." },
      { property: "og:title", content: "Contatti - Consulentia18" },
      { property: "og:url", content: CANONICAL },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: () => (
    <LegalLayout title="Contatti">
      <p>Per segnalazioni, richieste di rettifica o proposte editoriali scrivi alla redazione di Consulentia18.</p>
      <ul>
        <li><strong>Email redazione:</strong> redazione@consulentia18.it</li>
        <li><strong>Autore:</strong> Marco Rinaldi - analista iGaming</li>
        <li><strong>Sede editoriale:</strong> Milano, Italia</li>
        <li><strong>Tempi di risposta:</strong> 24-72 ore lavorative</li>
      </ul>
      <h2>Segnalazioni sui casino</h2>
      <p>Se hai riscontrato problemi con uno degli operatori recensiti, invia un'email con oggetto "Segnalazione operatore" indicando nome del casino, data e descrizione del problema. Valuteremo la modifica del punteggio nella prossima revisione.</p>
    </LegalLayout>
  ),
});
