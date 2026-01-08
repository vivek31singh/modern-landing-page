import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";
import siteData from "@/content/site-data.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero data={siteData.hero} />
      <SocialProof data={siteData.socialProof} />
      <Features data={siteData.features} />
      <Pricing data={siteData.pricing} />
      <FAQ data={siteData.faq} />
      <Newsletter data={siteData.newsletter} />
    </main>
  );
}
