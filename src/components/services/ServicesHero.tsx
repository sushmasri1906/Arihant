"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	return (
		<section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden bg-black">
			{/* Background image */}
			<div className="absolute inset-0">
				<Image
					src="https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg"
					alt="Electrical infrastructure background"
					fill
					className="object-cover"
					priority
				/>
				<div
					aria-hidden
					className="absolute inset-0 bg-black/60"
					style={{
						background: `linear-gradient(90deg, ${BLUE}33 0%, ${ORANGE}33 50%, ${BLUE}33 100%), rgba(0,0,0,0.55)`,
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
				<h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
					Our <span style={{ color: ORANGE }}>Services</span>
				</h1>
				<p className="mt-4 max-w-3xl text-base text-blue-100/95 sm:text-lg md:text-xl">
					Delivering end-to-end electrical solutions - from substations to
					overhead transmission - engineered for safety, efficiency, and
					reliability.
				</p>

				<div className="mt-8 flex flex-wrap justify-center gap-3">
					<Link
						href="/projects"
						className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-95"
						style={{ backgroundColor: BLUE }}>
						Explore Projects
					</Link>
					<Link
						href="/contact"
						className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-95"
						style={{ backgroundColor: ORANGE }}>
						Contact Us
					</Link>
				</div>
			</div>
		</section>
	);
}
