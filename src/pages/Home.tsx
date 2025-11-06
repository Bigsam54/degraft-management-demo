import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import {
  Building,
  Recycle,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  FileCheck,
  Wrench,
  ClipboardCheck,
  Package,
  Settings,
  TrendingUp,
  Trash2,
  Route,
  Award,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";

const solutionTabs = [
  { id: "property", label: "Property" },
  { id: "asset", label: "Asset" },
  { id: "waste", label: "Waste" },
];

const solutionFeatures = {
  property: [
    {
      icon: Building,
      title: "Portfolio Overview",
      description: "Complete visibility across all properties",
      imageSrc: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Modern building property management",
    },
    {
      icon: Wrench,
      title: "Work Orders",
      description: "Automated ticketing and vendor coordination",
      imageSrc: "https://images.pexels.com/photos/6173350/pexels-photo-6173350.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Maintenance worker managing facilities",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance",
      description: "Track certifications and audit requirements",
      imageSrc: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Professional reviewing compliance documentation",
    },
  ],
  asset: [
    {
      icon: Package,
      title: "Lifecycle & Registers",
      description: "Complete asset history and documentation",
      imageSrc: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Technician working on industrial equipment",
    },
    {
      icon: Settings,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance and alerts",
      imageSrc: "https://images.pexels.com/photos/8369505/pexels-photo-8369505.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Engineer performing preventive maintenance",
    },
    {
      icon: TrendingUp,
      title: "IoT & Analytics",
      description: "Real-time monitoring and insights",
      imageSrc: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "IoT sensors and monitoring technology",
    },
  ],
  waste: [
    {
      icon: Trash2,
      title: "Streams & Segregation",
      description: "Track waste by type and location",
      imageSrc: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Recycling and waste management facility",
    },
    {
      icon: Route,
      title: "Collections & Routes",
      description: "Optimize pickup schedules and routes",
      imageSrc: "https://images.pexels.com/photos/6739941/pexels-photo-6739941.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Waste collection vehicle operations",
    },
    {
      icon: BarChart3,
      title: "ESG Reporting",
      description: "Automated sustainability metrics",
      imageSrc: "https://images.pexels.com/photos/8101881/pexels-photo-8101881.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Sustainability and environmental reporting",
    },
  ],
};

const solutionBackgrounds = {
  property: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920",
  asset: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1920",
  waste: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920",
};

const solutionBackgroundAlts = {
  property: "Modern property and building infrastructure",
  asset: "Industrial infrastructure and asset management",
  waste: "Sustainable waste management operations",
};

const awards = [
  {
    title: "PropTech Innovation",
    year: "2024",
    imageSrc: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Award ceremony with trophy",
  },
  {
    title: "ESG Impact Award",
    year: "2023",
    imageSrc: "https://images.pexels.com/photos/7551661/pexels-photo-7551661.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Recognition and achievement celebration",
  },
  {
    title: "GovTech Pilot Winner",
    year: "2023",
    imageSrc: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Professional achievement award presentation",
  },
  {
    title: "Customer Choice",
    year: "2024",
    imageSrc: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Team celebrating customer success",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"property" | "asset" | "waste">("property");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <Badge className="mb-6">Property • Asset • Waste</Badge>
        
        <h1 className="text-balance mb-6">
          Replace spreadsheets with a single platform for Property, Asset & Waste Management
        </h1>
        
        <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl">
          Cloud software that automates key processes, reduces fraud, and cuts costs for banks, insurers, telecoms, and public estates.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/solutions">See Platform</Link>
          </Button>
        </div>
      </div>

      {/* Dashboard Mock */}
      <div className="rounded-2xl bg-panel border border-border p-6 shadow-card">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Platform Overview</h3>
            <Badge variant="default">Live</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-brand/5 p-4">
              <div className="text-2xl font-bold text-brand">98.2%</div>
              <div className="text-sm text-muted">Asset Health</div>
            </div>
            <div className="rounded-lg bg-accent-blue/5 p-4">
              <div className="text-2xl font-bold text-accent-blue">64%</div>
              <div className="text-sm text-muted">Waste Diverted</div>
            </div>
            <div className="col-span-2 rounded-lg bg-accent-gold/5 p-4">
              <div className="text-2xl font-bold text-accent-gold">≈ 47%</div>
              <div className="text-sm text-muted">OPEX Savings</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Operations</span>
              <span className="font-medium">94%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-[94%] bg-brand rounded-full" />
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="py-12 bg-panel border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted">
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand" />
              Banks & Insurance
            </span>
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-blue" />
              Telecoms
            </span>
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-gold" />
              Municipalities
            </span>
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand" />
              Facilities
            </span>
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-blue" />
              ESG Teams
            </span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Secure & Cloud-Hosted"
              description="Bank-grade security with SOC 2 compliance and encrypted data storage."
              imageSrc="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Secure data center with cloud infrastructure"
            />
            <FeatureCard
              icon={Brain}
              title="AI-Ready Workflows"
              description="Smart automation that learns from your processes and reduces manual work."
              imageSrc="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="AI and automation technology in action"
            />
            <FeatureCard
              icon={BarChart3}
              title="Real-Time Analytics"
              description="Actionable insights and custom reports that drive better decisions."
              imageSrc="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Business professionals analyzing data on screens"
            />
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="relative py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Solutions that work together</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              One platform for all your property, asset, and waste management needs.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {solutionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-brand text-brand-foreground shadow-md border-2 border-brand"
                    : "bg-panel border border-border text-muted hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-3 gap-6">
            {solutionFeatures[activeTab].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/solutions">
                View All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-16 md:py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Measurable Impact</h2>
            <p className="text-lg text-muted">Real results from our customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StatCard value="47%" label="Average OPEX reduction" />
            <StatCard value="99.9%" label="Data accuracy & audit trail" />
            <StatCard value="64%" label="Waste diversion rate" />
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Transform Your Operations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="rounded-xl bg-panel border border-border p-8 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6186808/pexels-photo-6186808.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cluttered paperwork and manual processes"
                className="-mx-8 -mt-8 mb-6 h-48 w-full object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <X className="h-6 w-6 text-destructive" />
                Without De-Graft
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted">Scattered data across multiple spreadsheets</span>
                </li>
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted">Manual processes prone to errors</span>
                </li>
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted">No real-time visibility into operations</span>
                </li>
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted">Compliance tracking done manually</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="rounded-xl bg-brand/5 border border-brand/30 p-8 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern digital workspace with team collaboration"
                className="-mx-8 -mt-8 mb-6 h-48 w-full object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Check className="h-6 w-6 text-brand" />
                With De-Graft
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-text">Single source of truth for all data</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-text">Automated workflows with AI assistance</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-text">Live dashboards and instant reports</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-text">Automated alerts and compliance tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recognized Excellence</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="rounded-xl bg-panel border border-border p-6 text-center overflow-hidden"
              >
                <img
                  src={award.imageSrc}
                  alt={award.imageAlt}
                  className="-mx-6 -mt-6 mb-4 h-28 w-full object-cover"
                  loading="lazy"
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/20 mx-auto mb-4">
                  <Award className="h-6 w-6 text-accent-gold" />
                </div>
                <h4 className="font-semibold mb-1">{award.title}</h4>
                <p className="text-sm text-muted">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="See the platform in action"
        description="Join hundreds of organizations that have transformed their operations with De-Graft."
        primaryText="Book a Demo"
        secondaryText="Contact Sales"
        secondaryHref="/contact"
        backgroundImageSrc="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundImageAlt="Professional business meeting and consultation"
      />
    </div>
  );
}
