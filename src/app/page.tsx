import {
  Navbar,
  Hero,
  FeaturesSummary,
  HowItWorks,
  AppShowcase,
  RolePillars,
  StatsStrip,
  Testimonials,
  CTA,
  Footer,
} from "@/components/landing";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesSummary />
        <HowItWorks />
        <AppShowcase />
        <RolePillars />
        <StatsStrip />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
