import { restaurant } from "@/data/restaurant";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Tentang Kami" },
  { href: "#visit", label: "Kunjungi Kami" },
  { href: "#faq", label: "FAQs" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label={`${restaurant.name}, home`}>
          <img src="/images/logo-header.png" alt="" width={50} height={75} />
          <span>{restaurant.name}<small>Kuliner Jawa Tengah</small></span>
        </a>
        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <a className="nav-reserve" href={`mailto:${restaurant.email}?subject=Table%20request`}>
          Reserve <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
