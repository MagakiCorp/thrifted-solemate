"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to email provider (Mailchimp, Resend, etc.)
    setSubmitted(true);
  }

  return (
    <section className="px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div
          className="dot-grid relative overflow-hidden border p-8 md:flex md:items-center md:justify-between md:gap-8"
          style={{
            background: "var(--ts-gray)",
            borderColor: "rgba(232,255,0,0.2)",
          }}
        >
          {/* Watermark */}
          <span
            className="pointer-events-none absolute -top-2 right-4 select-none leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(70px, 12vw, 110px)",
              color: "rgba(232,255,0,0.04)",
              letterSpacing: "-4px",
            }}
          >
            TS
          </span>

          {/* Text */}
          <div className="relative z-10 mb-6 md:mb-0 md:flex-1">
            <h2
              className="mb-1 text-4xl leading-none tracking-wider md:text-5xl"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              STAY ON{" "}
              <span style={{ color: "var(--ts-yellow)" }}>THE DROP</span>
            </h2>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-space)", color: "var(--ts-muted)" }}
            >
              // New arrivals. Exclusive deals. First dibs.
            </p>
          </div>

          {/* Form */}
          <div className="relative z-10 md:max-w-sm md:flex-1">
            {submitted ? (
              <p
                className="text-sm tracking-wide"
                style={{ fontFamily: "var(--font-space)", color: "var(--ts-yellow)" }}
              >
                ✓ You&apos;re on the list. Stay fresh.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-r-0 px-4 py-3 text-xs outline-none"
                  style={{
                    fontFamily: "var(--font-space)",
                    background: "var(--ts-black)",
                    borderColor: "rgba(232,255,0,0.2)",
                    color: "var(--ts-white)",
                    letterSpacing: "1px",
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary px-5 py-3 text-xs font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-space)",
                    background: "var(--ts-yellow)",
                    color: "var(--ts-black)",
                    whiteSpace: "nowrap",
                    border: "none",
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
