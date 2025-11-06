import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const webinars = [
  {
    title: "Property Management Masterclass: From Spreadsheets to Smart Systems",
    date: "2025-02-15",
    duration: "45 min",
    status: "upcoming",
    description: "Learn how leading property managers eliminated spreadsheets and cut admin time by 50%.",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Modern property management technology",
  },
  {
    title: "ESG Reporting Made Easy: Automating Sustainability Metrics",
    date: "2025-01-28",
    duration: "60 min",
    status: "upcoming",
    description: "Discover how to generate Scope 3 waste reports in minutes and meet stakeholder demands.",
    image: "https://images.pexels.com/photos/8101881/pexels-photo-8101881.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Sustainability reporting and ESG metrics",
  },
  {
    title: "Predictive Maintenance: AI-Driven Asset Management",
    date: "2024-12-10",
    duration: "50 min",
    status: "recorded",
    description: "Watch how telecom operators achieved 99.8% uptime with IoT-enabled predictive maintenance.",
    image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Industrial asset management and IoT",
  },
  {
    title: "Multi-Site Waste Optimization for Municipalities",
    date: "2024-11-20",
    duration: "40 min",
    status: "recorded",
    description: "Case study: How a UK council diverted 64% of waste and saved £2.1M annually.",
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Municipal waste management operations",
  },
];

export default function Webinars() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-6">Webinars</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl">
            Join live sessions with industry experts or watch on-demand recordings to deepen your knowledge.
          </p>
        </div>

        {/* Webinar Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {webinars.map((webinar, index) => (
            <div
              key={index}
              className="group rounded-xl bg-panel border border-border shadow-card hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={webinar.image}
                  alt={webinar.imageAlt}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className={`absolute top-4 right-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium shadow-lg ${
                    webinar.status === "upcoming"
                      ? "bg-brand text-brand-foreground"
                      : "bg-white/90 text-slate-900"
                  }`}
                >
                  {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(webinar.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {webinar.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand transition-colors">
                  {webinar.title}
                </h3>
                <p className="text-muted mb-6">{webinar.description}</p>

                <Button 
                  variant={webinar.status === "upcoming" ? "default" : "outline"}
                  className="w-full"
                >
                  {webinar.status === "upcoming" ? "Register Now" : "Watch Recording"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center rounded-2xl bg-secondary/50 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want a private demo for your team?
          </h3>
          <p className="text-lg text-muted mb-6">
            We'll tailor a session to your specific use case and answer all your questions.
          </p>
          <Button asChild size="lg">
            <a href="/contact">
              Book a Private Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
