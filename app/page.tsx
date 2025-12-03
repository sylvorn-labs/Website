import { HeroSection } from "@/components/pages/HeroSection";
import { AboutSection } from "@/components/pages/AboutSection";
import { StayTunedSection } from "@/components/pages/StayTunedSection";
import { AnimatedBackground } from "@/components/pages/AnimatedBackground";

export default function Page() {
  return (
    <>
      {/* Animated Background - Fixed with scroll zoom effect */}
      <AnimatedBackground />

      {/* Page Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <StayTunedSection />
      </main>
    </>
  );
}
