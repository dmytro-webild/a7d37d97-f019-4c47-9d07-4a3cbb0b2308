"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { AlertTriangle, Clock, Shield, Zap, MessageSquare, Database, TrendingUp, Search, Cpu, Layers } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="large"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",          id: "services"},
        {
          name: "Process",          id: "process"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Arman Digital"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Automate Growth and Engineering Excellence for Your Business"
      description="Empowering solar EPC companies with AI-powered sales systems and integrated infrastructure for a sustainable future."
      buttons={[
        {
          text: "Book a Demo",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-background-connecting-lines-dots_1048-7966.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/workers-using-ai-computing-simulation_482257-75500.jpg",          alt: "AI simulation worker"},
        {
          src: "http://img.b2bpic.net/free-photo/businessman-working-futuristic-office_23-2151003753.jpg",          alt: "Futuristic office workspace"},
        {
          src: "http://img.b2bpic.net/free-photo/businesswoman-networking-using-digital-devices_53876-101875.jpg",          alt: "Businesswoman networking"},
        {
          src: "http://img.b2bpic.net/free-photo/person-using-ar-technology-their-daily-occupation_23-2151137317.jpg",          alt: "AR tech user"},
        {
          src: "http://img.b2bpic.net/free-photo/modern-businessman-uses-virtual-reality-gadget-neural-network-system_482257-126216.jpg",          alt: "VR business professional"},
      ]}
      avatarText="Trusted by 500+ solar energy innovators worldwide"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "AI Lead Generation",          description: "Automated pipeline management specifically configured for the solar EPC lifecycle.",          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-ai-data-visualization_23-2151977857.jpg",          buttonIcon: Zap,
        },
        {
          title: "Customer Support AI",          description: "24/7 intelligent response systems that resolve queries instantly and qualify leads.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-using-transparent-tablet-innovative-technology_53876-97074.jpg",          buttonIcon: MessageSquare,
        },
        {
          title: "Smart Data Integration",          description: "Unified data pipelines that connect your CRM, engineering tools, and solar project management.",          imageSrc: "http://img.b2bpic.net/free-photo/person-touching-tablet-graphics-coming-out-it_1232-1399.jpg",          buttonIcon: Database,
        },
        {
          title: "Sales Performance Optimization",          description: "Advanced analytics to optimize sales velocity and reduce project lead abandonment.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-watching-business-conference-computer-screen-looking-statistics_482257-125563.jpg",          buttonIcon: TrendingUp,
        },
      ]}
      title="Our Specialized Solutions"
      description="Precision-engineered AI systems tailored to the solar industry's most critical growth drivers."
    />
  </div>

  <div id="lead-management" data-section="lead-management">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Zero Leakage",          description: "Our automated funnel ensures every lead is captured, tracked, and nurtured until conversion.",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-data-flow-network_23-2149151161.jpg",          buttonIcon: Shield,
        },
        {
          title: "Maximum ROI",          description: "Optimize every customer touchpoint to maximize revenue and reduce project abandonment.",          imageSrc: "http://img.b2bpic.net/free-photo/financial-growth-arrow-chart-3d-icon_56104-1929.jpg",          buttonIcon: TrendingUp,
        },
        {
          title: "Automated Qualification",          description: "AI-driven scoring that instantly prioritizes high-value prospects for your sales team.",          imageSrc: "http://img.b2bpic.net/free-photo/ai-computing-digital-brain-concept_53876-101875.jpg",          buttonIcon: Cpu,
        },
        {
          title: "Continuous Improvement",          description: "Automated feedback loops to refine your sales strategies based on real-time performance metrics.",          imageSrc: "http://img.b2bpic.net/free-photo/business-analytics-dashboard_23-2151003753.jpg",          buttonIcon: Zap,
        },
      ]}
      title="Maximum ROI. Zero Leakage."
      description="Revolutionizing your lead management infrastructure with precision-engineered AI automation."
    />
  </div>

  <div id="problem" data-section="problem">
      <AboutMetric
      useInvertedBackground={false}
      title="Solving Industry Bottlenecks"
      metrics={[
        {
          icon: AlertTriangle,
          label: "Lead Leakage",          value: "Eliminated"},
        {
          icon: Clock,
          label: "Response Time",          value: "Instant"},
        {
          icon: Shield,
          label: "Pipeline Reliability",          value: "High"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "$10M+",          title: "Revenue Generated",          description: "Tangible revenue growth for our partners through optimized systems.",          imageSrc: "http://img.b2bpic.net/free-photo/glow-arrow-graph-analytics-3d-icon-bubble-speech-chat-3d-rendering_56104-1929.jpg"},
        {
          id: "m2",          value: "24/7",          title: "Response Availability",          description: "Instant support ensuring no solar potential buyer goes cold.",          imageSrc: "http://img.b2bpic.net/free-photo/man-with-clock-graph-fire_1134-464.jpg"},
        {
          id: "m3",          value: "3x",          title: "Lead Conversion",          description: "Engineered growth through intelligent data integration.",          imageSrc: "http://img.b2bpic.net/free-photo/data-network-abstract-concept_23-2152004105.jpg"},
      ]}
      title="Quantifiable impact we deliver for our high-growth partners"
      description="Driven by data, engineered for dominance."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Discovery",          description: "Understanding your existing sales engineering challenges.",          imageSrc: "http://img.b2bpic.net/free-photo/data-hand_23-2151957116.jpg",          buttonIcon: Search,
        },
        {
          title: "AI Strategy",          description: "Defining the roadmap for infrastructure automation.",          imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126876.jpg",          buttonIcon: Cpu,
        },
        {
          title: "Integration",          description: "Seamlessly layering AI into your daily operational workflow.",          imageSrc: "http://img.b2bpic.net/free-photo/business-concept-with-progress-close-up_23-2149151161.jpg",          buttonIcon: Layers,
        },
        {
          title: "Growth",          description: "Continuous monitoring and rapid optimization.",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-background-cyclist-design_183364-118217.jpg",          buttonIcon: TrendingUp,
        },
      ]}
      title="The Arman Process"
      description="Our four-stage framework ensures your infrastructure is optimized for performance."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "How fast is integration?",          content: "Our modular integration typically deploys in 4-6 weeks."},
        {
          id: "2",          title: "Is the AI compliant?",          content: "We ensure full compliance with regional solar sector regulations."},
        {
          id: "3",          title: "Can I keep my current CRM?",          content: "Yes, our systems are built for plug-and-play compatibility."},
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about scaling your solar EPC with Arman."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "SunTech Corp",        "Global Energy Grid",        "SolarSolutions",        "FuturePower",        "Green EPC",        "Energy Innovators",        "BrightGrid"]}
      title="Trusted by Solar Leaders"
      description="Industry partners driving the energy transition with Arman digital infrastructure."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Schedule your free discovery call to receive a custom AI growth strategy roadmap. No obligation, just actionable insights."
      buttons={[
        {
          text: "Get Consultation",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Arman Digital Infrastructure"
      columns={[
        {
          title: "Platform",          items: [
            {
              label: "Solutions",              href: "#services"},
            {
              label: "Process",              href: "#process"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Claim Your Free Audit",              href: "#contact"},
          ],
        },
      ]}
      copyrightText="© 2025 | Arman Digital Infrastructure"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}