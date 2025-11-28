import { Award, MapPin } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";

const awards = [
  {
    title: "PropTech Innovation of the Year",
    year: "2024",
    imageSrc: "/awards/proptech-innovation-2024.png",
    imageAlt: "PropTech Innovation Award 2024"
  },
  {
    title: "ESG Impact Award",
    year: "2023",
    imageSrc: "/awards/esg-impact-2023.png",
    imageAlt: "ESG Impact Award 2023 for sustainability"
  },
  {
    title: "GovTech Pilot Winner",
    year: "2023",
    imageSrc: "/awards/govtech-pilot-2023.png",
    imageAlt: "GovTech Pilot Winner Award 2023"
  },
  {
    title: "Customer Choice Award",
    year: "2024",
    imageSrc: "/awards/customer-choice-2024.png",
    imageAlt: "Customer Choice Award 2024"
  },
];

const team = [
  {
    name: "Samuel De-Graft",
    role: "Founder & CEO",
    bio: "Former property management director with 15 years leading operations for multinational banks.",
    imageSrc: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    imageAlt: "Professional executive portrait",
  },
  {
    name: "Ama Osei",
    role: "Chief Product Officer",
    bio: "IoT and smart cities expert. Previously led asset management platforms for telecom operators.",
    imageSrc: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    imageAlt: "Product officer professional headshot",
  },
  {
    name: "David Mensah",
    role: "Head of Engineering",
    bio: "Built scalable SaaS platforms for 10+ years. Passionate about clean code and user experience.",
    imageSrc: "https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg?auto=compress&cs=tinysrgb&w=400",
    imageAlt: "Engineering leader professional portrait",
  },
  {
    name: "Grace Kimani",
    role: "Regional Director, East Africa",
    bio: "15 years in municipal waste management. Drives our sustainability and ESG initiatives.",
    imageSrc: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=400",
    imageAlt: "Regional director professional portrait",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="relative mb-20 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Diverse business team collaborating in modern office"
          className="absolute inset-0 h-full w-full object-cover -z-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg/90 -z-10" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Built with Africa in mind — deployed globally</h1>
            <p className="text-lg md:text-xl text-muted">
              De-Graft was born from the challenges of managing property, assets, and waste across multiple African markets. We deliver world-class software with on-the-ground support that understands your reality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mb-20 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Entrepreneur working on startup vision"
                className="mb-6 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <p className="text-muted mb-4">
                Founded in 2020, De-Graft emerged from real frustration: spreadsheets, paper files, and disconnected systems that made it nearly impossible to manage large property portfolios efficiently.
              </p>
              <p className="text-muted">
                We knew there had to be a better way—one that didn't require a PhD in software engineering or a massive IT budget.
              </p>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Innovation and technology for smart cities"
                className="mb-6 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-muted mb-4">
                To replace manual processes with intelligent automation that anyone can use. To prove that operational excellence and sustainability aren't luxuries—they're achievable with the right tools.
              </p>
              <p className="text-muted">
                We're building the operating system for property, asset, and waste management across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Awards & Recognition</h2>
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

      {/* Team */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet the Team</h2>
            <p className="text-lg text-muted">
              Leadership with deep industry experience and a passion for solving real problems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  className="mx-auto mb-4 h-32 w-32 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />

                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-brand mb-3">{member.role}</p>
                <p className="text-sm text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="mb-20 bg-brand text-brand-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-brand-foreground">Global Reach, Local Support</h2>
            <p className="text-lg text-brand-foreground/90 max-w-2xl mx-auto">
              Headquartered in London with operational teams in Ghana and Kenya, we provide 24/7 support and on-site training.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Global business presence and international operations"
            className="mx-auto mb-12 h-64 w-full max-w-4xl object-cover rounded-xl opacity-80"
            loading="lazy"
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-brand-foreground/80" />
              <h3 className="text-xl font-semibold mb-1">London</h3>
              <p className="text-sm text-brand-foreground/80">UK Headquarters</p>
            </div>

            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-brand-foreground/80" />
              <h3 className="text-xl font-semibold mb-1">Accra</h3>
              <p className="text-sm text-brand-foreground/80">West Africa Hub</p>
            </div>

            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-brand-foreground/80" />
              <h3 className="text-xl font-semibold mb-1">Nairobi</h3>
              <p className="text-sm text-brand-foreground/80">East Africa Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join hundreds of organizations transforming operations"
        primaryText="Book a Demo"
        secondaryText="Contact Us"
        secondaryHref="/contact"
        backgroundImageSrc="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundImageAlt="Professional business meeting and consultation"
      />
    </div>
  );
}
