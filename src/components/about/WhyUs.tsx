const BLUE = "#0056A6";
const ORANGE = "#FF7A1A";

export default function WhyUs() {
	return (
		<section className="relative bg-white py-20 sm:py-24 lg:py-28">
			<div className="mx-auto max-w-7xl px-6">
				{/* Heading */}
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl">
						Why <span style={{ color: ORANGE }}>Choose Us</span>
					</h2>
					<p className="mt-4 max-w-2xl mx-auto text-base text-gray-600">
						At Arihant Control Systems, we provide unmatched service quality
						backed by decades of expertise. Here’s why our customers trust us:
					</p>
				</div>

				{/* Cards */}
				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{
							title: "High-quality services at reasonable prices",
							desc: "We deliver high service levels while reducing overall expenditure for clients.",
						},
						{
							title: "24/7 Response Time",
							desc: "Round-the-clock support ensures we’re available for any eventuality, anytime.",
						},
						{
							title: "Flawless Repairs",
							desc: "Repairs are performed with precision and care, ensuring smooth operations.",
						},
						{
							title: "Genuine Parts",
							desc: "We use only authentic parts and components to ensure long-lasting reliability.",
						},
						{
							title: "Free Emergency Visits",
							desc: "Emergency breakdown visits are provided at no additional cost.",
						},
						{
							title: "Fast Maintenance Support",
							desc: "Support will be made available within 24 hours of a call or email.",
						},
						{
							title: "Maintenance Contracts",
							desc: "Enjoy peace of mind with efficient, economical service from trained ACS personnel.",
						},
						{
							title: "Technical & Email Support",
							desc: "Get round-the-clock technical assistance via phone or email.",
						},
						{
							title: "Unbiased & Transparent Terms",
							desc: "We operate with clear, fair, and transparent clauses for all clients.",
						},
					].map((item) => (
						<div
							key={item.title}
							className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md">
							<div className="flex items-center gap-3">
								<span
									className="flex h-10 w-10 items-center justify-center rounded-full"
									style={{ backgroundColor: `${ORANGE}22`, color: ORANGE }}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-5 w-5">
										<path
											fillRule="evenodd"
											d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 1 0-1.22-.88l-3.517 4.874-1.544-1.544a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.138-.094l3.013-4.666.94-1.001Z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
								<h3 className="text-lg font-semibold" style={{ color: BLUE }}>
									{item.title}
								</h3>
							</div>
							<p className="mt-3 text-sm text-gray-600">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
