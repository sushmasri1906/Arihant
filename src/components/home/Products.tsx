"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

// ---------- Data ----------
const MAIN_IMAGE =
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921036/7_v9lfs7.png";

const PRODUCT_GROUPS: Array<{
	main: string;
	others: Array<{ src: string }>;
}> = [
	{
		main: MAIN_IMAGE,
		others: [
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921031/8_w4vlz8.png",
			},
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921022/9_mq6see.png",
			},
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921026/10_pz21fa.png",
			},
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921031/11_uqbcit.png",
			},
		],
	},
	{
		main: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921033/12_dabsyo.png",
		others: [
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921029/13_tngz2m.png",
			},
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921025/14_xzk95d.png",
			},
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921017/15_zyeo5b.png",
			},
			{
				src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756921018/16_sw8tdx.png",
			},
		],
	},
];

// ---------- Motion Variants ----------
const fadeUp = {
	initial: { opacity: 0, y: 32 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
	animate: { transition: { staggerChildren: 0.08 } },
};

// ---------- Helper ----------
function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

// ---------- Sub-components ----------
function SectionHeader() {
	return (
		<div className="mx-auto mb-12 max-w-3xl text-center">
			<motion.span
				className="inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-sky-700 border-sky-200 bg-sky-50"
				{...fadeUp}>
				Our Product Lines
			</motion.span>
			<motion.h2
				className="mt-4 text-3xl font-extrabold leading-tight text-[#0056A6] md:text-4xl"
				{...fadeUp}>
				Manufacturing Products
			</motion.h2>
			<motion.p
				className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg"
				{...fadeUp}>
				Empowering innovation and precision manufacturing. From circuit to
				system, we engineer excellence in every component—built to electrify
				industries and illuminate possibilities.
			</motion.p>
		</div>
	);
}

function ProductCard({ src }: { src: string }) {
	return (
		<motion.figure
			variants={fadeUp}
			className={cn(
				"group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow",
				"hover:shadow-lg focus-within:shadow-lg"
			)}
			tabIndex={0}>
			<div className="relative aspect-[4/3] w-full">
				<Image
					src={src}
					alt="Product"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					priority={false}
				/>
			</div>
		</motion.figure>
	);
}

function GroupBlock({
	index,
	main,
	others,
}: {
	index: number;
	main: string;
	others: Array<{ src: string }>;
}) {
	const priority = useMemo(() => index === 0, [index]);

	return (
		<section className="mb-20">
			{/* Main banner */}
			<motion.div
				variants={fadeUp}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				className="relative w-full overflow-hidden rounded-2xl border bg-white shadow-lg">
				<div className="relative aspect-[16/9] w-full">
					<Image
						src={main}
						alt="Main Product"
						fill
						sizes="100vw"
						priority={priority}
						className="object-cover"
					/>
				</div>
			</motion.div>

			{/* Grid */}
			<motion.div
				variants={staggerContainer}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.2 }}
				className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{others.map((item, i) => (
					<ProductCard key={`${index}-${i}`} src={item.src} />
				))}
			</motion.div>
		</section>
	);
}

export default function Products() {
	return (
		<section className="relative bg-gradient-to-b from-white to-sky-50 py-16 lg:py-24">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<SectionHeader />
				{PRODUCT_GROUPS.map((g, idx) => (
					<GroupBlock key={idx} index={idx} main={g.main} others={g.others} />
				))}
			</div>

			{/* Decorative blurs */}
			<div className="pointer-events-none absolute -top-10 left-1/3 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
		</section>
	);
}
