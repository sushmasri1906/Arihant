"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Link from "next/link";

const BLUE = "#0056A6";
const ORANGE = "#FF7A1A";

const slides = [
	{
		title: "Powering Industries with Precision",
		desc: "Advanced Electrical Panels & Industrial Automation Solutions engineered for safety, efficiency, and long-term reliability.",
	},
	{
		title: "Class 1/A Certified Electrical Experts",
		desc: "Trusted contracting and panel manufacturing services delivering uncompromised quality across commercial and industrial projects.",
	},
	{
		title: "Reliable. Scalable. Future-Ready.",
		desc: "From MCC & PCC Panels to DG Synchronization and Bus Ducts — complete solutions tailored for modern infrastructure.",
	},
];

const HeroCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		arrows: false,
		fade: true,
	};

	return (
		<section className="relative w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-[#021B33]">
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
						{/* Premium Background */}
						<div
							className="absolute inset-0"
							style={{
								background: `
                  linear-gradient(135deg, #021B33 0%, #003C75 45%, #0056A6 100%)
                `,
							}}
						/>

						{/* Elegant Gradient Lighting */}
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.12),transparent_30%)]" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_35%)]" />

						{/* Professional Grid */}
						<div className="absolute inset-0 opacity-[0.05]">
							<div
								className="w-full h-full"
								style={{
									backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                  `,
									backgroundSize: "70px 70px",
								}}
							/>
						</div>

						{/* Subtle Accent Line */}
						<div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#FF7A1A] via-[#0056A6] to-[#FF7A1A]" />

						{/* Content */}
						<div className="relative z-10 flex items-center h-full">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7 }}
								className="px-5 sm:px-10 md:px-16 lg:px-24 max-w-4xl">
								{/* Badge */}
								<div
									className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-5 border"
									style={{
										background: "rgba(255,255,255,0.06)",
										borderColor: "rgba(255,255,255,0.12)",
										color: "#fff",
										backdropFilter: "blur(10px)",
									}}>
									Class 1/A Certified Electrical Contractors
								</div>

								{/* Heading */}
								<h1 className="text-white font-extrabold tracking-tight leading-tight text-3xl sm:text-4xl md:text-6xl">
									{slide.title}
								</h1>

								{/* Description */}
								<p className="mt-5 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
									{slide.desc}
								</p>

								{/* Service Chips */}
								<div className="mt-6 hidden sm:flex flex-wrap gap-3">
									{[
										"MCC Panels",
										"PCC Panels",
										"APFC Systems",
										"AMF Panels",
										"Bus Ducts",
										"DG Control",
									].map((item, i) => (
										<span
											key={item}
											className="rounded-md px-4 py-2 text-xs font-semibold border backdrop-blur-sm"
											style={{
												background:
													i % 2 === 0
														? "rgba(0,86,166,0.15)"
														: "rgba(255,122,26,0.12)",
												borderColor:
													i % 2 === 0
														? "rgba(0,86,166,0.4)"
														: "rgba(255,122,26,0.4)",
												color: "#fff",
											}}>
											{item}
										</span>
									))}
								</div>

								{/* CTA Buttons */}
								<div className="mt-8 flex flex-wrap gap-4">
									<Link
										href="/services"
										className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
										style={{
											background: BLUE,
											boxShadow: "0 10px 30px rgba(0,86,166,0.35)",
										}}>
										Explore Services
									</Link>

									<Link
										href="/contact"
										className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
										style={{
											background: ORANGE,
											boxShadow: "0 10px 30px rgba(255,122,26,0.35)",
										}}>
										Contact Us
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
};

export default HeroCarousel;
