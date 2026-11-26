import SiteHeader from "@/components/SiteHeader";
import LandingHero from "@/components/LandingHero";
import SeasonalMenu from "@/components/SeasonalMenu";
import StoryPanel from "@/components/StoryPanel";
import VisitUs from "@/components/VisitUs";
import Questions from "@/components/Questions";
import SiteFooter from "@/components/SiteFooter";
import { restaurant } from "@/data/restaurant";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <LandingHero />
        <section className="intro-band" id="welcome" aria-label="Welcome">
          <p className="intro-kicker">Kuliner Jawa Tengah</p>
          <p className="intro-statement">{restaurant.intro}</p>
          <p className="intro-aside">tempat di mana kuliner khas Jawa Tengah disajikan dengan penuh cinta dan perhatian..</p>
        </section>
        <SeasonalMenu />
        <StoryPanel />
        <VisitUs />
        <Questions />
      </main>
      <SiteFooter />
    </>
  );
}