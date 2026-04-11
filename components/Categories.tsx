import Link from "next/link";

const categories = [
  {
    label: "Sneakers",
    count: "320+ items",
    href: "/sneakers",
    featured: true,
    num: "01",
  },
  {
    label: "Hoodies",
    count: "80+ items",
    href: "/streetwear/hoodies",
    featured: false,
    num: "02",
  },
  {
    label: "Caps & Hats",
    count: "60+ items",
    href: "/accessories",
    featured: false,
    num: "03",
  },
  {
    label: "Tees",
    count: "120+ items",
    href: "/streetwear/tees",
    featured: false,
    num: "04",
  },
];

export default function Categories() {
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
            // Section 03
          </p>
          <h2
            className="text-5xl leading-none tracking-wider"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            SHOP BY <span style={{ color: "var(--ts-yellow)" }}>CATEGORY</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((cat) => (
            <Link key={cat.label} href={cat.href}>
              <div
                className={`cat-card relative min-h-32 overflow-hidden border p-6 flex flex-col justify-end ${
                  cat.featured ? "stripe-bg" : ""
                }`}
                style={{
                  background: cat.featured
                    ? "var(--ts-yellow)"
                    : "var(--ts-gray)",
                  borderColor: cat.featured
                    ? "var(--ts-yellow)"
                    : "rgba(232,255,0,0.08)",
                }}
              >
                {/* Background number */}
                <span
                  className="pointer-events-none absolute -bottom-3 right-2 select-none leading-none"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "80px",
                    color: cat.featured
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(232,255,0,0.06)",
                  }}
                >
                  {cat.num}
                </span>

                <p
                  className="relative z-10 text-2xl tracking-wider"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: cat.featured ? "var(--ts-black)" : "var(--ts-white)",
                  }}
                >
                  {cat.label}
                </p>
                <p
                  className="relative z-10 mt-0.5 text-xs uppercase tracking-wide"
                  style={{
                    fontFamily: "var(--font-space)",
                    color: cat.featured
                      ? "rgba(0,0,0,0.5)"
                      : "rgba(245,245,245,0.45)",
                  }}
                >
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
