import ClientSection from "@/components/landing/client-section";
import { FeaturesSection } from "@/components/landing/features-section";
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
      <ClientSection/>
      <SphereMask />
      <FeaturesSection />

    </div>
  );
}
