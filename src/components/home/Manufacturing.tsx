"use client";

import Link from "next/link";

const BLUE = "#0056A6";

type Product = {
  name: string;
  slug: string;
  icon?: JSX.Element;
  blurb?: string;
};

// --- Minimal, legible line icons --- //
const icons = {
  panel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  power: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <path d="M12 3v8" />
      <path d="M6.35 6.35a8 8 0 1 0 11.3 0" />
    </svg>
  ),
  capacitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <path d="M8 5v14M16 5v14M4 12h6M14 12h6" />
    </svg>
  ),
  amf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <path d="M4 8h16v8H4z" />
      <path d="M8 12h8M6 16v2M18 16v2" />
    </svg>
  ),
  busduct: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 9v6M12 9v6M17 9v6" />
    </svg>
  ),
  desk: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <path d="M3 10h18v8H3z" />
      <path d="M9 10v8M15 10v8M6 6h12v4H6z" />
    </svg>
  ),
  dg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <path d="M4 14h16v4H4zM6 10h12v4H6z" />
      <path d="M8 7h8v3H8z" />
    </svg>
  ),
  pillar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M9 7h6M9 12h6M9 17h6" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M4 11h16" />
    </svg>
  ),
  rtcc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
      <path d="M10 12h4M12 4v4M12 16v4" />
    </svg>
  ),
  db: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8M8 13h6" />
    </svg>
  ),
};

const MANUFACTURING_PRODUCTS: Product[] = [
  { name: "MCC (Motor Control Center)", slug: "mcc", icon: icons.panel, blurb: "Motor feeders, drives, and protection with safe maintenance access." },
  { name: "PCC (Power Control Center)", slug: "pcc", icon: icons.power, blurb: "Reliable main incomers, busbar systems, and metering." },
  { name: "APFC Capacitor Panels", slug: "apfc", icon: icons.capacitor, blurb: "Automatic power factor correction for energy savings." },
  { name: "AMF (Auto Main Failure)", slug: "amf", icon: icons.amf, blurb: "Automatic mains-to-DG switching with fail-safe logic." },
  { name: "Bus Duct", slug: "bus-duct", icon: icons.busduct, blurb: "Compact, efficient power distribution between panels." },
  { name: "Control Desks", slug: "control-desks", icon: icons.desk, blurb: "Ergonomic operator consoles and control stations." },
  { name: "DG Control Panels", slug: "dg-control", icon: icons.dg, blurb: "Generator control, synchronization, and protections." },
  { name: "Feeder Pillars", slug: "feeder-pillars", icon: icons.pillar, blurb: "Outdoor distribution with robust weatherproof enclosures." },
  { name: "Marshalling Box", slug: "marshalling-box", icon: icons.box, blurb: "Field terminations with orderly signal management." },
  { name: "Terminal and Junction Box", slug: "terminal-junction-box", icon: icons.box, blurb: "Safe and labeled junctions for field wiring." },
  { name: "RTCC Panels", slug: "rtcc", icon: icons.rtcc, blurb: "Remote tap-changer control for voltage regulation." },
  { name: "Distribution Boards", slug: "distribution-boards", icon: icons.db, blurb: "Final distribution with breakers and protection devices." },
];

export default function Manufacturing() {
  return (
    <section className="relative w-full" aria-labelledby="mfg-title">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Heading */}
        <div className="mb-6">
          <h2
            id="mfg-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl dark:text-zinc-100"
          >
            Manufacturing Products
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
            High-quality LT panels and power distribution solutions built for performance and safety.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {MANUFACTURING_PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="group relative flex flex-col justify-between rounded-2xl border bg-white shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
      style={{ borderColor: BLUE }}
    >
           {product.icon && (
        <div className="flex justify-center border-t border-zinc-100 bg-[rgba(0,86,166,0.03)] p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(0,86,166,0.2)] bg-white/70 text-[rgba(0,86,166,1)] dark:bg-zinc-800/70">
            {product.icon}
          </div>
        </div>
      )}
      {/* Body */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
          {product.name}
        </h3>
        {product.blurb && (
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {product.blurb}
          </p>
        )}

        {/* <div className="mt-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[rgba(0,86,166,1)] hover:underline"
          >
            View details
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div> */}
      </div>

      {/* Icon at bottom center */}
 
    </article>
  );
}
