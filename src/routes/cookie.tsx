import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

const CANONICAL = "https://miglior-casino-online-non-aams.consulentia18.it/cookie";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy - Consulentia18" },
      { name: "description", content: "Informativa cookie di Consulentia18: quali cookie utilizziamo, finalita e come gestire il consenso." },
      { property: "og:title", content: "Cookie Policy - Consulentia18" },
      { property: "og:url", content: CANONICAL },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: () => (
    <LegalLayout title="Cookie Policy">
      <p>Consulentia18 utilizza cookie tecnici e, previo consenso, cookie di misurazione anonimizzati. Aggiornamento: gennaio 2026.</p>
      <h2>Tipi di cookie</h2>
      <ul>
        <li><strong>Cookie tecnici:</strong> necessari al funzionamento del sito, non richiedono consenso.</li>
        <li><strong>Cookie di statistica anonima:</strong> aggregano dati sulle pagine visitate senza identificare il singolo utente.</li>
        <li><strong>Cookie di terze parti:</strong> non presenti in configurazione predefinita.</li>
      </ul>
      <h2>Gestione del consenso</h2>
      <p>Puoi disabilitare i cookie dal pannello del tuo browser. La disattivazione dei cookie tecnici puo compromettere la fruizione del sito.</p>
    </LegalLayout>
  ),
});
