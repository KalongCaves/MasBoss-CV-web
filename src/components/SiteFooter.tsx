import { restaurant } from "@/data/restaurant";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-mark" href="#home"><img src="/images/logo-masbos.png" alt="" width={100} height={135} /></a>
        <p>Cita Rasa.<br /><em>Menggugah Selera.</em></p>
        <a className="footer-reserve" href={`mailto:${restaurant.email}?subject=Table%20request`}>Make an evening of it <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Masakan MasBoss</span>
        <span>Kuliner Jawa Tengah · Bandung</span>
        <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
      </div>
    </footer>
  );
}
