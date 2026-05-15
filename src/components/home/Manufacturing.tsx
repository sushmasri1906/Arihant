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
	{
		name: "LT Distribution Panels",
		slug: "lt-distribution-panels",
		icon: icons.electrical,
		blurb:
			"Efficient low-tension distribution panels for industrial and commercial setups.",
	},
	{
		name: "Motor Control Centers",
		slug: "motor-control-centers",
		icon: icons.industry,
		blurb:
			"Reliable MCC panels ensuring smooth motor operations with safety features.",
	},
	{
		name: "AMF & Synchronizing Panels",
		slug: "amf-synchronizing-panels",
		icon: icons.cogs,
		blurb:
			"Automatic mains failure and synchronizing solutions for uninterrupted power.",
	},
	{
		name: "Power Control Centers",
		slug: "power-control-centers",
		icon: icons.tools,
		blurb:
			"Custom PCC panels designed to handle large power loads safely and efficiently.",
	},
	{
		name: "Solar Control Panels",
		slug: "solar-control-panels",
		icon: icons.solar,
		blurb: "Smart solar panel solutions for renewable energy management.",
	},
	{
		name: "Battery Charger Panels",
		slug: "battery-charger-panels",
		icon: icons.battery,
		blurb:
			"Durable battery charger panels for consistent and safe energy storage.",
	},
	{
		name: "Power Distribution Boards",
		slug: "power-distribution-boards",
		icon: icons.plug,
		blurb:
			"Robust PDBs for safe and efficient power distribution across facilities.",
	},
	{
		name: "Data Center Panels",
		slug: "data-center-panels",
		icon: icons.server,
		blurb:
			"Reliable and scalable power panels for modern IT and server infrastructure.",
	},
	{
		name: "Changeover Panels",
		slug: "changeover-panels",
		icon: icons.exchange,
		blurb:
			"Automatic/manual changeover panels ensuring smooth power transitions.",
	},
	{
		name: "Protection Relay Panels",
		slug: "protection-relay-panels",
		icon: icons.shield,
		blurb:
			"Advanced protection relays safeguarding critical electrical systems.",
	},
	{
		name: "Metering Panels",
		slug: "metering-panels",
		icon: icons.meter,
		blurb:
			"Accurate metering solutions for monitoring and managing power usage.",
	},
	{
		name: "Automation Panels",
		slug: "automation-panels",
		icon: icons.diagram,
		blurb:
			"PLC & SCADA-based automation panels for efficient industrial control.",
	},
];

export default function Manufacturing() {
	const [showAll, setShowAll] = useState(false);

	const visibleProducts = showAll
		? MANUFACTURING_PRODUCTS
		: MANUFACTURING_PRODUCTS.slice(0, 6);

	return (
		<section
			className="w-full bg-white py-12 sm:py-14 lg:py-16"
			aria-labelledby="mfg-title">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<div className="mb-10 text-center">
					<h2
						id="mfg-title"
						className="text-2xl font-bold tracking-tight text-[#0056A6] sm:text-3xl lg:text-4xl">
						Manufacturing Products
					</h2>

					<div className="mx-auto mt-3 h-1 w-24 rounded-full bg-orange-500" />

					<p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
						High-quality LT panels and power distribution solutions built for
						performance, reliability, and industrial safety.
					</p>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{visibleProducts.map((p) => (
						<ProductCard key={p.slug} product={p} />
					))}
				</div>

				{/* Button */}
				<div className="mt-10 flex justify-center">
					<button
						onClick={() => setShowAll(!showAll)}
						className="rounded-full bg-[#0056A6] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#004080]">
						{showAll ? "See Less" : "See More"}
					</button>
				</div>
			</div>
		</section>
	);
}

function ProductCard({ product }: { product: Product }) {
	return (
		<article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
			{/* Icon */}
			<div className="flex justify-center pt-6">
				<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0056A6]/10 text-[#0056A6] transition duration-300 group-hover:bg-orange-100 group-hover:text-orange-500">
					{product.icon}
				</div>
			</div>

			{/* Content */}
			<div className="flex flex-1 flex-col p-6 text-center">
				<h3 className="text-lg font-semibold text-[#0056A6]">{product.name}</h3>

				{product.blurb && (
					<p className="mt-3 text-sm leading-relaxed text-gray-600">
						{product.blurb}
					</p>
				)}
			</div>
		</article>
	);
}
