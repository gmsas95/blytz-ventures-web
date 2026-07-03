import { ArrowRight } from "@untitledui/icons";

const audiences = [
  {
    title: "For Startups",
    description: "Need a technical partner to validate, build, and launch your product?",
    cta: "Start a project",
  },
  {
    title: "For Enterprises",
    description: "Get fractional CTO support, product strategy, and AI implementation.",
    cta: "Book a consultation",
  },
  {
    title: "For Investors",
    description: "Discover co-investment and partnership opportunities across our ventures.",
    cta: "Partner with us",
  },
];

export const CTA = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-amber-600">Get in touch</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Let's build together
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you need a technical partner, a product strategy, or a team to ship your next MVP, we can help.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:border-amber-200 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
              >
                {item.cta}
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
