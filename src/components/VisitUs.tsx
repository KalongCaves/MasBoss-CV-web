import { googleMapsEmbedUrl, googleMapsUrl, restaurant } from "@/data/restaurant";

export default function VisitUs() {
  return (
    <section className="visit-section section-pad" id="visit" aria-labelledby="visit-title">
      <div className="visit-heading">
        <p className="eyebrow">Masakan MasBoss Menunggumu!</p>
        <h2 id="visit-title">Ayo <em>Datang!.</em></h2>
        <p>Cari Kami di sini!. Buat kesan yang tak terlupakan.</p>
      </div>
      <div className="visit-grid">
        <div className="visit-details">
          <div className="visit-block">
            <p className="eyebrow">Find us</p>
            <a className="address-link"target="_blank" rel="noreferrer"><address>{restaurant.address}</address><span aria-hidden="true"></span></a>
            <a className="text-link" href={googleMapsUrl} target="_blank" rel="noreferrer">Buka di Google Maps <span aria-hidden="true">↗</span></a>
          </div>
          <div className="visit-block">
            <p className="eyebrow">Hours</p>
            <dl className="hours-list">
              {restaurant.hours.map((row) => <div key={row.days}><dt>{row.days}</dt><dd>{row.time}</dd></div>)}
            </dl>
          </div>
          <div className="visit-block visit-contact">
            <p className="eyebrow">A question?</p>
            <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
            <a href={`tel:${restaurant.phone.replace(/[^+\d]/g, "")}`}>{restaurant.phone}</a>
          </div>
        </div>
        <div className="map-frame">
          <iframe title={`Map showing ${restaurant.address}`} src={googleMapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a className="map-open" href={googleMapsUrl} target="_blank" rel="noreferrer">Open map <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
