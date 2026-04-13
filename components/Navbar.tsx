"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Sneakers", href: "/sneakers" },
  { label: "Streetwear", href: "/streetwear" },
  { label: "Brands", href: "/brands" },
  { label: "Drops", href: "/drops" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="dot-grid sticky top-0 z-50 border-b"
      style={{
        borderColor: "rgba(232,255,0,0.15)",
        background: "rgba(10,10,10,0.96)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className="text-xl tracking-widest"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            THE SHOE{" "}
            <span style={{ color: "var(--ts-yellow)" }}>COMPANY</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="nav-link text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-space)",
                  color: "var(--ts-muted)",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/shop"
          className="btn-primary hidden px-4 py-2 text-xs font-bold uppercase tracking-wider md:block"
          style={{
            fontFamily: "var(--font-space)",
            background: "var(--ts-yellow)",
            color: "var(--ts-black)",
          }}
        >
          Shop Now
        </Link>

        {/* Hamburger */}
        <button
          className="flex flex-col gap-1 p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 transition-all"
            style={{
              background: menuOpen ? "var(--ts-yellow)" : "var(--ts-white)",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "",
            }}
          />
          <span
            className="block h-px w-6 transition-all"
            style={{
              background: menuOpen ? "var(--ts-yellow)" : "var(--ts-white)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all"
            style={{
              background: menuOpen ? "var(--ts-yellow)" : "var(--ts-white)",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t px-6 pb-4 md:hidden"
          style={{
            borderColor: "rgba(232,255,0,0.1)",
            background: "var(--ts-black)",
          }}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-sm uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-space)",
                    color: "var(--ts-muted)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/shop"
                className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-space)",
                  background: "var(--ts-yellow)",
                  color: "var(--ts-black)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Shop Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
