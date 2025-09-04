"use client";

import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const PRIMARY = "#0056a6";
const PRIMARY_DARK = "#003d78";

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
			{/* Header */}
			<div className="mx-auto max-w-7xl px-6 mt-20">
				<div className="flex flex-col gap-2">
					<span
						className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold"
						style={{ backgroundColor: "#e8f1fb", color: PRIMARY }}>
						{title}
					</span>
					<h2
						id="services-title"
						className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
						Professional Electrical Contracting & Control Solutions
					</h2>
					<p className="max-w-3xl text-sm text-zinc-600">{subtitle}</p>
				</div>
			</div>

			{/* Body */}
			<div className="mx-auto my-16 max-w-7xl px-6">
				<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
					{/* Top accent bar */}
					<div
						className="h-1 w-full"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_DARK})`,
						}}
					/>

					{/* List */}
					<ul className="grid divide-y divide-zinc-100 md:grid-cols-2 md:divide-x">
						{items.map((item, idx) => (
							<li key={idx} className="group">
								{item.href ? (
									<Link
										href={item.href}
										className="flex items-center justify-between gap-4 p-5 transition focus:outline-none md:p-6">
										<div className="flex items-start gap-3">
											{/* index badge */}
											<span
												className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
												style={{ backgroundColor: "#e8f1fb", color: PRIMARY }}>
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
									<div
										className="flex items-center justify-between gap-4 p-5 transition focus:outline-none md:p-6">
										<div className="flex items-start gap-3">
											{/* index badge */}
											<span
												className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
												style={{ backgroundColor: "#e8f1fb", color: PRIMARY }}>
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

					{/* CTA footer (optional) */}
					<div className="flex flex-col items-start gap-3 border-t border-zinc-200 p-5 md:flex-row md:items-center md:justify-between md:p-6">
						<p className="text-sm text-zinc-600">
							Need a custom solution or turnkey EPC support?
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-offset-2"
							style={{ backgroundColor: PRIMARY }}>
							Request a Consultation
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
