import {
  Navbar,
  Hero,
  HowItWorks,
  Features,
  AppShowcase,
  TrustPrivacy,
  ConversationsHighlight,
  Testimonials,
  CTA,
  Footer,
} from "@/components/landing";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <AppShowcase />
        <TrustPrivacy />
        <ConversationsHighlight />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
