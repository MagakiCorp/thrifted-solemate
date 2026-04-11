const reviews = [
  {
    stars: 5,
    text: "Got a pair of AF1s for half the usual price. Condition was perfect, delivery was fast. This is my go-to spot now.",
    initials: "KM",
    name: "Kevin M.",
    city: "Nairobi",
  },
  {
    stars: 5,
    text: "Legit sneakers, legit prices. Grabbed two pairs and both were authenticated. The packaging was clean too.",
    initials: "AW",
    name: "Aisha W.",
    city: "Mombasa",
  },
  {
    stars: 4,
    text: "Thrifted Solemate is the real deal. Found a Yeezy I couldn't find anywhere else at that price point. Solid experience.",
    initials: "JO",
    name: "James O.",
    city: "Kisumu",
  },
];

export default function Reviews() {
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
            // Section 05
          </p>
          <h2
            className="text-5xl leading-none tracking-wider"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            WHAT THE{" "}
            <span style={{ color: "var(--ts-yellow)" }}>STREETS SAY</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="border p-5"
              style={{
                background: "var(--ts-gray)",
                borderColor: "rgba(232,255,0,0.08)",
              }}
            >
              {/* Stars */}
              <span
                className="mb-3 block tracking-widest"
                style={{ color: "var(--ts-yellow)", fontSize: "14px" }}
              >
                {"★".repeat(r.stars)}
                {"☆".repeat(5 - r.stars)}
              </span>

              <p
                className="mb-5 text-xs leading-relaxed"
                style={{
                  fontFamily: "var(--font-space)",
                  color: "rgba(245,245,245,0.65)",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    background: "rgba(232,255,0,0.15)",
                    color: "var(--ts-yellow)",
                    fontSize: "13px",
                  }}
                >
                  {r.initials}
                </div>
                <span
                  className="text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {r.name}{" "}
                  <span style={{ color: "var(--ts-muted)" }}>· {r.city}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
