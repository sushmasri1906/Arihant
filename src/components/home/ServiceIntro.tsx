"use client";

import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

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
];

export default function ServiceIntro({
	title = "SERVICES",
	subtitle = "Engineering, installation, and turnkey delivery with a focus on reliability and safety.",
	items = DEFAULT_ITEMS,
	className = "",
}: ServicesProps) {
	return (
		<section
			className={`relative w-full ${className}`}
			aria-labelledby="services-title">
			{/* Subtle header background design */}
			<div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#eaf3ff] to-transparent" />
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 opacity-40">
				<div className="h-full w-full bg-[radial-gradient(40rem_18rem_at_15%_0%,rgba(0,86,166,0.12),transparent_60%),radial-gradient(40rem_18rem_at_85%_0%,rgba(255,122,26,0.14),transparent_60%)]" />
			</div>

			{/* Header */}
			<div className="mx-auto  max-w-7xl px-6">
				<div className="flex flex-col gap-3">
					<div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e8f1fb] px-3 py-1">
<span
	className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold mt-10"
	style={{ backgroundColor: "#fff4e6", color: "#ff6b00" }}
>
	{title.toUpperCase()}
</span>

						
					</div>

					<h2
						id="services-title"
						className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
						Professional Electrical Contracting &{" "}
						<span className="text-[#0056a6]">Control Solutions</span>
					</h2>
					<p className="max-w-3xl text-sm text-zinc-600">{subtitle}</p>
				</div>
			</div>

			{/* Body */}
			<div className="mx-auto my-12 max-w-7xl px-6">
				<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
					{/* Dual-tone top accent */}
					<div className="h-1 w-full bg-gradient-to-r from-[#0056a6] via-[#00498e] to-[#003d78]" />
					<div className="h-1 w-full bg-gradient-to-r from-[#ff7a1a] via-[#ff8a3a] to-transparent" />

					{/* List */}
					<ul className="grid divide-y divide-zinc-100 md:grid-cols-2 md:divide-x">
						{items.map((item, idx) => (
							<li key={idx} className="group">
								{item.href ? (
									<Link
										href={item.href}
										className="flex items-center justify-between gap-4 p-5 transition hover:bg-zinc-50 focus:outline-none md:p-6">
										<div className="flex items-start gap-3">
											{/* index badge */}
											<span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f1fb] text-xs font-semibold text-[#0056a6]">
												{idx + 1}
											</span>
											<span className="text-base font-medium text-zinc-800">
												{item.label}
											</span>
										</div>
						
										{/* chevron */}
										<span
											className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:border-zinc-300 group-hover:text-zinc-700"
											aria-hidden>
											<FiChevronRight className="text-inherit" />
										</span>
									</Link>
								) : (
									<div className="flex items-center justify-between gap-4 p-5 transition hover:bg-zinc-50 focus:outline-none md:p-6">
										<div className="flex items-start gap-3">
											{/* index badge */}
											<span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f1fb] text-xs font-semibold text-[#0056a6]">
												{idx + 1}
											</span>
											<span className="text-base font-medium text-zinc-800">
												{item.label}
											</span>
										</div>
						
										{/* chevron */}
										<span
											className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:border-zinc-300 group-hover:text-zinc-700"
											aria-hidden>
											<FiChevronRight className="text-inherit" />
										</span>
									</div>
								)}
							</li>
						))}
					</ul>

					{/* CTA footer */}
					<div className="flex flex-col items-start gap-3 border-t border-zinc-200 p-5 md:flex-row md:items-center md:justify-between md:p-6">
						<p className="text-sm text-zinc-600">
							Need a custom solution or turnkey EPC support?
						</p>
						<div className="flex gap-2">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center rounded-lg bg-[#0056a6] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00498e] focus:outline-none focus:ring-2 focus:ring-[#0056a6]/30 focus:ring-offset-2">
								Request a Consultation
							</Link>
							<Link
								href="/services"
								className="inline-flex items-center justify-center rounded-lg border border-[#ff7a1a]/30 bg-white px-4 py-2 text-sm font-semibold text-[#ff7a1a] shadow-sm transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-[#ff7a1a]/30 focus:ring-offset-2">
								View All Services
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom accent strip for finish */}
				<div className="mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-[#0056a6] via-[#ff7a1a] to-transparent" />
			</div>
		</section>
	);
}
