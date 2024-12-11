import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import HeroSection from "@/components/landing/hero-section";
import BgParticles from "@/components/landing/particles";
import { SphereMask } from "@/components/landing/sphere-mask";
import Navbar from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {

  return (
    
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <BgParticles />
      <ClientSection/>
      <SphereMask />
      <FeaturesSection />
      {/* <img src="/budget.jpeg" className="block mx-auto rounded-[inherit] w-[900px] h-full object-contain"/> */}
      <CallToActionSection/>
      <SiteFooter />
      
      <script async src="https://automatic.chat/embed.js" id="cm1s9u51v01regfpjv0lsfu9t" ></script>
    </div>
    
  );
}

