import Image from "next/image";
import { buildWhatsAppOrderUrl, restaurant } from "@/data/restaurant";

export default function SeasonalMenu() {
  return (
    <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
      <div className="section-heading menu-heading">
        <p className="eyebrow">Dari Dapur · Sampai ke Pelanggan</p>
        <h2 id="menu-title">Menu yang tersedia<br /><em>di Warung kami.</em></h2>
        <p className="section-intro">**Beberapa Menu mungkin harus dipesan terlebih dahulu.</p>
      </div>
      <div className="menu-layout">
        <div className="dish-list">
          {restaurant.menu.map((dish) => (
            <article className="dish-row" key={dish.number}>
              <span className="dish-number">{dish.number}</span>
              <div className="dish-copy">
                <h3>{dish.name}</h3>
                <p>{dish.detail}</p>
                {dish.preOrderLinks && dish.preOrderLinks.length > 0 && (
                  <div className="pre-order-links" aria-label={`${dish.name} pre-order options`}>
                    {dish.preOrderLinks.map((option) => (
                      <a
                        key={option.label}
                        href={buildWhatsAppOrderUrl(option.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${option.label} on WhatsApp`}
                      >
                        {option.label}<span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <span className="dish-flourish" aria-hidden="true">✳</span>
            </article>
          ))}
          <p className="menu-note">Beberapa Menu mungkin harus dipesan terlebih dahulu.</p>
        </div>
        <aside className="menu-aside">
          <div className="menu-photo"><Image src="/images/soto-preview.jpeg" alt="A colorful seasonal plate with vegetables, herbs, and citrus" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
          <div className="price-note">
            <p className="eyebrow">Main Dish Signature</p>
            <p className="price">Rp.10.000 <span>/ Porsi</span></p>
            <p>Soto Jawa Special MasBoss</p>
            <p>Soto Ayam Jawa dengan Kuah soto khas masboss tanpa merusak cita rasa Soto Jawa asli.</p>
            <a className="text-link" href="https://wa.me/628122084366?text=Halo%20Masakan%20Masboss%2C%20saya%20mau%20tanya%20tentang%20menu%20yang%20tersedia." target="_blank" rel="noreferrer noopener" aria-label="Ask us about the menu">Ask us about the menu <span aria-hidden="true">↗</span></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
