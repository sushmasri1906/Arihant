"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/Blogpost-image_iec-61850-in-substation-automation_bb4a5d71-048e-455f-8573-ca864458575a_z63ayl.jpg",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907858/yelantsevv_AdobeStock_304496813_b6jq7h.jpg",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/electrical_20switchboard_exbn0v.png",
];

const BLUE = "#0056A6";
const ORANGE = "#FF7A1A";

const HeroCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: false,
		arrows: false,
		fade: true,
		adaptiveHeight: false,
		responsive: [
			{ breakpoint: 1280, settings: { fade: true } },
			{ breakpoint: 1024, settings: { fade: false } },
			{ breakpoint: 640, settings: { fade: false } },
		],
	};

	return (
		<section className="relative w-screen h-[60vh] sm:h-[68vh] md:h-[76vh] lg:h-screen overflow-hidden">
			{/* Background Slider */}
			<Slider {...settings}>
				{images.map((src, index) => (
					<div
						key={index}
						className="relative h-[60vh] sm:h-[68vh] md:h-[76vh] lg:h-screen">
						<Image
							src={src}
							alt={`Arihant control systems slide ${index + 1}`}
							fill
							priority={index === 0}
							sizes="100vw"
							className="object-cover"
						/>
						{/* Vignette + brand overlay */}
						<div
							aria-hidden
							className="absolute inset-0"
							style={{
								background: `
                  radial-gradient(120% 120% at 20% 35%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.06) 75%, rgba(0,0,0,0) 100%),
                  linear-gradient(90deg, rgba(0,86,166,0.28) 0%, rgba(255,122,26,0.25) 55%, rgba(0,86,166,0.18) 100%)
                `,
							}}
						/>
					</div>
				))}
			</Slider>

			{/* Content Overlay */}
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
				className="absolute left-4 right-4 top-[46%] sm:left-8 md:left-14 lg:left-24">
				<div className="max-w-3xl p-3 sm:p-5 md:p-8">
					<h1 className="text-white font-extrabold tracking-tight leading-tight text-2xl sm:text-3xl md:text-5xl">
						Arihant <span style={{ color: BLUE }}>Control</span>{" "}
						<span >Systems</span>
					</h1>
					<p className="mt-3 text-white/95 text-sm sm:text-base md:text-lg max-w-2xl">
						High-Grade Electrical Panels & Contracting –{" "}
						<span  className="font-semibold">
							Class 1/A Certified
						</span>{" "}
						for Safety, Reliability, and Peak Performance
					</p>

					{/* Product chips */}
					<div className="mt-4 flex flex-wrap gap-2">
						{[
							"MCC",
							"PCC",
							"APFC",
							"AMF",
							"DG Control",
							"Bus Ducts",
							"Distribution Boards",
						].map((t, i) => (
							<span
								key={t}
								className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
								style={{
									border: `1px solid ${i % 2 === 0 ? BLUE : ORANGE}`,
									backgroundColor: "rgba(255,255,255,0.9)",
									color: i % 2 === 0 ? BLUE : ORANGE,
								}}>
								{t}
							</span>
						))}
					</div>

					{/* CTAs */}
					<div className="mt-6 flex flex-wrap gap-3">
						<Link
							href="/services"
							className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
							style={{ backgroundColor: BLUE }}>
							Explore Services
						</Link>
						<Link
							href="/contact"
							className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
							style={{ backgroundColor: ORANGE }}>
							Contact Us
						</Link>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroCarousel;
