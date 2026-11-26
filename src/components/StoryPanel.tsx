import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export default function StoryPanel() {
  return (
    <section className="story-section section-pad" id="story" aria-labelledby="story-title">
        <video
      className="story-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="A short, looping view of the dining room"
    >
      <source src="/images/location.mp4" type="video/mp4" />
    </video>
        <span className="photo-label">A place at the table</span>
      <div className="story-copy">
        <p className="eyebrow">Sedikit Tentang Kami</p>
        <h2 id="story-title">Bertempat disini.<br /><em>dibuka untuk semua.</em></h2>
        <p className="story-lede">di sini, Makanan yang berkesan adalah hal yang terjadi disekitar.</p>
        <p>{restaurant.story}</p>
        <a className="text-link" href="#visit">Kunjungi Kami <span aria-hidden="true">↗</span></a>
        <div className="signature"><span aria-hidden="true">✳</span><span>Cooked with care<br /><em>Chicago, always</em></span></div>
      </div>
    </section>
  );
}
