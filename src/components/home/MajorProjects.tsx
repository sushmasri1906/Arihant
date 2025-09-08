"use client";

import Link from "next/link";

const ORANGE = "#FF7A1A";

type Project = {
	name: string;
	scope: string;
	sector: string;
};

const DEFAULT_PROJECTS: Project[] = [
	{
		name: "Quartzkraft LLP",
		scope:
			"33KV Switchyard, HT Panels, LT Panels, Cable Laying, Street Lights.",
		sector: "Industrial",
	},
	{
		name: "Ravileela Granite Ltd",
		scope:
			"11KV Switchyard, HT Panels, LT Panels, Cable Laying, Street Lights.",
		sector: "Industrial",
	},
	{
		name: "Midwest Granite Ltd",
		scope:
			"33KV Switchyard, HT Panels, LT Panels, Cable Laying, Street Lights.",

		sector: "Industrial",
	},
	{
		name: "Emory Hospital (Attapur)",
		scope: "11KV Switchyard, LT Panels, Cable Laying, Street Lights.",

		sector: "Hospital",
	},
];

export default function MajorProjects() {
	return (
		<section className="my-20 bg-white">
			<div className="mx-auto max-w-7xl px-6 text-center">
				<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
					Major <span style={{ color: ORANGE }}>Projects</span>
				</h2>
				<p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
					Some of our recent installations across industries.
				</p>
				<div
					className="mx-auto mt-5 h-1 w-24 rounded-full"
					style={{ background: `linear-gradient(90deg, #0056A6, ${ORANGE})` }}
				/>
			</div>

			<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-6">
				{DEFAULT_PROJECTS.map((p) => (
					<Link
						key={p.name}
						href="/projects"
						className="group flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md">
						<div>
							<h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>
							<p className="mt-1 text-xs text-gray-600">{p.scope}</p>
						</div>
						<span
							className="mt-3 inline-block rounded-full border px-3 py-1 text-xs font-medium"
							style={{ borderColor: ORANGE, color: ORANGE }}>
							{p.sector}
						</span>
					</Link>
				))}
			</div>

			<div className="mt-10 text-center">
				<Link
					href="/projects"
					className="inline-block rounded-full bg-orange-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-700">
					View All Projects
				</Link>
			</div>
		</section>
	);
}
