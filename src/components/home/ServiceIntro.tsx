"use client";

import React from "react";
import Link from "next/link";

type ServicesProps = {
	title?: string;
	subtitle?: string;
	items?: { label: string; href?: string }[];
	className?: string;
};

const DEFAULT_ITEMS = [
	{ label: "Substation Up to 33 KV" },
	{ label: "LT Distribution System" },
	{ label: "HT & LT Cable Laying" },
	{ label: "HT & LT Termination" },
	{ label: "Internal & External Lighting" },
	{ label: "Overhead Transmission Towers" },
	{ label: "Overhead Transmission Lines" },
	{ label: "Design, manufacturing and Installation of HVAC Control Panels" },
];

export default function ServiceIntro({
	title = "SERVICES",
	subtitle = "Engineering, installation, and turnkey delivery with a focus on reliability and safety.",
	items = DEFAULT_ITEMS,
	className = "bg-white",
}: ServicesProps) {
	return (
		<section
			className={`relative w-full ${className}`}
			aria-labelledby="services-title">
			<div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#eaf3ff] to-transparent" />
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 opacity-40">
				<div className="h-full w-full bg-[radial-gradient(40rem_18rem_at_15%_0%,rgba(0,86,166,0.12),transparent_60%),radial-gradient(40rem_18rem_at_85%_0%,rgba(255,122,26,0.14),transparent_60%)]" />
			</div>

			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="flex flex-col gap-3">
					<span
						className="mt-10 w-fit rounded-full px-3 py-1 text-xs font-semibold"
						style={{ backgroundColor: "#fff4e6", color: "#ff6b00" }}>
						{title.toUpperCase()}
					</span>

					<h2
						id="services-title"
						className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl">
						Professional Electrical Contracting &{" "}
						<span className="text-[#0056a6]">Control Solutions</span>
					</h2>
					<p className="max-w-3xl text-sm text-zinc-600">{subtitle}</p>
				</div>
			</div>

			<div className="mx-auto my-8 sm:my-12 max-w-7xl px-4 sm:px-6">
				<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
					<div className="h-1 w-full bg-gradient-to-r from-[#0056a6] via-[#00498e] to-[#003d78]" />
					<div className="h-1 w-full bg-gradient-to-r from-[#ff7a1a] via-[#ff8a3a] to-transparent" />

					<ul className="grid divide-y divide-zinc-100 sm:grid-cols-2 sm:divide-x">
						{items.map((item, idx) => (
							<li
								key={idx}
								className="flex items-center gap-3 p-4 sm:p-6 hover:bg-zinc-50 transition">
								<span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f1fb] text-xs font-semibold text-[#0056a6]">
									{idx + 1}
								</span>
								<span className="text-sm sm:text-base font-medium text-zinc-800">
									{item.label}
								</span>
							</li>
						))}
					</ul>

					<div className="flex flex-col gap-3 border-t border-zinc-200 p-4 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
						<p className="text-sm text-zinc-600">
							Need a custom solution or turnkey EPC support?
						</p>
						<div className="flex flex-wrap gap-2">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center rounded-lg bg-[#0056a6] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00498e]">
								Request a Consultation
							</Link>
							<Link
								href="/services"
								className="inline-flex items-center justify-center rounded-lg border border-[#ff7a1a]/30 bg-white px-4 py-2 text-sm font-semibold text-[#ff7a1a] shadow-sm transition hover:bg-orange-50">
								View All Services
							</Link>
						</div>
					</div>
				</div>

				<div className="mt-6 h-1 w-32 sm:w-40 rounded-full bg-gradient-to-r from-[#0056a6] via-[#ff7a1a] to-transparent" />
			</div>
		</section>
	);
}
