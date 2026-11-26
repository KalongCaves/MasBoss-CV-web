import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export default function LandingHero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Image className="hero-image" src="/images/header-hero.jpg" alt="A warmly lit dining table set for an evening meal" fill priority sizes="100vw" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span /> {restaurant.descriptor}</p>
        <h1 id="hero-title">Cita Rasa.<br /><em>Menggugah Selera.</em></h1>
        <p className="hero-intro">Good food, good company, and a little more time around the table.</p>
        <div className="hero-actions">
          <a className="button button-light" href="https://wa.me/628122084366?text=Halo%20Masakan%20Masboss%2C%20saya%20mau%20pesan%20PO.%20Boleh%20info%20menu%20dan%20jadwal%20PO%20berikutnya%3F%20Terima%20kasih." target="_blank" rel="noreferrer noopener" aria-label="Pre Order on WhatsApp"> Pre Order <span aria-hidden="true">↗</span></a>
          <a className="text-link text-link-light" href="#menu">Lihat Menu <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-caption"><span>Masboss</span><span>Cileunyi,Bandung</span></div>
      <a className="hero-scroll" href="#welcome" aria-label="Scroll to discover">↓</a>
    </section>
  );
}
