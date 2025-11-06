import { Play } from "lucide-react";

const videos = [
  {
    title: "Platform Overview (2 min)",
    description: "Quick tour of the De-Graft platform and its key capabilities.",
    thumbnail: "platform-overview",
  },
  {
    title: "Property Management Module (5 min)",
    description: "Deep dive into portfolio management, work orders, and compliance tracking.",
    thumbnail: "property-module",
  },
  {
    title: "Asset Management Module (6 min)",
    description: "Learn about predictive maintenance, IoT integration, and cost analytics.",
    thumbnail: "asset-module",
  },
  {
    title: "Waste Management Module (4 min)",
    description: "See how route optimization and ESG reporting work in action.",
    thumbnail: "waste-module",
  },
  {
    title: "Customer Testimonial: UK Council",
    description: "How a municipal authority saved £2.1M and achieved 64% waste diversion.",
    thumbnail: "testimonial-council",
  },
  {
    title: "Customer Testimonial: Telecom Provider",
    description: "99.8% uptime and 35% cost reduction with predictive maintenance.",
    thumbnail: "testimonial-telecom",
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-6">Videos</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl">
            Watch tutorials, feature demos, and customer success stories to see De-Graft in action.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-xl bg-brand/10 border border-border mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-brand/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-brand-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold mb-2 group-hover:text-brand transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-muted">{video.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center p-8 rounded-xl bg-secondary/30">
          <p className="text-muted">
            More videos coming soon. Subscribe to our newsletter to get notified when new content is available.
          </p>
        </div>
      </div>
    </div>
  );
}
