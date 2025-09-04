"use client";

import React, { useState } from "react";
import {
  FaBolt,
  FaIndustry,
  FaCogs,
  FaTools,
  FaSolarPanel,
  FaBatteryFull,
  FaPlug,
  FaServer,
  FaExchangeAlt,
  FaShieldAlt,
  FaTachometerAlt,
  FaProjectDiagram,
} from "react-icons/fa";

const BLUE = "#0056A6";

type Product = {
  name: string;
  slug: string;
  icon?: React.ReactNode;
  blurb?: string;
};

const icons = {
  electrical: <FaBolt size={22} />,
  industry: <FaIndustry size={22} />,
  cogs: <FaCogs size={22} />,
  tools: <FaTools size={22} />,
  solar: <FaSolarPanel size={22} />,
  battery: <FaBatteryFull size={22} />,
  plug: <FaPlug size={22} />,
  server: <FaServer size={22} />,
  exchange: <FaExchangeAlt size={22} />,
  shield: <FaShieldAlt size={22} />,
  meter: <FaTachometerAlt size={22} />,
  diagram: <FaProjectDiagram size={22} />,
};

const MANUFACTURING_PRODUCTS: Product[] = [
  { name: "LT Distribution Panels", slug: "lt-distribution-panels", icon: icons.electrical, blurb: "Efficient low-tension distribution panels for industrial and commercial setups." },
  { name: "Motor Control Centers", slug: "motor-control-centers", icon: icons.industry, blurb: "Reliable MCC panels ensuring smooth motor operations with safety features." },
  { name: "AMF & Synchronizing Panels", slug: "amf-synchronizing-panels", icon: icons.cogs, blurb: "Automatic mains failure and synchronizing solutions for uninterrupted power." },
  { name: "Power Control Centers", slug: "power-control-centers", icon: icons.tools, blurb: "Custom PCC panels designed to handle large power loads safely and efficiently." },
  { name: "Solar Control Panels", slug: "solar-control-panels", icon: icons.solar, blurb: "Smart solar panel solutions for renewable energy management." },
  { name: "Battery Charger Panels", slug: "battery-charger-panels", icon: icons.battery, blurb: "Durable battery charger panels for consistent and safe energy storage." },
  { name: "Power Distribution Boards", slug: "power-distribution-boards", icon: icons.plug, blurb: "Robust PDBs for safe and efficient power distribution across facilities." },
  { name: "Data Center Panels", slug: "data-center-panels", icon: icons.server, blurb: "Reliable and scalable power panels for modern IT and server infrastructure." },
  { name: "Changeover Panels", slug: "changeover-panels", icon: icons.exchange, blurb: "Automatic/manual changeover panels ensuring smooth power transitions." },
  { name: "Protection Relay Panels", slug: "protection-relay-panels", icon: icons.shield, blurb: "Advanced protection relays safeguarding critical electrical systems." },
  { name: "Metering Panels", slug: "metering-panels", icon: icons.meter, blurb: "Accurate metering solutions for monitoring and managing power usage." },
  { name: "Automation Panels", slug: "automation-panels", icon: icons.diagram, blurb: "PLC & SCADA-based automation panels for efficient industrial control." },
];

export default function Manufacturing() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? MANUFACTURING_PRODUCTS : MANUFACTURING_PRODUCTS.slice(0, 6);

  return (
    <section
      className="relative w-full isolate"
      aria-labelledby="mfg-title"
    >
      {/* Background image as an actual element so it always fills and shows */}
      <img
        src="https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/News-Twitter-post-7_arrrcz.png"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Readability overlay (top-to-bottom gradient) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h2
            id="mfg-title"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Manufacturing Products
          </h2>
          <p className="mt-2 mx-auto max-w-3xl text-sm leading-relaxed text-gray-200 sm:text-base">
            High-quality LT panels and power distribution solutions built for performance and safety.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {/* See More / See Less */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-sm font-medium rounded-full border border-white/60 text-white/95 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-white/90 backdrop-blur-sm shadow-2xl transition hover:shadow-lg">
      {product.icon && (
        <div className="flex justify-center bg-[rgba(0,86,166,0.05)] p-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/70 text-[rgba(0,86,166,1)] transition-colors duration-300 group-hover:text-orange-500"
          >
            {product.icon}
          </div>
        </div>
      )}
      {/* Body */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-base font-semibold leading-snug text-orange-500">
          {product.name}
        </h3>
        {product.blurb && (
          <p className="text-sm leading-relaxed text-zinc-700">
            {product.blurb}
          </p>
        )}
      </div>
    </article>
  );
}
