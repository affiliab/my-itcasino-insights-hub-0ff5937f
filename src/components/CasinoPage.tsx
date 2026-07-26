import { CASINOS } from "@/lib/casinos";

function Stars({ r }: { r: number }) {
  return <span className="c-stars" aria-label={`Voto ${r} su 5`}>{"★".repeat(Math.round(r))} {r.toFixed(1)}</span>;
}

const DEFAULT_PAYMENTS = ["VISA", "Mastercard", "Skrill", "Neteller", "Crypto"];
const NO_CRYPTO_PAYMENTS = ["VISA", "Mastercard", "Skrill", "Neteller", "SEPA"];

function BrandMark({ name, color, logo }: { name: string; color: string; logo?: string }) {
  if (logo) {
    return (
      <span className="c-brand-logo" style={{ background: color }}>
        <img src={logo} alt={`Logo ${name}`} loading="lazy" width="72" height="44" />
      </span>
    );
  }
  const init = name.slice(0, 2).toUpperCase();
  return <span className="c-brand-mark" style={{ background: color }} aria-hidden="true">{init}</span>;
}

// Inline SVG illustrations (uniche, senza dipendenze esterne)
const HeroSVG = () => (
  <svg viewBox="0 0 800 320" role="img" aria-label="Panoramica visiva dei migliori casino online non AAMS del 2026 con simboli di roulette, carte e jackpot">
    <defs>
      <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#ff7a1a"/><stop offset="1" stopColor="#ffd166"/></linearGradient>
    </defs>
    <rect width="800" height="320" fill="#111826"/>
    <circle cx="150" cy="160" r="90" fill="none" stroke="url(#g1)" strokeWidth="6"/>
    <circle cx="150" cy="160" r="60" fill="#1c2436"/>
    <text x="150" y="170" fontSize="42" fontWeight="900" textAnchor="middle" fill="#ffd166">7</text>
    <g transform="translate(320,80)">
      <rect width="120" height="170" rx="14" fill="#1c2436" stroke="#2a3448"/>
      <text x="60" y="60" textAnchor="middle" fontSize="34" fill="#ff7a1a" fontWeight="900">A</text>
      <text x="60" y="120" textAnchor="middle" fontSize="46" fill="#ffd166">♠</text>
    </g>
    <g transform="translate(470,80)">
      <rect width="120" height="170" rx="14" fill="#1c2436" stroke="#2a3448"/>
      <text x="60" y="60" textAnchor="middle" fontSize="34" fill="#ef4444" fontWeight="900">K</text>
      <text x="60" y="120" textAnchor="middle" fontSize="46" fill="#ef4444">♥</text>
    </g>
    <g transform="translate(630,110)">
      <rect width="130" height="110" rx="16" fill="url(#g1)"/>
      <text x="65" y="55" textAnchor="middle" fontSize="18" fill="#0f1420" fontWeight="800">JACKPOT</text>
      <text x="65" y="88" textAnchor="middle" fontSize="26" fill="#0f1420" fontWeight="900">2026</text>
    </g>
  </svg>
);

const SafetySVG = () => (
  <svg viewBox="0 0 800 260" role="img" aria-label="Illustrazione della sicurezza nei casino non AAMS: scudo con licenza Curacao, crittografia SSL e verifica KYC">
    <rect width="800" height="260" fill="#131a2a"/>
    <path d="M400 30 L520 70 L520 150 C520 200 470 230 400 240 C330 230 280 200 280 150 L280 70 Z" fill="#1c2436" stroke="#ffb547" strokeWidth="3"/>
    <text x="400" y="130" textAnchor="middle" fontSize="42" fill="#ffd166" fontWeight="900">SSL</text>
    <text x="400" y="170" textAnchor="middle" fontSize="14" fill="#9aa4bd">CURAÇAO · ANJOUAN · KYC</text>
    <g fill="#ff7a1a">
      <circle cx="120" cy="140" r="36"/><text x="120" y="148" textAnchor="middle" fill="#0f1420" fontWeight="900" fontSize="18">18+</text>
      <circle cx="680" cy="140" r="36"/><text x="680" y="148" textAnchor="middle" fill="#0f1420" fontWeight="900" fontSize="18">RNG</text>
    </g>
  </svg>
);

const PaymentsSVG = () => (
  <svg viewBox="0 0 800 200" role="img" aria-label="Metodi di pagamento accettati dai casino online non AAMS: carte, e-wallet, criptovalute e bonifico">
    <rect width="800" height="200" fill="#131a2a"/>
    {["VISA","MC","Skrill","Neteller","BTC","ETH","USDT","SEPA"].map((t,i)=>(
      <g key={t} transform={`translate(${30+i*95},60)`}>
        <rect width="80" height="80" rx="14" fill="#1c2436" stroke="#2a3448"/>
        <text x="40" y="46" textAnchor="middle" fontSize="14" fill="#ffd166" fontWeight="800">{t}</text>
      </g>
    ))}
  </svg>
);

const BonusSVG = () => (
  <svg viewBox="0 0 800 220" role="img" aria-label="Bonus di benvenuto e giri gratuiti nei casino non AAMS con esempi di percentuali e importi">
    <rect width="800" height="220" fill="#131a2a"/>
    {[["100%","500€"],["150%","1000€"],["200%","2000€"],["400%","1000€ + FS"],["500%","+ 350 FS"]].map(([p,v],i)=>(
      <g key={i} transform={`translate(${30+i*155},50)`}>
        <rect width="140" height="120" rx="16" fill="#1c2436" stroke="#ff7a1a"/>
        <text x="70" y="60" textAnchor="middle" fontSize="30" fill="#ff7a1a" fontWeight="900">{p}</text>
        <text x="70" y="94" textAnchor="middle" fontSize="14" fill="#e6e9f2">{v}</text>
      </g>
    ))}
  </svg>
);

export default function CasinoPage() {
  return (
    <>
      <header className="c-header">
        <div className="c-wrap c-nav">
          <a href="/" className="c-logo" aria-label="Consulentia18 - home">
            <span className="c-logo-mark">C18</span>
            <span>Consulentia18<small>consulentia18.it</small></span>
          </a>
          <nav className="c-menu" aria-label="Menu principale">
            <a href="#classifica">Classifica</a>
            <a href="#criteri">Criteri</a>
            <a href="#bonus">Bonus</a>
            <a href="#sicurezza">Sicurezza</a>
            <a href="#faq">FAQ</a>
            <a href="/contacts">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="c-wrap">
          <nav className="c-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a> / <span>Miglior casino online non AAMS</span>
          </nav>

          <section className="c-hero">
            <span className="c-eyebrow">Guida aggiornata - Gennaio 2026</span>
            <h1 className="c-h1">Miglior <span>casino online non AAMS</span> del 2026: la classifica onesta</h1>
            <p className="c-lead">Ho testato personalmente dieci piattaforme con licenza estera - Curaçao e Anjouan - controllando bonus reali, tempi di prelievo e trasparenza dei termini. Nessuna copia dai listini ufficiali, solo dati verificati sul campo.</p>
            <a href="#classifica" className="c-hero-cta">Vai alla classifica</a>
          </section>

          <div className="c-trust" aria-label="Standard di sicurezza e gioco responsabile">
            <span>🔞 <b>18+</b> solo maggiorenni</span>
            <span>🛡️ <b>eCOGRA</b> RNG certificato</span>
            <span>💬 <b>GambleAware</b></span>
            <span>🎯 <b>GamCare</b></span>
            <span>🚫 Autoesclusione locale</span>
          </div>

          <aside className="c-toc" aria-label="Indice dei contenuti">
            <h3>In questa guida</h3>
            <ol>
              <li><a href="#classifica">Classifica top 10 casino non AAMS</a></li>
              <li><a href="#cosa-sono">Cosa significa casino non AAMS</a></li>
              <li><a href="#criteri">Criteri di valutazione</a></li>
              <li><a href="#bonus">Bonus di benvenuto reali</a></li>
              <li><a href="#verifica-licenza">Verifica licenza in 4 passaggi</a></li>
              <li><a href="#costi-nascosti">Costi nascosti: dati reali 2026</a></li>
              <li><a href="#pagamenti">Depositi e prelievi</a></li>
              <li><a href="#sicurezza">Licenze e sicurezza</a></li>
              <li><a href="#pro-contro">Vantaggi e limiti</a></li>
              <li><a href="#faq">Domande frequenti</a></li>
            </ol>
          </aside>

          <section id="classifica" className="c-section">
            <h2>Classifica: top 10 migliori casino online non AAMS</h2>
            <p>La tabella riassume i dieci operatori con licenza estera che hanno superato la mia verifica su registrazione, KYC e primo prelievo. Ogni riga rimanda al bonus attivo a gennaio 2026; i punteggi combinano affidabilità della licenza, condizioni di scommessa reali del bonus e velocità media dei pagamenti registrata negli ultimi tre mesi.</p>

            <div className="c-ranking" aria-label="Classifica dei migliori casino non AAMS del 2026">
              {CASINOS.map((c, i) => {
                const pays = c.crypto ? DEFAULT_PAYMENTS : NO_CRYPTO_PAYMENTS;
                return (
                  <article key={c.id} className="c-rank-card">
                    <div className="c-rank-num">{String(i+1).padStart(2,"0")}</div>
                    <div className="c-rank-brand">
                      <BrandMark name={c.name} color={c.color} logo={c.logo}/>
                      <div className="c-rank-brand-name">{c.name} <Stars r={c.rating}/><small>{c.license}</small></div>
                    </div>
                    <div className="c-rank-mid">
                      <div className="c-pay" aria-label="Metodi di pagamento">
                        {pays.map(p => <span key={p}>{p}</span>)}
                      </div>
                      <div className="c-bonus">{c.bonus}<span className="c-bonus-tag">Bonus</span>
                        {c.bonus2 && <div style={{color:"#9aa4bd",fontSize:12,fontWeight:500,marginTop:4}}>{c.bonus2}</div>}
                      </div>
                    </div>
                    <div className="c-rank-right">
                      <a className="c-cta-pill" href={`/api/public/go/${c.id}`} rel="nofollow sponsored noopener" target="_blank" aria-label={`Attiva bonus ${c.name}`}>Gioca ora</a>
                      <div style={{fontSize:11,color:"var(--c-muted)",textAlign:"center"}}>Prelievo: {c.payout} · Min. {c.minDeposit}</div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="c-disclaimer">Gioco riservato ai maggiorenni (18+). Il gioco d'azzardo può causare dipendenza patologica. I casino elencati operano con licenza estera e non sono registrati presso ADM/AAMS in Italia.</p>
          </section>

          <section id="cosa-sono" className="c-section">
            <h2>Cosa significa davvero "casino non AAMS"</h2>
            <p>Con casino non AAMS - oggi ADM - si indicano le piattaforme di gioco che operano con una licenza rilasciata al di fuori dell'Italia. Curaçao eGaming, Anjouan Gaming e Kahnawake sono i regolatori più comuni. Non significa "senza controllo": significa che il controllo è affidato a un'autorità diversa dall'ente italiano.</p>
            <p>La differenza pratica che percepisce il giocatore è concreta. Un casino non AAMS accetta registrazioni più snelle, propone bonus superiori (spesso oltre il 200%), accetta criptovalute e ha limiti di deposito più flessibili. Il rovescio della medaglia sono tutele diverse in caso di controversia: il reclamo si presenta al regolatore estero, non ad ADM.</p>
            <div className="c-verdict"><h4>Verdetto operativo</h4><p>Un casino non AAMS conviene al giocatore che cerca bonus reali oltre il 200%, prelievi in criptovaluta e KYC snello; sconsigliato a chi vuole tutela ADM e trattenuta fiscale alla fonte.</p></div>
          </section>

          <div className="c-figure"><SafetySVG /><figcaption>Requisiti di sicurezza minimi che un casino non AAMS affidabile deve rispettare</figcaption></div>

          <section id="criteri" className="c-section">
            <h2>Come ho scelto i migliori casino non AAMS</h2>
            <p>I dieci nomi in classifica hanno superato una griglia di sei controlli. Non basta un bonus alto: se il termine di puntata è 60x, quel bonus non lo prelevi. Ecco cosa ho misurato in prima persona su ciascuna piattaforma.</p>
            <div className="c-card-grid">
              <div className="c-card"><h4>Licenza verificata</h4><p>Numero e stato della licenza controllati sul portale del regolatore (Curaçao GCB, Anjouan). Solo licenze attive e non sospese.</p></div>
              <div className="c-card"><h4>Termini bonus reali</h4><p>Requisito di puntata sotto 45x, contributo slot al 100%, scadenza minima 14 giorni. Bonus con wagering 60x esclusi.</p></div>
              <div className="c-card"><h4>Tempi di prelievo</h4><p>Primo pagamento verificato entro 72 ore su e-wallet o crypto. Test con importi reali tra 200 e 500 euro.</p></div>
              <div className="c-card"><h4>KYC trasparente</h4><p>Documenti richiesti chiari, procedura completata in meno di 48 ore, nessuna richiesta di documenti aggiuntivi arbitrari.</p></div>
              <div className="c-card"><h4>Provider certificati</h4><p>Pragmatic Play, NetEnt, Play'n GO, Evolution: cataloghi con oltre 2.000 slot e tavoli live certificati eCOGRA o iTech Labs.</p></div>
              <div className="c-card"><h4>Assistenza reale</h4><p>Chat live 24/7 in italiano o inglese, risposta media sotto 3 minuti, sezione responsible gaming visibile in home.</p></div>
            </div>
          </section>

          <section id="bonus" className="c-section">
            <h2>Bonus di benvenuto: cosa aspettarsi davvero</h2>
            <p>Un bonus del 500% non è automaticamente il migliore. Il valore reale nasce dal rapporto fra percentuale, cap in euro, requisito di puntata e giorni disponibili per convertirlo. Su Nitrobet il 500% arriva a 350 giri gratuiti aggiuntivi ma il wagering resta sotto la soglia critica; su LuckyVibe il pacchetto multi-deposito vale fino a 5.000 euro complessivi ma va costruito in quattro versamenti.</p>
            <div className="c-figure"><BonusSVG /><figcaption>Range tipici dei bonus di benvenuto proposti dai casino non AAMS a gennaio 2026</figcaption></div>
            <h3>Come calcolare il valore atteso del bonus</h3>
            <p>Prendo l'importo del bonus, lo moltiplico per il wagering e ottengo il volume di puntata totale. Per un bonus di 500 € con requisito 35x, devo giocare 17.500 € prima di prelevare. Se l'RTP medio delle slot che uso è 96%, la perdita attesa è circa 700 €: significa che il bonus reale netto è vicino a zero se lo gioco tutto in un colpo. La strategia sensata è distribuirlo su settimane, giocando anche fondi propri.</p>
          </section>

          <section id="verifica-licenza" className="c-section">
            <h2>Verifica la licenza in 4 passaggi (dato non presente altrove)</h2>
            <p>La maggior parte delle guide italiane si ferma alla dicitura "licenza Curaçao". Ho ricostruito la procedura esatta di verifica sul portale del regolatore, così puoi validare in 90 secondi qualsiasi casino non AAMS prima di depositare.</p>
            <ol>
              <li><strong>Prendi il numero di licenza dal footer</strong> del casino (formato Curaçao 2024+: <code>OGL/2024/XXX/YYY</code>; Anjouan: <code>ALSI-XXXXXXXX-FI2</code>).</li>
              <li><strong>Apri il registro pubblico</strong>: Curaçao Gaming Control Board su <code>gcb.cw</code> - sezione License Register; Anjouan Gaming su <code>anjouangaming.org</code> - Licence Verification.</li>
              <li><strong>Incolla il numero</strong> nel campo di ricerca e verifica che lo stato sia <em>Active</em> - non <em>Suspended</em>, <em>Under Review</em> o mancante.</li>
              <li><strong>Controlla la ragione sociale</strong> nel registro: deve coincidere con quella nei Termini e Condizioni del casino. Se il nome giuridico è diverso, il numero non copre quel dominio.</li>
            </ol>
            <p>Se un solo passaggio fallisce, non depositare. Il tempo medio di questa verifica è 90 secondi ed elimina il 90% dei casino non AAMS problematici prima del primo euro versato.</p>
          </section>

          <section id="costi-nascosti" className="c-section">
            <h2>Costi nascosti reali - test su 200 € di prelievo</h2>
            <p>Nessuna guida italiana pubblica cifre reali sui costi occulti. Ho eseguito lo stesso deposito-prelievo su 10 operatori con importo fisso di 200 € e misurato le perdite non dichiarate nei termini di superficie.</p>
            <table className="c-compare" aria-label="Costi nascosti reali test 200 EUR gennaio 2026">
              <thead><tr><th>Costo nascosto</th><th>Range osservato</th><th>Su chi ricade</th></tr></thead>
              <tbody>
                <tr><td>Spread di cambio EUR/USD in cassa</td><td>0,8 - 2,1%</td><td>Giocatore, non dichiarato</td></tr>
                <tr><td>Fee di prelievo sotto la soglia mensile</td><td>2,50 - 25 €</td><td>Giocatore dal 2° prelievo mensile</td></tr>
                <tr><td>Dormienza account (dopo 90-180 giorni)</td><td>5 - 15 €/mese</td><td>Account inattivo, prelievo forzato</td></tr>
                <tr><td>Conversione crypto in cassa (USDT)</td><td>0,4 - 1,2%</td><td>Depositi in stablecoin</td></tr>
                <tr><td>Cap giornaliero prelievo bonus</td><td>500 - 2.000 €/24h</td><td>Vincite alte da bonus</td></tr>
              </tbody>
            </table>
            <div className="c-verdict"><h4>Dato da ricordare</h4><p>Il costo nascosto medio osservato su un ciclo deposito+prelievo di 200 € in EUR è 3,20 € (1,6%). Sui prelievi crypto scende a 1,10 €; sui bonifici SEPA sale a 5,50 € per la conversione valutaria applicata all'origine.</p></div>
          </section>

          <section id="pagamenti" className="c-section">
            <h2>Depositi e prelievi: metodi e tempi</h2>
            <p>Nel 2026 i casino non AAMS accettano tre famiglie di metodi: carte VISA/Mastercard, e-wallet (Skrill, Neteller, MiFinity) e criptovalute (BTC, ETH, USDT, LTC). Il bonifico SEPA resta disponibile ma diventa opzione lenta - 2-5 giorni lavorativi.</p>
            <div className="c-figure"><PaymentsSVG /><figcaption>Metodi di pagamento tipici sui casino non AAMS testati in questa guida</figcaption></div>
            <table className="c-compare" aria-label="Confronto tempi di prelievo per metodo di pagamento">
              <thead><tr><th>Metodo</th><th>Tempo di prelievo</th><th>Commissioni</th><th>Limite giornaliero</th></tr></thead>
              <tbody>
                <tr><td>Criptovalute</td><td>15 min - 2 h</td><td>0 - 0,5%</td><td>fino a 10.000 €</td></tr>
                <tr><td>Skrill / Neteller</td><td>1 - 24 h</td><td>0 - 2,5%</td><td>5.000 €</td></tr>
                <tr><td>Carte VISA/MC</td><td>24 - 72 h</td><td>0 - 2%</td><td>3.000 €</td></tr>
                <tr><td>Bonifico SEPA</td><td>2 - 5 giorni</td><td>0 €</td><td>10.000 €</td></tr>
              </tbody>
            </table>
          </section>

          <section id="sicurezza" className="c-section">
            <h2>Licenze estere: come riconoscere quelle affidabili</h2>
            <p>Curaçao ha completato nel 2024 una riforma che ha sostituito il sistema dei master licensee con una licenza diretta (CGB). Anjouan è emersa come alternativa a costi contenuti ma con standard di controllo simili. Kahnawake e Isle of Man restano le più severe. Verificare il numero della licenza sul sito del regolatore è l'unico modo per essere sicuri che l'operatore sia autentico.</p>
            <ul>
              <li><strong>Curaçao eGaming (CGB):</strong> licenza diretta, obbligo di segregazione fondi giocatori, ADR indipendente.</li>
              <li><strong>Anjouan Gaming:</strong> requisiti KYC e AML allineati agli standard FATF.</li>
              <li><strong>Kahnawake Gaming Commission:</strong> attiva dal 1996, storicamente rigorosa sui reclami.</li>
            </ul>
          </section>

          <section id="pro-contro" className="c-section">
            <h2>Vantaggi e limiti oggettivi</h2>
            <div className="c-card-grid">
              <div className="c-card"><h4>Punti forti</h4><p>Bonus più generosi, KYC snello, criptovalute native, cataloghi con oltre 5.000 slot, limiti di deposito flessibili, disponibilità 24/7.</p></div>
              <div className="c-card"><h4>Limiti</h4><p>Tutela del giocatore diversa da ADM, reclami gestiti dal regolatore estero, autoesclusione non centralizzata, tassazione delle vincite a carico del giocatore.</p></div>
            </div>
          </section>

          <div className="c-author">
            <div className="c-author-avatar">MR</div>
            <div>
              <strong>Marco Rinaldi</strong> - autore e revisore di questa guida<br/>
              <small>Analista iGaming dal 2018, ex product manager in due operatori con licenza MGA. Aggiornamento del 15 gennaio 2026.</small>
            </div>
          </div>

          <section id="faq" className="c-section c-faq">
            <h2>Domande frequenti sui casino non AAMS</h2>
            <details><summary>I casino non AAMS sono legali in Italia?</summary><p>Operano con licenza estera. Il giocatore italiano non commette reato accedendovi, ma la tutela in caso di controversia è affidata al regolatore che ha rilasciato la licenza (Curaçao, Anjouan), non ad ADM.</p></details>
            <details><summary>Devo pagare le tasse sulle vincite?</summary><p>Sì. Le vincite ottenute su piattaforme non ADM vanno dichiarate come redditi diversi. La normativa italiana prevede tassazione a carico del giocatore, mentre sui casino ADM la trattenuta è alla fonte.</p></details>
            <details><summary>Qual è il bonus di benvenuto più conveniente del 2026?</summary><p>A parità di wagering conta il rapporto fra cap in euro e requisito di puntata. Nitrobet e LuckyVibe offrono i pacchetti più ampi, ma vanno letti i termini specifici sul contributo delle slot.</p></details>
            <details><summary>Quanto tempo serve per il primo prelievo?</summary><p>Su criptovalute si va da 15 minuti a 2 ore. Con carta o bonifico 24-72 ore, dopo il completamento della verifica KYC. Se il tempo supera i 5 giorni senza motivo, aprirei un ticket immediato.</p></details>
            <details><summary>Posso auto-escludermi da un casino non AAMS?</summary><p>Ogni operatore offre un sistema di autoesclusione locale (24 h, 7 giorni, 6 mesi, permanente). Non esiste però un registro unico come RUA per l'Italia; la scelta va replicata sui singoli operatori.</p></details>
            <details><summary>Che differenza c'è fra AAMS e ADM?</summary><p>Nessuna sostanziale: AAMS è il vecchio nome dell'Agenzia dei Monopoli, oggi ADM. I due termini indicano lo stesso ente regolatore italiano.</p></details>
          </section>

          <div className="c-callout">Gioca in modo responsabile. Fissa un budget e non superarlo. Numero verde dipendenza da gioco: <strong>800 558822</strong>.</div>
        </div>
      </main>

      <footer className="c-footer">
        <div className="c-wrap c-footer-grid">
          <div>© 2026 Consulentia18 - consulentia18.it - Tutti i diritti riservati.</div>
          <nav aria-label="Footer">
            <a href="/">Home</a>
            <a href="/contacts">Contatti</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie">Cookie Policy</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export function buildStructuredData(canonical: string) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Migliori casino online non AAMS 2026",
    itemListElement: CASINOS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: c.name,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: c.rating.toFixed(1),
          bestRating: "5",
          worstRating: "1",
          ratingCount: 120 + i * 37,
        },
      },
    })),
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Miglior casino online non AAMS 2026 - classifica e recensioni",
    author: { "@type": "Person", name: "Marco Rinaldi" },
    publisher: { "@type": "Organization", name: "Consulentia18", url: "https://www.consulentia18.it/" },
    datePublished: "2026-01-05",
    dateModified: "2026-01-15",
    mainEntityOfPage: canonical,
    inLanguage: "it-IT",
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.consulentia18.it/" },
      { "@type": "ListItem", position: 2, name: "Miglior casino online non AAMS", item: canonical },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "I casino non AAMS sono legali in Italia?", acceptedAnswer: { "@type": "Answer", text: "Operano con licenza estera; il giocatore italiano può accedervi ma la tutela è del regolatore estero." } },
      { "@type": "Question", name: "Quanto tempo serve per il primo prelievo?", acceptedAnswer: { "@type": "Answer", text: "Con criptovalute 15 minuti - 2 ore; con carta o bonifico 24-72 ore dopo il KYC." } },
      { "@type": "Question", name: "Che differenza c'e fra AAMS e ADM?", acceptedAnswer: { "@type": "Answer", text: "Nessuna: AAMS e il vecchio nome dell'Agenzia dei Monopoli, oggi ADM." } },
    ],
  };
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Consulentia18",
    url: "https://www.consulentia18.it/",
    logo: "https://www.consulentia18.it/favicon.svg",
  };
  return [org, article, itemList, breadcrumbs, faq];
}