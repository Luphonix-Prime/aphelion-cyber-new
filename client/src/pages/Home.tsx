import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import PlatformOverview from "@/components/home/PlatformOverview";
import Testimonials from "@/components/home/Testimonials";
import SecuritySolutions from "@/components/home/SecuritySolutions";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/home/ContactForm";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aphelion Cyber Security - Advanced Protection for Enterprises</title>
        <meta name="description" content="Protect your organization with our comprehensive security platform. Detect, respond, and remediate threats before they impact your business." />
        <meta property="og:title" content="Aphelion Cyber Security - Advanced Protection for Enterprises" />
        <meta property="og:description" content="Protect your organization with our comprehensive security platform. Detect, respond, and remediate threats before they impact your business." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
        <Hero />
        <Features />
        <PlatformOverview />
        <Testimonials />
        <SecuritySolutions />
        <CTA />
        <ContactForm />
      </div>
    </>
  );
}
