"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section className="relative bg-white py-12 lg:py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
						Contact <span style={{ color: ORANGE }}>Information</span>
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600">
						We typically respond the same business day. Call, email, or visit
						our office.
					</p>
				</div>

				{/* Cards */}
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{/* Phone */}
					<motion.article
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						variants={cardVariants}
						className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-gray-300">
						<span
							className="absolute left-5 top-0 h-1 w-20 rounded-b-full"
							style={{
								background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})`,
							}}
						/>
						<div className="flex items-start gap-3">
							<div
								className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white shadow"
								style={{ backgroundColor: BLUE }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-5 w-5">
									<path
										fillRule="evenodd"
										d="M1.5 4.5A3 3 0 0 1 4.5 1.5h2.25a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-.75.75H5.934a.75.75 0 0 0-.707.474 12.31 12.31 0 0 0 7.325 7.325.75.75 0 0 0 .474-.707V16.5a.75.75 0 0 1 .75.75V19.5a3 3 0 0 1-3 3h-1.5C5.201 22.5 1.5 18.799 1.5 14.25v-1.5a3 3 0 0 1 3-3h2.25a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-.75.75H4.5a1.5 1.5 0 0 0-1.5 1.5v1.5A9.75 9.75 0 0 0 12.75 21h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5a.75.75 0 0 1 .75-.75h.458a.75.75 0 0 0 .707-.474c.287-.73.52-1.486.693-2.264a.75.75 0 0 0-.474-.707H15a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 0 .75.75h1.5a3 3 0 0 1 3 3v1.5c0 4.549-3.701 8.25-8.25 8.25h-1.5A12.75 12.75 0 0 1 1.5 16.5v-1.5a12.75 12.75 0 0 1 12.75-12.75h1.5a3 3 0 0 1 3 3v1.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5A9.75 9.75 0 0 0 1.5 12.75v1.5A9.75 9.75 0 0 0 11.25 24h1.5a.75.75 0 0 0 .75-.75v-1.5"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-base font-semibold text-black">Phone</h3>
								<a
									href="tel:+919000141772"
									className="mt-1 block text-sm font-medium text-blue-700 hover:underline">
									+91 9000141772
								</a>
								<p className="mt-2 text-xs text-gray-500 leading-relaxed">
									24×7 response available for maintenance customers.
								</p>
							</div>
						</div>
					</motion.article>

					{/* Email */}
					<motion.article
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
						variants={cardVariants}
						className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-gray-300">
						<span
							className="absolute left-5 top-0 h-1 w-20 rounded-b-full"
							style={{
								background: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
							}}
						/>
						<div className="flex items-start gap-3">
							<div
								className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white shadow"
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
								<h3 className="text-base font-semibold text-black">Email</h3>
								<a
									href="mailto:arihantcontrol@gmail.com"
									className="mt-1 block text-sm font-medium text-blue-700 hover:underline">
									arihantcontrol@gmail.com
								</a>
							</div>
						</div>
					</motion.article>

					{/* Address */}
					<article className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-gray-300">
						<span
							className="absolute left-5 top-0 h-1 w-20 rounded-b-full"
							style={{
								background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})`,
							}}
						/>
						<div className="flex items-start gap-3">
							{/* Icon */}
							<div
								className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white shadow"
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

							{/* Content */}
							<div className="flex-1 min-w-0">
								<h3 className="text-base font-semibold text-black">
									Office Address
								</h3>

								{/* Scrollable block with fixed height */}
								<div className="mt-2 h-40 overflow-y-auto pr-1.5 text-sm leading-relaxed text-gray-700 custom-scroll">
									<address className="not-italic mb-3">
										SY. NO. 316, Plot No. 5,
										<br />
										Near Aaiyee Matha Temple, Pipeline Road,
										<br />
										Subhash Nagar, IDA Jeedimetla,
										<br />
										Hyderabad – 500055, India
									</address>
									<address className="not-italic">
										SY. NO. 354, Plot No. E30 & E36,
										<br />
										Industrial Park, TSIIC Area,
										<br />
										Kallakal (V), Manoharabad (M),
										<br />
										Medak District, Telangana – 502334, India
									</address>
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

			<style jsx global>{`
				.custom-scroll::-webkit-scrollbar {
					width: 6px;
				}
				.custom-scroll::-webkit-scrollbar-thumb {
					background: #c5c5c5;
					border-radius: 9999px;
				}
				.custom-scroll::-webkit-scrollbar-thumb:hover {
					background: #a0a0a0;
				}
				.custom-scroll::-webkit-scrollbar-track {
					background: transparent;
				}
			`}</style>
		</section>
	);
}
