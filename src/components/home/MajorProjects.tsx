"use client";

import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ORANGE = "#ff6600";

type Project = {
	name: string;
	year: number | string;
	industry: string;
	imageUrl: string;
};

type MajorProjectsProps = {
	title?: string;
	subtitle?: string;
	projects?: Project[];
	layout?: "carousel" | "grid";
	className?: string;
};

const DEFAULT_PROJECTS: Project[] = [
	{
		name: "33kV Substation Panel Install",
		year: 2024,
		industry: "Manufacturing",
		imageUrl:
			"https://images.unsplash.com/photo-1581091014534-8987c1d647c1?q=80&w=1600&auto=format&fit=crop",
	},
	{
		name: "MCC for Process Plant",
		year: 2023,
		industry: "Food Processing",
		imageUrl:
			"https://images.unsplash.com/photo-1581092334661-1b4d8b5f3e7c?q=80&w=1600&auto=format&fit=crop",
	},
	{
		name: "PCC & PDB Upgrade",
		year: 2023,
		industry: "Pharma",
		imageUrl:
			"https://images.unsplash.com/photo-1581090464604-15a5b7a0c772?q=80&w=1600&auto=format&fit=crop",
	},
	{
		name: "Solar Control Panels",
		year: 2022,
		industry: "Renewables",
		imageUrl:
			"https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
	},
	{
		name: "Data Center Power Panels",
		year: 2024,
		industry: "IT / Data Center",
		imageUrl:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
	},
	{
		name: "HT & LT Cable Laying",
		year: 2022,
		industry: "Infrastructure",
		imageUrl:
			"https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=1600&auto=format&fit=crop",
	},
];

export default function MajorProjects({
	title = "Major Projects",
	subtitle = "A few recent installations across industries.",
	projects = DEFAULT_PROJECTS,
	layout = "carousel",
	className = "my-20",
}: MajorProjectsProps) {
	return (
		<section className={`w-full ${className}`} aria-labelledby="projects-title">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="mb-6 flex flex-col gap-2">
					<span
						className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold"
						style={{ backgroundColor: "#fff3e6", color: ORANGE }}>
						{title.toUpperCase()}
					</span>
					<h2
						id="projects-title"
						className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
						Panels Installed & Sites Commissioned
					</h2>
					{subtitle && (
						<p className="max-w-3xl text-sm text-zinc-600">{subtitle}</p>
					)}
				</div>

				{layout === "grid" ? (
					<ProjectsGrid projects={projects} />
				) : (
					<ProjectsCarousel projects={projects} />
				)}
			</div>
		</section>
	);
}

/* ----------------------------- GRID LAYOUT ----------------------------- */

function ProjectsGrid({ projects }: { projects: Project[] }) {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((p) => (
				<ProjectCard key={`${p.name}-${p.year}`} project={p} />
			))}
		</div>
	);
}

function ProjectsCarousel({ projects }: { projects: Project[] }) {
	const trackRef = useRef<HTMLDivElement | null>(null);
	const [index, setIndex] = useState(0);

	const scrollToIndex = (newIndex: number) => {
		if (!trackRef.current) return;
		const container = trackRef.current;
		const child = container.children[newIndex] as HTMLElement | null;
		if (child) {
			container.scrollTo({
				left: child.offsetLeft,
				behavior: "smooth",
			});
			setIndex(newIndex);
		}
	};

	const prev = () => {
		if (index > 0) scrollToIndex(index - 1);
	};

	const next = () => {
		if (index < projects.length - 1) scrollToIndex(index + 1);
	};

	return (
		<div className="relative">
			{/* Edge fade */}
			<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
			<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />

			{/* Buttons */}
			<div className="absolute inset-y-0 left-0 z-20 flex items-center pl-1">
				<button
					aria-label="Previous"
					onClick={prev}
					className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:opacity-40"
					disabled={index === 0}>
					<FiChevronLeft />
				</button>
			</div>
			<div className="absolute inset-y-0 right-0 z-20 flex items-center pr-1">
				<button
					aria-label="Next"
					onClick={next}
					className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:opacity-40"
					disabled={index >= projects.length - 1}>
					<FiChevronRight />
				</button>
			</div>

			{/* Track */}
			<div
				ref={trackRef}
				className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-1 pr-2 pl-2 md:gap-6"
				style={{ scrollbarWidth: "none" }}>
				{projects.map((p, i) => (
					<div
						key={`${p.name}-${p.year}`}
						className="snap-center shrink-0 basis-[82%] sm:basis-[60%] md:basis-[48%] lg:basis-[32%]">
						<ProjectCard project={p} />
					</div>
				))}
			</div>

			{/* Dots */}
			<div className="mt-4 flex justify-center gap-2">
				{projects.map((_, i) => (
					<button
						key={i}
						aria-label={`Go to project ${i + 1}`}
						onClick={() => scrollToIndex(i)}
						className="h-2.5 w-2.5 rounded-full border border-zinc-300 transition"
						style={{
							backgroundColor: i === index ? ORANGE : "white",
						}}
					/>
				))}
			</div>
		</div>
	);
}

/* ------------------------------- CARD --------------------------------- */

function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
			{/* Image */}
			<div className="relative aspect-[4/3] w-full overflow-hidden">
				<img
					src={project.imageUrl}
					alt={project.name}
					className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
				/>
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
			</div>

			{/* Caption */}
			<div className="flex items-center justify-between gap-3 px-4 py-3">
				<div className="min-w-0">
					<h3 className="truncate text-sm font-semibold text-orange-500">
						{project.name}
					</h3>
					<p className="truncate text-xs text-zinc-600">
						{project.year} · {project.industry}
					</p>
				</div>
				<span
					className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:border-zinc-300 group-hover:text-zinc-700"
					aria-hidden>
					<FiChevronRight />
				</span>
			</div>

			{/* Accent bar */}
			<div
				className="h-0.5 w-full"
				style={{ background: `linear-gradient(90deg, ${ORANGE}, #cc5200)` }}
			/>
		</article>
	);
}
