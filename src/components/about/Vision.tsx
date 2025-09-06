const BLUE = "#0056A6";
const ORANGE = "#FF7A1A";

export default function Vision() {
	return (
		<section className="relative overflow-hidden bg-white mb-10">
			{/* Decorative background gradients */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
            radial-gradient(900px 600px at 10% 10%, ${BLUE}15, transparent 60%),
            radial-gradient(900px 600px at 90% 90%, ${ORANGE}15, transparent 65%)
          `,
					filter: "blur(32px)",
				}}
			/>

			<div className="mx-auto max-w-6xl px-6">
				{/* Header */}
				<div className="text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
						<span
							className="inline-block h-1.5 w-1.5 rounded-full"
							style={{ backgroundColor: ORANGE }}
						/>
						Our Vision
					</span>
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Empowering Industry with{" "}
						<span style={{ color: ORANGE }}>Innovation</span>
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
						To empower industries with innovative electrical solutions that
						ensure safety, efficiency, and sustainability.
					</p>
				</div>

				{/* Vision Card */}
				<div className="mx-auto mt-10 max-w-4xl">
					<div className="relative rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-lg">
						{/* Ribbon */}
						<div
							className="pointer-events-none absolute -top-3 left-6 right-6 h-1 rounded-full"
							style={{
								background: `linear-gradient(90deg, ${BLUE} 0%, ${ORANGE} 100%)`,
							}}
						/>

						<div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
							{/* Icon */}
							<div
								className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl"
								style={{ backgroundColor: BLUE }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-7 w-7 text-white"
									aria-hidden>
									<path d="M12 2a.75.75 0 0 1 .67.415l1.93 3.86 4.26.62a.75.75 0 0 1 .416 1.28l-3.08 3 .73 4.25a.75.75 0 0 1-1.088.79L12 15.89l-3.82 2.01a.75.75 0 0 1-1.088-.79l.73-4.25-3.08-3a.75.75 0 0 1 .416-1.28l4.26-.62 1.93-3.86A.75.75 0 0 1 12 2Z" />
								</svg>
							</div>

							{/* Copy */}
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-gray-900">
									What Guides Us
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-gray-600">
									We believe the best engineering blends{" "}
									<span className="font-semibold text-gray-900">safety</span>,{" "}
									<span className="font-semibold text-gray-900">
										operational efficiency
									</span>
									, and{" "}
									<span className="font-semibold text-gray-900">
										environmental responsibility
									</span>
									. Our solutions are built to elevate performance while
									reducing downtime and total cost of ownership.
								</p>

								{/* Pill highlights */}
								<div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
									{[
										{ label: "Safety-first Design", color: BLUE },
										{ label: "Energy Efficiency", color: ORANGE },
										{ label: "Sustainable Operations", color: BLUE },
										{ label: "Lifecycle Reliability", color: ORANGE },
									].map((pill) => (
										<span
											key={pill.label}
											className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium"
											style={{
												borderColor: pill.color,
												color: pill.color,
											}}>
											{pill.label}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Bottom gradient bar */}
						<div
							className="mt-6 h-1 rounded-full"
							style={{
								background: `linear-gradient(90deg, ${ORANGE} 0%, ${BLUE} 100%)`,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
