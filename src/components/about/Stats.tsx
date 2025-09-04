export default function Stats() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	return (
		<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
			{/* Brand glows */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `radial-gradient(700px 480px at 15% 20%, ${BLUE}15, transparent 60%), radial-gradient(700px 480px at 85% 80%, ${ORANGE}15, transparent 60%)`,
					filter: "blur(40px)",
				}}
			/>

			<div className="mx-auto max-w-6xl px-6">
				{/* Header */}
				<div className="text-center">
					<h2 className="text-2xl font-bold tracking-tight text-[#0B1220] sm:text-3xl">
						Quick <span style={{ color: ORANGE }}>Stats</span>
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
						Trust built over decades - validated by delivery, relationships, and
						scale.
					</p>
				</div>

				{/* Stats Grid */}
				<div className="mt-10 grid gap-6 sm:grid-cols-3">
					{[
						{ value: "25+", label: "Years in Business" },
						{ value: "1000+", label: "Projects Delivered" },
						{ value: "200+", label: "Clients Served" },
					].map((s, i) => (
						<div
							key={s.label}
							className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:shadow-lg">
							{/* Accent corner */}
							<span
								aria-hidden
								className="absolute -right-6 -top-6 h-16 w-16 rotate-12 rounded-xl opacity-20 transition group-hover:opacity-40"
								style={{ background: i % 2 === 0 ? BLUE : ORANGE }}
							/>

							{/* Top ribbon */}
							<span
								aria-hidden
								className="absolute left-4 right-4 top-0 h-[3px] rounded-b-full"
								style={{
									background: `linear-gradient(90deg, ${BLUE} 0%, ${ORANGE} 100%)`,
								}}
							/>

							<div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
								<div className="flex items-baseline gap-2">
									<span className="text-4xl font-extrabold tracking-tight text-[#0B1220] sm:text-5xl">
										{s.value}
									</span>
								</div>
								<div
									className="h-1 w-12 rounded-full"
									style={{ background: i % 2 === 0 ? BLUE : ORANGE }}
								/>
								<p className="text-sm font-medium text-gray-600 sm:text-base">
									{s.label}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Divider */}
				<div
					className="mx-auto mt-12 h-[3px] w-40 rounded-full opacity-95"
					style={{ background: `linear-gradient(90deg, ${ORANGE}, ${BLUE})` }}
				/>
			</div>
		</section>
	);
}
