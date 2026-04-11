"use client";

import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  brand: string;
  name: string;
  price: string;
  sizes: string;
  badge?: string;
  badgeStyle?: "yellow" | "white";
  emoji: string;
  category: "sneakers" | "streetwear";
};

const products: Product[] = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Force 1 '07",
    price: "Ksh 3,500",
    sizes: "UK 9 · 10 · 11",
    badge: "Hot",
    badgeStyle: "yellow",
    emoji: "👟",
    category: "sneakers",
  },
  {
    id: 2,
    brand: "Jordan",
    name: "Jordan 1 Retro High",
    price: "Ksh 6,200",
    sizes: "UK 8 · 9 · 10",
    badge: "New",
    badgeStyle: "yellow",
    emoji: "🥾",
    category: "sneakers",
  },
  {
    id: 3,
    brand: "Adidas",
    name: "Yeezy 350 V2",
    price: "Ksh 8,800",
    sizes: "UK 7 · 8",
    badge: "Rare",
    badgeStyle: "white",
    emoji: "👟",
    category: "sneakers",
  },
  {
    id: 4,
    brand: "New Balance",
    name: "574 Classic",
    price: "Ksh 2,900",
    sizes: "UK 8 · 9",
    emoji: "👟",
    category: "sneakers",
  },
  {
    id: 5,
    brand: "Supreme",
    name: "Box Logo Hoodie",
    price: "Ksh 4,500",
    sizes: "M · L · XL",
    badge: "Hot",
    badgeStyle: "yellow",
    emoji: "👕",
    category: "streetwear",
  },
  {
    id: 6,
    brand: "Off-White",
    name: "Industrial Belt Tee",
    price: "Ksh 3,200",
    sizes: "S · M · L",
    badge: "New",
    badgeStyle: "yellow",
    emoji: "👕",
    category: "streetwear",
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "sneakers", label: "Sneakers" },
  { key: "streetwear", label: "Streetwear" },
] as const;

type Tab = (typeof tabs)[number]["key"];

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div
        className="product-card border"
        style={{
          background: "var(--ts-gray)",
          borderColor: "rgba(232,255,0,0.1)",
        }}
      >
        {/* Image area */}
        <div
          className="relative flex h-36 items-center justify-center text-5xl"
          style={{ background: "var(--ts-gray2)", opacity: 0.9 }}
        >
          <span className="opacity-50">{product.emoji}</span>
          {product.badge && (
            <span
              className="absolute left-2 top-2 px-2 py-0.5 text-xs font-bold uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-space)",
                background:
                  product.badgeStyle === "white"
                    ? "var(--ts-white)"
                    : "var(--ts-yellow)",
                color: "var(--ts-black)",
                fontSize: "8px",
              }}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-3">
          <p
            className="mb-0.5 text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-space)", color: "var(--ts-muted)" }}
          >
            {product.brand}
          </p>
          <p
            className="mb-2 text-lg leading-tight tracking-wide"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            {product.name}
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-xl"
              style={{
                fontFamily: "var(--font-bebas)",
                color: "var(--ts-yellow)",
              }}
            >
              {product.price}
            </span>
            <span
              className="text-xs tracking-wide"
              style={{ fontFamily: "var(--font-space)", color: "var(--ts-muted)" }}
            >
              {product.sizes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FreshDrops() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section
      className="border-b px-6 py-12 md:px-10"
      style={{ borderColor: "rgba(232,255,0,0.08)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              className="mb-1 text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-space)", color: "var(--ts-yellow)", opacity: 0.7 }}
            >
              // Section 02
            </p>
            <h2
              className="text-5xl leading-none tracking-wider"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              FRESH <span style={{ color: "var(--ts-yellow)" }}>DROPS</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-2">
            {/* Tabs */}
            <div
              className="flex border-b"
              style={{ borderColor: "rgba(232,255,0,0.1)" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="px-4 py-2 text-xs uppercase tracking-widest transition-colors"
                  style={{
                    fontFamily: "var(--font-space)",
                    color:
                      activeTab === tab.key
                        ? "var(--ts-yellow)"
                        : "var(--ts-muted)",
                    borderBottom:
                      activeTab === tab.key
                        ? "2px solid var(--ts-yellow)"
                        : "2px solid transparent",
                    marginBottom: "-1px",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <Link
              href="/shop"
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-space)",
                color: "var(--ts-yellow)",
                borderBottom: "1px solid var(--ts-yellow)",
                paddingBottom: "1px",
              }}
            >
              View all →
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
