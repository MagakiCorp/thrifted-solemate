import Link from "next/link";

const shopLinks = ["Sneakers", "Streetwear", "New Arrivals", "Sale"];
const infoLinks = ["About Us", "How It Works", "Authentication", "Returns"];
const contactLinks = [
  { label: "WhatsApp Us", href: "" },
  { label: "Instagram", href: "" },
  { label: "TikTok", href: "" },
  { label: "hello@shoecompany.co.ke", href: "" },
];

const socials = [
  { label: "IG", href: "" },
  { label: "TT", href: "" },
  { label: "WA", href: "" },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-6 pt-10 pb-6 md:px-10"
      style={{ borderColor: "rgba(232,255,0,0.1)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p
              className="mb-3 text-2xl tracking-widest"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              THE SHOE{" "}
              <span style={{ color: "var(--ts-yellow)" }}>COMPANY</span>
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: "var(--font-space)",
                color: "var(--ts-muted)",
                letterSpacing: "0.5px",
              }}
            >
              Nairobi&apos;s freshest thrifted sneaker &amp; streetwear store.
              Authenticated kicks at real prices. Est. 2026.
            </p>
          </div>

          {/* Shop */}
          <div>
            <span
              className="mb-3 block text-sm tracking-widest"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--ts-yellow)" }}
            >
              Shop
            </span>
            {shopLinks.map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase().replace(" ", "-")}`}
                className="mb-2 block text-xs tracking-wide transition-colors hover:text-white"
                style={{
                  fontFamily: "var(--font-space)",
                  color: "var(--ts-muted)",
                  letterSpacing: "1px",
                }}
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Info */}
          <div>
            <span
              className="mb-3 block text-sm tracking-widest"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--ts-yellow)" }}
            >
              Info
            </span>
            {infoLinks.map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase().replace(" ", "-")}`}
                className="mb-2 block text-xs tracking-wide transition-colors hover:text-white"
                style={{
                  fontFamily: "var(--font-space)",
                  color: "var(--ts-muted)",
                  letterSpacing: "1px",
                }}
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span
              className="mb-3 block text-sm tracking-widest"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--ts-yellow)" }}
            >
              Contact
            </span>
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 block text-xs tracking-wide transition-colors hover:text-white"
                style={{
                  fontFamily: "var(--font-space)",
                  color: "var(--ts-muted)",
                  letterSpacing: "1px",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 border-t pt-5"
          style={{ borderColor: "rgba(232,255,0,0.08)" }}
        >
          <span
            className="text-xs"
            style={{
              fontFamily: "var(--font-space)",
              color: "rgba(136,136,136,0.6)",
              letterSpacing: "1px",
            }}
          >
            © 2026 The Shoe Company · All rights reserved
          </span>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill border px-3 py-1 text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-space)",
                  color: "var(--ts-muted)",
                  borderColor: "rgba(232,255,0,0.15)",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
