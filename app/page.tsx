import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import HomeMediaGrid from "./components/HomeMediaGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <HeroCarousel />
        <HomeMediaGrid />
      </main>

      <Footer />
    </div>
  );
}
