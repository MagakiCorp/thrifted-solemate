import Link from "next/link";

const stats = [
  { num: "500+", label: "Listings" },
  { num: "100%", label: "Authentic" },
  { num: "2K+", label: "Sold" },
];

export default function Hero() {
  return (
    <section className="dot-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-10 md:py-20">
          <span
            className="mb-3 text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-space)", color: "var(--ts-yellow)" }}
          >
            // New drops every week
          </span>

          <h1
            className="mb-5 text-7xl leading-none tracking-wide md:text-8xl"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            FRESH
            <br />
            KICKS,
            <br />
            <span style={{ color: "var(--ts-yellow)" }}>THRIFTED</span>
            <br />
            PRICES.
          </h1>

          <p
            className="mb-8 max-w-xs text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-space)", color: "rgba(245,245,245,0.55)" }}
          >
            Premium sneakers &amp; streetwear. Authenticated. Affordable. Yours.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="btn-primary px-6 py-3 text-xs font-bold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-space)",
                background: "var(--ts-yellow)",
                color: "var(--ts-black)",
              }}
            >
              Browse Drops
            </Link>
            <Link
              href="/how-it-works"
              className="btn-ghost px-6 py-3 text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-space)",
                color: "var(--ts-white)",
                border: "1px solid rgba(245,245,245,0.25)",
              }}
            >
              How It Works
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-8 flex border-t"
            style={{ borderColor: "rgba(232,255,0,0.1)" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex-1 py-4 text-center"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(232,255,0,0.1)"
                      : "none",
                }}
              >
                <span
                  className="block text-3xl"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "var(--ts-yellow)",
                  }}
                >
                  {s.num}
                </span>
                <span
                  className="mt-1 block text-xs uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space)", color: "var(--ts-muted)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="stripe-bg relative flex min-h-[360px] items-center justify-center overflow-hidden">
          {/* Watermark */}
          <span
            className="pointer-events-none absolute -bottom-4 -right-4 select-none leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(100px, 18vw, 180px)",
              color: "rgba(232,255,0,0.04)",
              letterSpacing: "-6px",
            }}
          >
            TS
          </span>

          {/* Badge */}
          <span
            className="absolute right-6 top-6 rotate-3 px-3 py-1 text-sm tracking-widest"
            style={{
              fontFamily: "var(--font-bebas)",
              background: "var(--ts-yellow)",
              color: "var(--ts-black)",
            }}
          >
            EST. 2026
          </span>

          {/* Hero image placeholder — replace src with actual product image */}
          <div
            className="relative z-10 flex h-52 w-64 flex-col items-center justify-center border"
            style={{ borderColor: "rgba(232,255,0,0.3)", borderStyle: "dashed" }}
          >
            {/* Replace this div with <Image> once you have a hero shoe photo */}
            <span className="text-6xl opacity-40">👟</span>
            <span
              className="mt-2 text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-space)", color: "rgba(232,255,0,0.45)" }}
            >
              Hero Product Image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
