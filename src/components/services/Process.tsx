import Link from "next/link";
export default function Process() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	const steps = [
		{
			title: "Consultation & Site Survey",
			desc: "We begin with a detailed discussion and on-site assessment to capture load requirements, safety norms, and project constraints.",
			color: BLUE,
		},
		{
			title: "Design & Engineering",
			desc: "Our engineers craft compliant single-line diagrams, layouts, and BOMs optimized for safety, efficiency, and maintainability.",
			color: ORANGE,
		},
		{
			title: "Procurement & Manufacturing",
			desc: "Sourcing of certified materials and in-house/partnered fabrication under strict QA/QC protocols and test plans.",
			color: BLUE,
		},
		{
			title: "Installation, Testing & Commissioning",
			desc: "Complete on-site installation, system interconnections, and rigorous testing/commissioning executed by certified technicians with detailed checklists.",
			color: ORANGE,
		},
		{
			title: "Project Completion & Handover",
			desc: "Final documentation, regulatory clearances, and smooth handover of a fully tested and operational system to your team.",
			color: BLUE,
		},
		{
			title: "After-Sales Support",
			desc: "AMC/CMC options, 24×7 response, genuine spares, and periodic health checks to ensure long-term reliability.",
			color: ORANGE,
		},
	];

	return (
		<section className="relative overflow-hidden bg-white pb-10">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Process <span style={{ color: ORANGE }}>Workflow</span>
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
						A clear, quality-assured delivery from survey to after-sales—so you
						always know what comes next.
					</p>
				</div>

				{/* Timeline */}
				<div className="mt-12">
					<div className="relative">
						{/* Horizontal connector line */}
						<div
							className="hidden lg:block absolute left-0 right-0 top-16 h-[3px]"
							style={{
								background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})`,
							}}
						/>

						<div className="grid gap-6 sm:gap-8 lg:grid-cols-6">
							{steps.map((s, idx) => (
								<div key={s.title} className="relative">
									{/* Vertical connector for mobile */}
									{idx !== steps.length - 1 && (
										<span
											aria-hidden
											className="lg:hidden absolute left-7 top-16 h-full w-[3px]"
											style={{
												background: `linear-gradient(${s.color}, ${
													steps[idx + 1].color
												})`,
											}}
										/>
									)}

									<article className="relative rounded-2xl border border-gray-200 bg-white p-5 pt-6 shadow-md transition hover:shadow-lg">
										{/* Number badge */}
										<span
											className="absolute -top-4 left-5 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow"
											style={{ backgroundColor: s.color }}>
											{String(idx + 1).padStart(2, "0")}
										</span>

										{/* Title */}
										<h3 className="pr-6 text-base font-semibold text-gray-900 sm:text-lg">
											{s.title}
										</h3>

										{/* Divider accent */}
										<div
											className="mt-3 h-1 w-12 rounded-full"
											style={{ backgroundColor: s.color }}
										/>

										{/* Copy */}
										<p className="mt-3 text-sm leading-relaxed text-gray-600">
											{s.desc}
										</p>

										{/* Bottom corner accent */}
										<span
											aria-hidden
											className="pointer-events-none absolute -right-4 -bottom-4 h-12 w-12 rotate-12 rounded-xl opacity-20"
											style={{ backgroundColor: s.color }}
										/>
									</article>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
					<Link
						href="/contact"
						className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
						style={{ backgroundColor: BLUE }}>
						Start a Project
					</Link>
					<Link
						href="/projects"
						className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
						style={{ backgroundColor: ORANGE }}>
						Explore Projects
					</Link>
				</div>
			</div>
		</section>
	);
}
