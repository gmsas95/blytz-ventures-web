import {
  ZapFast,
  BarChartSquare02,
  CodeBrowser,
  CpuChip01,
  TrendUp01,
  UserCheck01,
} from "@untitledui/icons";

const services = [
  {
    icon: ZapFast,
    title: "Startup Incubation",
    tagline: "From idea to product",
    description: "Validate concepts, assemble lean teams, and ship MVPs fast.",
  },
  {
    icon: BarChartSquare02,
    title: "Product Strategy",
    tagline: "Build what matters",
    description: "Define roadmaps, prioritise features, and design experiences users pay for.",
  },
  {
    icon: CodeBrowser,
    title: "MVP Development",
    tagline: "Ship in weeks, not months",
    description: "Full-stack engineering for web, mobile, and AI-powered products.",
  },
  {
    icon: CpuChip01,
    title: "AI & Automation",
    tagline: "Work smarter",
    description: "Identify and implement AI, agents, and automation responsibly.",
  },
  {
    icon: TrendUp01,
    title: "Go-to-Market",
    tagline: "Find first customers",
    description: "Positioning, pricing, and growth experiments for early adopters.",
  },
  {
    icon: UserCheck01,
    title: "Fractional CTO",
    tagline: "Leadership on demand",
    description: "Senior technical guidance for architecture, hiring, and scaling.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-amber-600">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Startup studio + consultancy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We build our own ventures and partner with teams to ship products, design strategy, and scale faster.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm font-semibold text-amber-600">{service.tagline}</p>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
