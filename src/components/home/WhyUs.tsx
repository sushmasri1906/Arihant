"use client";

import React from "react";

const BLUE = "#0056A6";


type Variant = "blue" | "white";

type WhyUsProps = {
  className?: string;
  variant?: Variant;
  title?: string;
  itemsClassName?: string;
};

const features = [
  {
    title: "Class‑1 ‘A’ Grade contracting",
    desc: "End‑to‑end electrical contracting you can trust - professional execution and accountability on every site.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 11h5M9.5 14h5" />
      </svg>
    ),
  },
  {
    title: "In‑house LT panel manufacturing",
    desc: "MCC, PCC, APFC, AMF, DG Control, Bus Ducts, Distribution Boards - designed for reliability and safety.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    ),
  },
  {
    title: "Transparent, cost‑saving operations",
    desc: "Clear terms & conditions and engineered solutions that bring down overall maintenance expenditure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden>
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v4c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6M4.5 10v4c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-4" />
      </svg>
    ),
  },
];

export default function WhyUs({
  className = "",
  variant = "blue",
  title = "Why Choose Us",
  itemsClassName = "",
}: WhyUsProps) {
  const isBlue = variant === "blue";

  return (
    <section
      className={`relative w-full ${className} ${isBlue ? "bg-[#0056A6] text-white" : "bg-white text-zinc-900"}`}
      aria-labelledby="why-us-title"
    >
      {/* Subtle background interest for blue variant */}
      {isBlue && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(1100px 520px at 12% 14%, rgba(255,255,255,0.28), transparent 60%), radial-gradient(900px 420px at 88% 18%, rgba(255,255,255,0.18), transparent 70%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        {/* Section header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            id="why-us-title"
            className={`text-[22px] font-bold tracking-tight sm:text-[26px] md:text-[30px] ${isBlue ? "text-white" : "text-zinc-900"}`}
          >
            {title}
          </h2>
          {!isBlue && (
            <div
              className="h-px w-48"
              style={{ background: `linear-gradient(90deg, ${BLUE}33, ${BLUE})` }}
              aria-hidden
            />
          )}
        </div>

        {/* Feature items */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl border p-5 sm:p-6 transition-shadow ${
                isBlue
                  ? "border-white/25 bg-white/10 backdrop-blur hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  : "border-zinc-200/80 bg-white shadow-sm hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900"
              } ${itemsClassName}`}
            >
              {/* Icon */}
              <div
                className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                  isBlue ? "bg-white/20 text-orange-300" : "bg-[rgba(0,86,166,0.10)] text-[rgba(0,86,166,1)]"
                }`}
                aria-hidden
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-[15px] font-semibold leading-tight ${isBlue ? "text-white" : "text-zinc-900"}`}
              >
                {f.title}
              </h3>

              {/* Description with tuned contrast */}
              <p
                className={`mt-2 text-[13.5px] leading-relaxed ${
                  isBlue ? "text-white/95" : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {f.desc}
              </p>

              {/* Decorative corner */}
              <div
                className={`pointer-events-none absolute -right-5 -top-5 h-16 w-16 rotate-12 rounded-full ${
                  isBlue ? "bg-white/15" : "bg-[rgba(0,86,166,0.06)] dark:bg-[rgba(0,86,166,0.12)]"
                }`}
                aria-hidden
              />

              {/* Focus ring for keyboard users */}
              <span className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 dark:focus-visible:ring-zinc-500" tabIndex={0} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
