import { ArrowRight, Globe, Building2, GraduationCap, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partnerCategories = [
  {
    title: "United Nations Affiliates",
    icon: Globe,
    partners: [
      {
        name: "UN-HABITAT",
        fullName: "United Nations Human Settlements Programme",
        tagline: "FOR A BETTER URBAN FUTURE",
        logoPath: "/partners/un-habitat.png", // Add logo path when available
      },
      {
        name: "United Nations Global Compact",
        fullName: "United Nations Global Compact",
        logoPath: "/partners/un-global-compact.png",
      },
      {
        name: "UNOSSC",
        fullName: "United Nations Office for South-South Cooperation",
        logoPath: "/partners/unossc.png",
      },
    ],
  },
  {
    title: "Government & Municipal Partners",
    icon: Building2,
    partners: [
      {
        name: "County Government of Kiambu",
        fullName: "County Government of Kiambu",
        tagline: "URUTAGWO MWIRUTI",
        logoPath: "/partners/kiambu-county.png",
      },
    ],
  },
  {
    title: "Waste Management & Circular Economy",
    icon: Recycle,
    partners: [
      {
        name: "Kenya Plastics Pact",
        fullName: "Kenya Plastics Pact",
        logoPath: "/partners/kenya-plastics-pact.png",
      },
      {
        name: "Waste Wise Cities",
        fullName: "Waste Wise Cities",
        logoPath: "/partners/waste-wise-cities.png",
      },
      {
        name: "Circular Economy Network",
        fullName: "Circular Economy Network",
        logoPath: "/partners/circular-economy-network.png",
      },
      {
        name: "UK Circular Plastics Network",
        fullName: "UK Circular Plastics Network",
        logoPath: "/partners/uk-circular-plastics-network.png",
      },
      {
        name: "ISWA",
        fullName: "International Solid Waste Association",
        logoPath: "/partners/iswa.png",
      },
    ],
  },
  {
    title: "Academic & Research Partners",
    icon: GraduationCap,
    partners: [
      {
        name: "University of East London",
        fullName: "University of East London",
        logoPath: "/partners/university-east-london.png",
      },
      {
        name: "arena",
        fullName: "Advancing Resource Efficiency & Urban Ecology Innovations",
        tagline: "advancing resource efficiency and urban ecology innovations",
        logoPath: "/partners/arena.png",
      },
    ],
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Memberships & Partnerships</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            De-Graft collaborates with leading organizations, institutions, and networks to advance sustainable resource management and urban development.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="space-y-16 mb-16">
          {partnerCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-brand" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">{category.title}</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div
                      key={partnerIndex}
                      className="rounded-xl bg-panel border border-border p-6 shadow-card hover:shadow-lg transition-all group"
                    >
                      {/* Logo Container */}
                      <div className="mb-4 h-24 flex items-center justify-center">
                        {partner.logoPath ? (
                          <img
                            src={partner.logoPath}
                            alt={`${partner.name} logo`}
                            className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        <div className={`text-center ${partner.logoPath ? 'hidden' : ''}`}>
                          <div className="h-16 w-16 mx-auto rounded-lg bg-brand/10 flex items-center justify-center mb-2">
                            <IconComponent className="h-8 w-8 text-brand" />
                          </div>
                        </div>
                      </div>

                      {/* Partner Info */}
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-brand transition-colors">
                        {partner.name}
                      </h3>
                      {partner.fullName && partner.fullName !== partner.name && (
                        <p className="text-xs text-muted mb-2">{partner.fullName}</p>
                      )}
                      {partner.tagline && (
                        <p className="text-xs text-muted italic">{partner.tagline}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Opportunities */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-brand p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-lg text-brand-foreground/90 mb-8 max-w-2xl mx-auto">
            Interested in collaborating with De-Graft? We're always looking for innovative partners to advance sustainable resource management.
          </p>
          
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-panel text-brand hover:bg-panel/90"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
