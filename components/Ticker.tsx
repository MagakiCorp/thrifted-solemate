const brands = [
  "Nike", "Jordan", "Adidas", "New Balance", "Puma",
  "Vans", "Converse", "Reebok", "Asics", "Saucony",
];

export default function Ticker() {
  // Duplicate for seamless loop
  const items = [...brands, ...brands];

  return (
    <div
      className="overflow-hidden py-2"
      style={{ background: "var(--ts-yellow)" }}
    >
      <div className="ticker-inner flex gap-10 whitespace-nowrap">
        {items.map((brand, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className="text-sm uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-bebas)",
                color: "var(--ts-black)",
                letterSpacing: "3px",
              }}
            >
              {brand}
            </span>
            <span style={{ color: "var(--ts-black)", opacity: 0.4 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
