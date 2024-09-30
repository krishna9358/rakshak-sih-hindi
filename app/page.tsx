import HeroSection from "@/components/landing/hero-section";
import BgParticles from "@/components/landing/particles";
import { SphereMask } from "@/components/landing/sphere-mask";
import Navbar from "@/components/navbar";

export default function Home() {

  return (
    <div >
      <Navbar />
      <HeroSection />
      <BgParticles />
      <SphereMask />

    </div>
  );
}
