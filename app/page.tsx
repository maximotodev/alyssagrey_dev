import Navbar from "@/app/ui/Navbar";
import Hero from "./components/Hero";
import Videos from "./components/Videos";
import TracksClientCarousel from "./components/TracksClientCarousel";

export default function Page() {
  return (
    <div>
      <Navbar />

      {/* Page Content with Centered Sections */}
      <section id="home" className="h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section
        id="videos"
        className="h-screen flex items-center justify-center"
      >
        <Videos
          videos={["TTGO1yEHCo4", "tW5S0QgE2xY", "0a41vafO-V0", "SClBrbb9cYM"]}
        />
      </section>

      <section id="music" className="h-screen flex items-center justify-center">
        <TracksClientCarousel />
      </section>

      <section
        id="events"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Events</h1>
      </section>
    </div>
  );
}
