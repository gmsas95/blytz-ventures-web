import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@untitledui/icons";

const ventures = [
  {
    name: "Blytz Cloud",
    tagline: "AI Assistant Platform",
    description: "Deploy personalised AI assistants via Telegram.",
    slug: "cloud",
  },
  {
    name: "blytz marketplace",
    tagline: "E-Commerce & Live Auctions",
    description: "Real-time bidding and Stripe Connect payments.",
    slug: "marketplace",
    url: "https://marketplace.blytz.cloud/",
  },
  {
    name: "blytz work",
    tagline: "Fastest Job Matching",
    description: "From job posted to hired in one hour.",
    slug: "work",
    url: "https://work.blytz.cloud/",
  },
  {
    name: "Blytz Site",
    tagline: "Website Builder Platform",
    description: "Build websites with custom plugins.",
    slug: "site",
  },
];

// Duplicate items so the carousel can loop infinitely while showing 3 at once.
const items = [...ventures, ...ventures];
const VISIBLE = 3;

export const Ventures = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  // When the carousel reaches the duplicated end, snap back to the real start
  // without animation for an infinite feel.
  useEffect(() => {
    if (current !== ventures.length) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setCurrent(0);
    }, 500);

    return () => clearTimeout(timer);
  }, [current]);

  // Re-enable transitions after the snap reset.
  useEffect(() => {
    if (current !== 0 || isTransitioning) return;
    const timer = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsTransitioning(true));
    });
    return () => cancelAnimationFrame(timer);
  }, [current, isTransitioning]);

  return (
    <section id="ventures" className="bg-amber-600 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-white/80">Our ventures</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Companies we are building
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Internal startups where we test ideas, validate markets, and refine playbooks we apply to client work.
          </p>
        </div>

        <div
          className="mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: `translateX(-${(current * 100) / VISIBLE}%)`,
                transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
              }}
            >
              {items.map((venture, index) => (
                <div
                  key={`${venture.slug}-${index}`}
                  className="w-full flex-shrink-0 px-3 md:w-1/3"
                >
                  <a
                    href={venture.url || `/coming-soon?v=${venture.slug}`}
                    target={venture.url ? "_blank" : undefined}
                    rel={venture.url ? "noopener noreferrer" : undefined}
                    className="group relative flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50/50 p-6 transition-all hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50/30 hover:shadow-md md:p-8"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          {String((index % ventures.length) + 1).padStart(2, "0")}
                        </span>
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors group-hover:border-amber-200 group-hover:text-amber-600">
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-gray-900">
                        {venture.name}
                      </h3>
                      <p className="text-sm font-semibold text-amber-600">
                        {venture.tagline}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {venture.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
                        Under development
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-amber-200 hover:text-amber-600"
              aria-label="Previous ventures"
            >
              <ArrowLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {ventures.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current % ventures.length
                      ? "w-8 bg-amber-600"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to venture ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-amber-200 hover:text-amber-600"
              aria-label="Next ventures"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
