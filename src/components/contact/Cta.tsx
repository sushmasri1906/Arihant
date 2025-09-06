export default function Cta() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	return (
		<section className="relative bg-gradient-to-r from-[#0056A6] via-[#004a90] to-[#003b73] py-16 sm:py-20 lg:py-24 text-white">
			{/* Overlay accents */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-20"
				style={{
					background: `radial-gradient(800px 400px at 20% 20%, ${ORANGE}44, transparent 70%), radial-gradient(800px 400px at 80% 80%, ${BLUE}66, transparent 70%)`,
					filter: "blur(40px)",
				}}
			/>

			<div className="relative mx-auto max-w-5xl px-6 text-center">
				<h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
					Looking for a reliable electrical engineering partner?
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
					Call us today or drop us a message — we’ll be happy to assist you.
				</p>

				<div className="mt-8 flex flex-wrap justify-center gap-4">
					<a
						href="tel:+919951119777"
						className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-95"
						style={{ backgroundColor: ORANGE }}>
						📞 +91 99511 19777
					</a>
					<a
						href="/contact#contact-form"
						className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-95"
						style={{ backgroundColor: BLUE }}>
						✉️ Drop us a message
					</a>
				</div>

				{/* Helper note */}
				<p className="mt-6 text-xs text-blue-100/80">
					24×7 emergency support available for contracted maintenance clients.
				</p>
			</div>
		</section>
	);
}
