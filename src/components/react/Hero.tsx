import { ArrowRight, Play } from "@untitledui/icons";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
          style={{ filter: "blur(1px) brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
            </span>
            <span className="text-sm font-semibold text-white/90">Startup Studio · Tech Consultancy · SEA</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            We build startups.
            <br />
            <span className="text-amber-400">We ship products.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Blytz Ventures is a startup studio and technology consultancy. We incubate our own ventures and help founders, startups, and enterprises turn ideas into products.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-black shadow-sm transition-colors hover:bg-amber-400"
            >
              Explore services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#ventures"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Play className="size-4" />
              See our ventures
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { value: "04", label: "Active ventures", desc: "From AI to talent platforms" },
            { value: "Open", label: "Consulting", desc: "Available for partnerships" },
            { value: "SEA", label: "Regional focus", desc: "Southeast Asia first" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white backdrop-blur-sm transition-colors hover:border-amber-500/30 hover:bg-amber-500/10"
            >
              <p className="text-3xl font-bold text-amber-400">{stat.value}</p>
              <p className="mt-1 font-semibold text-white">{stat.label}</p>
              <p className="text-sm text-white/60">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
