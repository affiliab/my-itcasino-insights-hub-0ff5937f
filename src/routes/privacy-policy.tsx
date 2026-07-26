import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

const CANONICAL = "https://www.consulentia18.it/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Consulentia18" },
      { name: "description", content: "Informativa sul trattamento dei dati personali ai sensi del GDPR per gli utenti di Consulentia18." },
      { property: "og:title", content: "Privacy Policy - Consulentia18" },
      { property: "og:url", content: CANONICAL },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: () => (
    <LegalLayout title="Privacy Policy">
      <p>Consulentia18 rispetta la privacy degli utenti e tratta i dati personali in conformita al Regolamento UE 2016/679 (GDPR). Aggiornamento: gennaio 2026.</p>
      <h2>Dati raccolti</h2>
      <p>Il sito raccoglie unicamente dati di navigazione aggregati (indirizzo IP anonimizzato, browser, pagine visitate) tramite strumenti di analisi statistica. Non richiede registrazione ne raccoglie dati identificativi diretti.</p>
      <h2>Finalita del trattamento</h2>
      <ul>
        <li>Misurare il traffico e migliorare i contenuti editoriali.</li>
        <li>Garantire la sicurezza tecnica del sito.</li>
        <li>Adempiere a obblighi di legge.</li>
      </ul>
      <h2>Diritti dell'utente</h2>
      <p>Puoi esercitare i diritti previsti dagli articoli 15-22 del GDPR (accesso, rettifica, cancellazione, portabilita, opposizione) scrivendo a privacy@consulentia18.it.</p>
      <h2>Titolare del trattamento</h2>
      <p>Consulentia18 - redazione editoriale. Contatti: redazione@consulentia18.it.</p>
    </LegalLayout>
  ),
});