"use client";

import Link from "next/link";

const BLUE = "text-[#0056A6]";
const ORANGE = "text-[#FF7A1A]";

type AboutPreviewProps = {
	className?: string;
	readMoreHref?: string;
};

export default function AboutIntro({
	className = "bg-white",
	readMoreHref = "/about",
}: AboutPreviewProps) {
	return (
		<section
			className={`relative w-full ${className}`}
			aria-labelledby="about-preview-title">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
				{/* Accent bar */}
				<div className="mb-8 flex gap-2">
					<div className="h-[3px] w-20 rounded-full bg-[#0056A6]" />
					<div className="h-[3px] w-8 rounded-full bg-[#FF7A1A]" />
				</div>

				<div className="overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-lg ring-1 ring-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900">
					<div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
						{/* Left: Copy */}
						<div className="lg:col-span-7 flex flex-col justify-center">
							<h2
								id="about-preview-title"
								className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl">
								About <span className={BLUE}>Arihant</span>{" "}
								<span className={ORANGE}>Control Systems</span>
							</h2>

							<p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg lg:text-xl">
								With over{" "}
								<span className="font-semibold text-[#FF7A1A]">25+</span> years
								of proven expertise, Arihant Control Systems has emerged as a
								trusted leader in{" "}
								<span className="font-semibold text-[#0056A6]">
									Class 1/A Grade electrical contracting
								</span>{" "}
								and precision-engineered control panel manufacturing.
								Established in 1989 under the visionary leadership of Mr. P.
								Raghothama Reddy, the company has earned a strong reputation for
								delivering reliable, safe, and high-performance power
								distribution and automation solutions across industrial,
								commercial, and infrastructure sectors.
							</p>

							{/* Why Us */}
							<ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
								{[
									"Telephone support by experienced engineers (during/after hours)",
									"Transparent, unbiased terms & conditions",
									"Lowers overall maintenance expenditure",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-sm text-zinc-800 transition hover:bg-orange-50 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-200">
										<span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0056A6]" />
										<span>{item}</span>
									</li>
								))}
							</ul>

							{/* CTA Buttons */}
							<div className="mt-6 flex flex-col gap-3 sm:flex-row">
								<Link
									href="/services"
									className="inline-flex items-center justify-center rounded-lg bg-[#0056A6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#004080]">
									Explore Services
								</Link>
								<Link
									href="/contact"
									className="inline-flex items-center justify-center rounded-lg border border-[#0056A6] px-5 py-2.5 text-sm font-semibold text-[#0056A6] shadow-sm transition hover:bg-[#f0f8ff]">
									Contact Us
								</Link>
							</div>
						</div>

						{/* Right: Stats card */}
						<div className="lg:col-span-5">
							<div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
								<div>
									<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
										At a glance
									</div>
									<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
										<Stat
											value="25+"
											label="Years"
											color="bg-[#0056A6] text-white"
										/>
										<Stat
											value="1000+"
											label="Projects"
											color="bg-white text-[#FF7A1A]"
										/>
										<Stat
											value="200+"
											label="Clients"
											color="bg-[#FF7A1A] text-white"
										/>
									</div>
								</div>

								{/* Optional Read More in stats card */}
								<div className="hidden sm:block">
									<Link
										href={readMoreHref}
										className="inline-flex w-full items-center justify-center rounded-lg bg-[#0056A6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#004080]">
										Read More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Stat({
	value,
	label,
	color,
}: {
	value: string;
	label: string;
	color: string;
}) {
	return (
		<div
			className={`flex flex-col items-center justify-center p-4 text-center ${color}`}>
			<div className="text-xl sm:text-2xl font-bold leading-none">{value}</div>
			<div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider">
				{label}
			</div>
		</div>
	);
}
