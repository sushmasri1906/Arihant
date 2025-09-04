import Link from "next/link";

const BLUE = "#0056A6";

type AboutPreviewProps = {
	className?: string;
	readMoreHref?: string;
};

export default function AboutIntro({
	className = "",
	readMoreHref = "/about",
}: AboutPreviewProps) {
	return (
		<section
			className={`relative w-full ${className}`}
			aria-labelledby="about-preview-title">
			{/* Section wrapper with generous spacing */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
				{/* Accent rule */}
				<div
					aria-hidden
					className="mb-8 h-[2px] w-24 rounded-full"
					style={{ backgroundColor: BLUE }}
				/>

				<div className="overflow-hidden rounded-3xl border border-zinc-100 bg-slate-50 shadow-lg ring-1 ring-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900">
					<div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
						{/* Left: Copy */}
						<div className="lg:col-span-7">
							<h2
								id="about-preview-title"
								className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl">
								About{" "}
								<span style={{ color: BLUE }}>Arihant Control Systems</span>
							</h2>

							<p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
								Founded in 1989, Arihant Control Systems is a leader in
								electrical panel manufacturing and contracting. With 25+ years
								of excellence, we engineer reliable solutions that power
								industries across India.
							</p>

							{/* Why Us – compact list with space */}
							<ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
								{[
									"Telephone support by experienced engineers (during/after hours)",
									"Transparent, unbiased terms & conditions",
									"Lowers overall maintenance expenditure",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-200">
										<span
											className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full"
											style={{ backgroundColor: BLUE }}
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>

							{/* CTA on mobile */}
							<div className="mt-6 sm:hidden">
								<Link
									href={readMoreHref}
									className="inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
									style={{ backgroundColor: BLUE }}>
									Read More
								</Link>
							</div>
						</div>

						{/* Right: Stats card */}
						<div className="lg:col-span-5">
							<div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
								<div>
									<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
										At a glance
									</div>
									<div className="mt-4 grid grid-cols-3 divide-x divide-zinc-200 overflow-hidden rounded-xl border border-zinc-100 dark:divide-zinc-800 dark:border-zinc-800">
										<Stat value="25+" label="Years" />
										<Stat value="1000+" label="Projects" />
										<Stat value="200+" label="Clients" />
									</div>
								</div>

								<div className="hidden sm:block">
									<Link
										href={readMoreHref}
										className="inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
										style={{ backgroundColor: BLUE }}>
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

function Stat({ value, label }: { value: string; label: string }) {
	return (
		<div className="flex flex-col items-center justify-center bg-white p-4 text-center dark:bg-zinc-900">
			<div className="text-2xl font-bold leading-none text-zinc-900 dark:text-zinc-100">
				{value}
			</div>
			<div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
				{label}
			</div>
		</div>
	);
}
