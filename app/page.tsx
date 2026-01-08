import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Newsletter />
    </main>
  );
}
