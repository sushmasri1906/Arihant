"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
	{
		name: "MCC Panel Boards",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1758622414/acs2_vqjvdy.png",
	},
	{
		name: "Control Disk Panel Boards",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1758624186/acs3_usrgq7.png",
	},
	{
		name: "PCC & APFC Panel Boards",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921036/7_v9lfs7.png",
	},
	{
		name: "PCC & APFC Panel Boards",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1758624452/acs4_ozljyj.png",
	},
	{
		name: "PCC & APFC Panel Boards",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1758624500/acs5_zihqmt.png",
	},
];

export default function ManufacturingProducts() {
	return (
		<section className="relative bg-white py-16 lg:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
						Our <span className="text-[#0056A6]">Manufacturing</span>{" "}
						<span className="text-[#FF7A1A]">Products</span>
					</h2>
					<p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
						Precision-engineered panels for safe, efficient, and reliable
						operations.
					</p>
				</div>

				{/* Product Grid */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{products.map((product, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition">
							{/* Gradient border hover effect */}
							<div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#0056A6]/70 group-hover:shadow-[0_0_15px_#FF7A1A] transition-all duration-500"></div>

							{/* Image */}
							<div className="relative w-full h-64 flex items-center justify-center bg-gray-50">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-contain p-6"
								/>
							</div>

							{/* Name */}
							<div className="p-5 text-center relative z-10">
								<h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0056A6]">
									{product.name}
								</h3>
								<div className="mt-3 h-1 w-12 bg-gradient-to-r from-[#0056A6] to-[#FF7A1A] mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
