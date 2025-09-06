"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceCategories() {
	const services = [
		{
			title: "Substation Up to 33 KV",
			desc: "We design, install, and commission substations up to 33KV, ensuring reliable power distribution for industries, commercial complexes, and infrastructure projects.",
			href: "/services/substation-33kv",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/Blogpost-image_iec-61850-in-substation-automation_bb4a5d71-048e-455f-8573-ca864458575a_z63ayl.jpg",
		},
		{
			title: "LT Distribution System",
			desc: "Our LT distribution systems deliver safe and efficient low-tension power to industries, commercial facilities, and residential projects with maximum uptime.",
			href: "/services/lt-distribution",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/electrical_20switchboard_exbn0v.png",
		},
		{
			title: "HT & LT Cable Laying",
			desc: "We provide professional HT & LT underground cable laying services with precision trenching, safe jointing, and compliance with all safety standards.",
			href: "/services/cable-laying",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg",
		},
		{
			title: "HT & LT Termination",
			desc: "Our skilled engineers ensure secure HT & LT cable terminations using high-quality kits, preventing faults and ensuring long-term performance.",
			href: "/services/cable-termination",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907858/yelantsevv_AdobeStock_304496813_b6jq7h.jpg",
		},
		{
			title: "Internal & External Lighting",
			desc: "From industrial sheds to street lighting, we deliver complete internal and external lighting solutions with energy-efficient designs and advanced control systems.",
			href: "/services/lighting",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/Blogpost-image_iec-61850-in-substation-automation_bb4a5d71-048e-455f-8573-ca864458575a_z63ayl.jpg",
		},
		{
			title: "Overhead Transmission Towers",
			desc: "We design and erect overhead transmission towers with robust engineering, ensuring long-distance, uninterrupted power transmission.",
			href: "/services/oh-towers",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907858/yelantsevv_AdobeStock_304496813_b6jq7h.jpg",
		},
		{
			title: "Overhead Transmission Lines",
			desc: "Our expertise includes planning and installation of HT/LT overhead lines, with strict adherence to safety standards and reliable operations.",
			href: "/services/oh-lines",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg",
		},
	];

	return (
		<section className="relative bg-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto max-w-7xl px-6">
				{/* Section header */}
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Our <span className="text-[#FF7A1A]">Service Categories</span>
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
						Delivering end-to-end electrical contracting and engineering with
						safety, efficiency, and reliability at the core.
					</p>
				</div>

				{/* Grid */}
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((s, idx) => (
						<article
							key={s.title}
							className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-lg">
							{/* Image */}
							<div className="relative h-40 w-full overflow-hidden">
								<Image
									src={s.img}
									alt={s.title}
									fill
									className="object-cover transition duration-700 group-hover:scale-[1.05]"
								/>
								{/* Gradient overlay */}
								<div
									aria-hidden
									className="absolute inset-0"
									style={{
										background:
											"linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.35) 75%)",
									}}
								/>
								{/* Top ribbon */}
								<span
									className="absolute left-4 right-4 top-0 h-[3px] rounded-b-full"
									style={{
										background: `linear-gradient(90deg, #0056A6 0%, #FF7A1A 100%)`,
									}}
								/>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-lg font-semibold text-gray-900">
									{s.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-gray-600">
									{s.desc}
								</p>

								<div className="mt-4 flex items-center gap-3">
									<Link
										href="/contact"
										className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white transition hover:brightness-95"
										style={{
											backgroundColor: idx % 2 === 0 ? "#0056A6" : "#FF7A1A",
										}}>
										Get a quote
									</Link>
								</div>
							</div>

							{/* Corner accent */}
							<span
								aria-hidden
								className="pointer-events-none absolute -right-6 -top-6 h-14 w-14 rotate-12 rounded-xl opacity-20"
								style={{ background: idx % 2 === 0 ? "#0056A6" : "#FF7A1A" }}
							/>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
