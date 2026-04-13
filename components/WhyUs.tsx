const reasons = [
  {
    icon: "🔍",
    title: "100% Authenticated",
    desc: "Every pair verified before it reaches you",
  },
  {
    icon: "💸",
    title: "Street Prices",
    desc: "No retail markup. Real thrift energy.",
  },
  {
    icon: "📦",
    title: "Fast Delivery",
    desc: "Nairobi same-day · Nationwide 2–3 days",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    desc: "Not your fit? 7-day hassle-free returns",
  },
];

export default function WhyUs() {
  return (
    <section
      className="border-b px-6 py-12 md:px-10"
      style={{ borderColor: "rgba(232,255,0,0.08)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <p
            className="mb-1 text-xs uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-space)",
              color: "var(--ts-yellow)",
              opacity: 0.7,
            }}
          >
            // Section 04
          </p>
          <h2
            className="text-5xl leading-none tracking-wider"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            WHY <span style={{ color: "var(--ts-yellow)" }}>THE SHOE COMPANY?</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 gap-px md:grid-cols-4"
          style={{ background: "rgba(232,255,0,0.08)" }}
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col items-center px-5 py-8 text-center"
              style={{ background: "var(--ts-black)" }}
            >
              <span className="mb-3 text-2xl opacity-60">{r.icon}</span>
              <span
                className="mb-1 block text-base tracking-wide"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "var(--ts-yellow)",
                }}
              >
                {r.title}
              </span>
              <p
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: "var(--font-space)",
                  color: "var(--ts-muted)",
                  letterSpacing: "0.5px",
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
