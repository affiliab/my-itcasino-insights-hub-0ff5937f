import type { ReactNode } from "react";

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="c-header">
        <div className="c-wrap c-nav">
          <a href="/" className="c-logo"><span className="c-logo-mark">C18</span><span>Consulentia18<small>consulentia18.it</small></span></a>
          <nav className="c-menu" aria-label="Menu principale">
            <a href="/">Casino Non AAMS</a>
            <a href="/contacts">Contatti</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/cookie">Cookie</a>
          </nav>
          <details className="c-menu-mobile" aria-label="Menu">
            <summary aria-label="Apri menu"><span className="c-burger" aria-hidden="true"><span/><span/><span/></span></summary>
            <div className="c-menu-mobile-panel">
              <a href="/">Casino Non AAMS</a>
              <a href="/contacts">Contatti</a>
              <a href="/privacy-policy">Privacy</a>
              <a href="/cookie">Cookie</a>
            </div>
          </details>
        </div>
      </header>
      <main>
        <div className="c-wrap">
          <nav className="c-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span>{title}</span></nav>
          <section className="c-hero"><h1 className="c-h1">{title}</h1></section>
          <section className="c-section">{children}</section>
        </div>
      </main>
      <footer className="c-footer">
        <div className="c-wrap c-footer-grid">
          <div>© 2026 Consulentia18 - consulentia18.it</div>
          <nav><a href="/">Home</a><a href="/contacts">Contatti</a><a href="/privacy-policy">Privacy Policy</a><a href="/cookie">Cookie Policy</a></nav>
        </div>
      </footer>
    </>
  );
}