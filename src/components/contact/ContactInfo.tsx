export default function ContactInfo() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	return (
		<section className="relative bg-white py-14 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="text-center">
					<h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
						Contact <span style={{ color: ORANGE }}>Information</span>
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
						We typically respond the same business day. Call, email, or visit
						our office.
					</p>
				</div>

				{/* Cards */}
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{/* Phone */}
					<article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
						<span
							className="absolute left-5 top-0 h-1 w-24 rounded-b-full"
							style={{
								background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})`,
							}}
						/>
						<div className="flex items-start gap-3">
							{/* Icon */}
							<div
								className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
								style={{ backgroundColor: BLUE }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-5 w-5">
									<path
										fillRule="evenodd"
										d="M1.5 4.5A3 3 0 0 1 4.5 1.5h2.25a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-.75.75H5.934a.75.75 0 0 0-.707.474 12.31 12.31 0 0 0 7.325 7.325.75.75 0 0 0 .474-.707V16.5a.75.75 0 0 1 .75.75V19.5a3 3 0 0 1-3 3h-1.5C5.201 22.5 1.5 18.799 1.5 14.25v-1.5a3 3 0 0 1 3-3h2.25a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-.75.75H4.5a1.5 1.5 0 0 0-1.5 1.5v1.5A9.75 9.75 0 0 0 12.75 21h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5a.75.75 0 0 1 .75-.75h.458a.75.75 0 0 0 .707-.474c.287-.73.52-1.486.693-2.264a.75.75 0 0 0-.474-.707H15a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 0 .75.75h1.5a3 3 0 0 1 3 3v1.5c0 4.549-3.701 8.25-8.25 8.25h-1.5A12.75 12.75 0 0 1 1.5 16.5v-1.5a12.75 12.75 0 0 1 12.75-12.75h1.5a3 3 0 0 1 3 3v1.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5A9.75 9.75 0 0 0 1.5 12.75v1.5A9.75 9.75 0 0 0 11.25 24h1.5A12.75 12.75 0 0 0 25.5 11.25v-1.5A12.75 12.75 0 0 0 14.25-1.5h-1.5A12.75 12.75 0 0 0 .75 10.5v1.5A12.75 12.75 0 0 0 12.75 24h1.5a.75.75 0 0 0 .75-.75v-1.5"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-black">Phone</h3>
								<div className="mt-2 space-y-1.5 text-sm">
									<a
										href="tel:+919951119777"
										className="block text-blue-700 hover:underline">
										+91 99511 19777
									</a>
									<a
										href="tel:+919246356924"
										className="block text-blue-700 hover:underline">
										+91 92463 56924
									</a>
								</div>
								<p className="mt-3 text-xs text-gray-500">
									24×7 response available for maintenance customers.
								</p>
							</div>
						</div>
					</article>

					{/* Email */}
					<article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
						<span
							className="absolute left-5 top-0 h-1 w-24 rounded-b-full"
							style={{
								background: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
							}}
						/>
						<div className="flex items-start gap-3">
							<div
								className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
								style={{ backgroundColor: ORANGE }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-5 w-5">
									<path d="M1.5 4.5h21v15h-21v-15Zm2.19 1.5 8.31 6.23L20.31 6h-16.62Zm17.31 12v-9.68l-9 6.75-9-6.75V18h18Z" />
								</svg>
							</div>
							<div>
								<div className="flex items-center gap-2">
									<h3 className="text-lg font-semibold text-black">Email</h3>
									<span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600">
										Placeholder
									</span>
								</div>
								<a
									href="mailto:info@arihantcontrols.com"
									className="mt-2 block text-blue-700 hover:underline">
									info@arihantcontrols.com
								</a>
								<p className="mt-3 text-xs text-gray-500">
									Replace with your official support/sales email before
									publishing.
								</p>
							</div>
						</div>
					</article>

					{/* Address */}
					<article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
						<span
							className="absolute left-5 top-0 h-1 w-24 rounded-b-full"
							style={{
								background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})`,
							}}
						/>
						<div className="flex items-start gap-3">
							<div
								className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
								style={{ backgroundColor: BLUE }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-5 w-5">
									<path
										fillRule="evenodd"
										d="M12 2.25a7.5 7.5 0 0 0-7.5 7.5c0 5.25 7.5 12 7.5 12s7.5-6.75 7.5-12a7.5 7.5 0 0 0-7.5-7.5Zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-black">
									Office Address
								</h3>
								<address className="mt-2 not-italic text-sm leading-relaxed text-gray-700">
									SY. NO. 316, Plot No. 5,
									<br />
									Near Aaiyee Matha Temple, Pipeline Road,
									<br />
									Subhash Nagar, IDA Jeedimetla,
									<br />
									Hyderabad – 500055, India
								</address>
								<div className="mt-3 flex flex-wrap gap-2">
									<a
										href="#map"
										className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-gray-50">
										View on map
									</a>
									<a
										href="/contact#contact-form"
										className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-95"
										style={{ backgroundColor: ORANGE }}>
										Send an inquiry
									</a>
								</div>
							</div>
						</div>
					</article>
				</div>

				{/* Note */}
				<p className="mt-8 text-center text-xs text-gray-500">
					Business hours: Mon–Sat, 9:30 AM – 6:30 PM IST • Closed on public
					holidays
				</p>
			</div>
		</section>
	);
}
