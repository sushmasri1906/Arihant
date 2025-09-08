"use client";

import { section } from "framer-motion/client";
import { useMemo, useState } from "react";

export default function ProjectReferencesReadable() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	type Project = {
		name: string;
		scope: string;
		href: string;
		img: string;
		sector: string; // Added sector
	};

	type Region = {
		title: string;
		projects: Project[];
	};

	const placeholderA =
		"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/Blogpost-image_iec-61850-in-substation-automation_bb4a5d71-048e-455f-8573-ca864458575a_z63ayl.jpg";
	const placeholderB =
		"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907858/yelantsevv_AdobeStock_304496813_b6jq7h.jpg";
	const placeholderC =
		"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg";

	const regions: Region[] = [
		{
			title: "Ongole SEZ, A.P",
			projects: [
				{
					name: "Quartzkraft LLP",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/quartzkraft-llp-ongole",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Ravileela Granite Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/ravileela-granite-ongole",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Midwest Granite Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/midwest-granite-ongole",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Aequitas eStones Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/aequitas-estones-ongole",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Anjalee Granite Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/anjalee-granite-ongole",
					img: placeholderB,
					sector: "Industrial",
				},
			],
		},
		{
			title: "Nalgonda District",
			projects: [
				{
					name: "Chemic Life Sciences Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/chemic-life-sciences-nalgonda",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Bhaskara Agro Chemicals Pvt Ltd",
					scope: "11KV Switchyard, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/bhaskara-agro-chemicals-nalgonda",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Amsri Chemicals Pvt Ltd (Panthangi)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/amsri-chemicals-panthangi",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Gangothri Fertilizers & Nutrients Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/gangothri-fertilizers-nalgonda",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Sri Srinivasa Aluminium Industries (Bhongiri)",
					scope: "LT Panels.",
					href: "/projects/sri-srinivasa-aluminium-bhongiri",
					img: placeholderA,
					sector: "Industrial",
				},
			],
		},
		{
			title: "Hyderabad (Jeedimetla, Medchal, etc.)",
			projects: [
				{
					name: "Syn Fine Drugs Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/syn-fine-drugs-hyderabad",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Novus Green Energy (Shadnagar)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/novus-green-energy-shadnagar",
					img: placeholderC,
					sector: "Energy",
				},
				{
					name: "Emory Hospital (Attapur, Medhipatnam)",
					scope: "11KV Switchyard, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/emory-hospital-attapur",
					img: placeholderA,
					sector: "Hospital",
				},
				{
					name: "Posh Chemicals Pvt Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/posh-chemicals-hyderabad",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Supermax Personal Care Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/supermax-personal-care-hyderabad",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Gayatri Projects Ltd",
					scope: "LT Panels.",
					href: "/projects/gayatri-projects-hyderabad",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Hyderabad Batteries Pvt Ltd",
					scope: "LT Panels.",
					href: "/projects/hyderabad-batteries",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Sonali Casting Pvt Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/sonali-casting-hyderabad",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Vishwanath Projects Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/vishwanath-projects-hyderabad",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Vasanta Chemicals Pvt Ltd",
					scope: "LT Panels.",
					href: "/projects/vasanta-chemicals-hyderabad",
					img: placeholderB,
					sector: "Industrial",
				},
			],
		},
		{
			title: "Warangal / Kodad",
			projects: [
				{
					name: "Midwest Granite Ltd (Warangal)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/midwest-granite-warangal",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Midwest Granite Ltd (Kodad)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/midwest-granite-kodad",
					img: placeholderA,
					sector: "Industrial",
				},
			],
		},
		{
			title: "Medak District",
			projects: [
				{
					name: "Parle Agro Pvt Ltd (Pashmylaram)",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/parle-agro-pashmylaram",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Shri Hari Ferro Alloys Pvt Ltd (Chegunta)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/shri-hari-ferro-alloys-chegunta",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Arch Pharmalaborities Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/arch-pharmalaborities-medak",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Chalimedia Feeds Pvt Ltd (Karimnagar)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/chalimedia-feeds-karimnagar",
					img: placeholderB,
					sector: "Industrial",
				},
			],
		},
		{
			title: "Prakasam District",
			projects: [
				{
					name: "Satya Exports Pvt Ltd Unit-II (Ongole)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/satya-exports-unit-2-ongole",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Satya Stone Pvt Ltd Unit-III (Ongole)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/satya-stone-unit-3-ongole",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Siva Stone Pvt Ltd (Ongole)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/siva-stone-ongole",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Aequitas Exports Pvt Ltd (Ongole)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/aequitas-exports-ongole",
					img: placeholderC,
					sector: "Industrial",
				},
			],
		},
		{
			title: "Telangana Government / APSPHC Ltd",
			projects: [
				{
					name: "APSPHC Ltd (Srikakulam)",
					scope: "11KV Switchyards, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/ap-sphc-srikakulam",
					img: placeholderA,
					sector: "Government",
				},
				{
					name: "APSPHC Ltd (APPA, Gandipet, Hyderabad)",
					scope: "11KV Switchyards, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/ap-sphc-appa-gandipet",
					img: placeholderB,
					sector: "Government",
				},
				{
					name: "APSPHC Ltd (IPS Quarters, Yousufguda, Hyderabad)",
					scope: "11KV Switchyards, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/ap-sphc-ips-yousufguda",
					img: placeholderC,
					sector: "Government",
				},
				{
					name: "APSPHC Ltd (CM Camp Office, Hyderabad)",
					scope: "11KV Switchyard, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/ap-sphc-cm-camp-office",
					img: placeholderA,
					sector: "Government",
				},
			],
		},
		{
			title: "Fertilizers & Agro Projects",
			projects: [
				{
					name: "Maheshwari Fertilizers Pvt Ltd (Dhamancharla)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/maheshwari-fertilizers-dhamancharla",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Kooshi Fertilizers Pvt Ltd (Tirupathi)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/kooshi-fertilizers-tirupathi",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Haritha Fertilizers Pvt Ltd (Keesara)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/haritha-fertilizers-keesara",
					img: placeholderA,
					sector: "Industrial",
				},
			],
		},
		{
			title: "Hospitals / Institutions",
			projects: [
				{
					name: "100 Bed MCH (Koppal, Karnataka)",
					scope:
						"LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/100-bed-mch-koppal",
					img: placeholderB,
					sector: "Hospital",
				},
				{
					name: "G P Birla Observatory & Astronomical Research Centre (Hyderabad)",
					scope: "LT Distribution Panel, Bus Duct.",
					href: "/projects/gp-birla-observatory-hyd",
					img: placeholderC,
					sector: "Institution",
				},
				{
					name: "Horticulture University (Mulugu, Telangana)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/horticulture-university-mulugu",
					img: placeholderA,
					sector: "Institution",
				},
			],
		},
		{
			title: "Others",
			projects: [
				{
					name: "Granite Mart Pvt Ltd (Keesaragutta)",
					scope: "LT Panels, Bus Duct.",
					href: "/projects/granite-mart-keesaragutta",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Sri Srinivasa Metal Industries (Keesara)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/sri-srinivasa-metal-industries-keesara",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Godavari Form Chemicals Pvt Ltd (Thallada, Khammam Dist.)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/godavari-form-chemicals-thallada",
					img: placeholderA,
					sector: "Industrial",
				},
				{
					name: "Vijaylakshmi Spintex Ltd (Bibinagar, Nalgonda)",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/vijaylakshmi-spintex-bibinagar",
					img: placeholderB,
					sector: "Industrial",
				},
				{
					name: "Satwik Drugs Pvt Ltd (Kohlar, Karnataka)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/satwik-drugs-kohlar",
					img: placeholderC,
					sector: "Industrial",
				},
				{
					name: "Laser Events Pvt Ltd (Bangalore)",
					scope: "LT Panels.",
					href: "/projects/laser-events-bangalore",
					img: placeholderA,
					sector: "Others",
				},
				{
					name: "Serwel Electronics Ltd (Pashmylaram, Medak Dist.)",
					scope: "LT Panels.",
					href: "/projects/serwel-electronics-pashmylaram",
					img: placeholderB,
					sector: "Others",
				},
			],
		},
	];

	const [regionFilter, setRegionFilter] = useState<string>("All");
	const [sectorFilter, setSectorFilter] = useState<string>("All");
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [selectedRegion, setSelectedRegion] = useState<string>("");

	const allRegions = useMemo(() => ["All", ...regions.map((r) => r.title)], []);
	const allSectors = useMemo(() => {
		const sectors = new Set<string>();
		regions.forEach((r) => r.projects.forEach((p) => sectors.add(p.sector)));
		return ["All", ...Array.from(sectors)];
	}, []);

	const filteredProjects = useMemo(() => {
		const list: { project: Project; region: string }[] = [];
		regions.forEach((r) => {
			r.projects.forEach((p) => list.push({ project: p, region: r.title }));
		});

		return list.filter(({ project, region }) => {
			const matchRegion = regionFilter === "All" || region === regionFilter;
			const matchSector =
				sectorFilter === "All" || project.sector === sectorFilter;
			return matchRegion && matchSector;
		});
	}, [regionFilter, sectorFilter, regions]);

	return (
		<section className="bg-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6">
				{/* Title */}
				<div className="text-center text-black mb-10">
					<h2 className="text-3xl font-bold sm:text-4xl">
						Project <span style={{ color: ORANGE }}>References</span>
					</h2>
					<p className="mt-2 text-black">
						Browse projects by region and sector. Click a project name to view
						details.
					</p>
				</div>

				{/* Filters */}
				<div className="flex flex-wrap gap-4 justify-center mb-8 text-black">
					<select
						value={regionFilter}
						onChange={(e) => setRegionFilter(e.target.value)}
						className="rounded-lg border px-4 py-2 text-sm"
						style={{ borderColor: BLUE }}>
						{allRegions.map((r) => (
							<option key={r}>{r}</option>
						))}
					</select>

					<select
						value={sectorFilter}
						onChange={(e) => setSectorFilter(e.target.value)}
						className="rounded-lg border px-4 py-2 text-sm"
						style={{ borderColor: BLUE }}>
						{allSectors.map((s) => (
							<option key={s}>{s}</option>
						))}
					</select>
				</div>

				<div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
					{filteredProjects.map(({ project, region }) => (
						<button
							key={project.name}
							onClick={() => {
								setSelectedProject(project);
								setSelectedRegion(region);
							}}
							className="text-left px-4 py-2 rounded-lg border transition hover:bg-orange-400 hover:text-white"
							style={{ borderColor: BLUE, color: BLUE }}>
							{project.name}
						</button>
					))}
				</div>

				{/* Modal */}
				{selectedProject && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
						<div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl">
							{/* Header */}
							<div className="flex items-center justify-between border-b p-4">
								<h3 className="text-lg font-semibold text-black">
									Project Details
								</h3>
								<button
									onClick={() => setSelectedProject(null)}
									className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100"
									aria-label="Close">
									✕
								</button>
							</div>

							{/* Table */}
							<div className="overflow-x-auto p-2">
								<table className="w-full text-left text-sm">
									<thead className="bg-gray-50 text-gray-700">
										<tr>
											<th className="border px-4 py-3">PLACE</th>
											<th className="border px-4 py-3">NAME</th>
											<th className="border px-4 py-3">DESCRIPTION</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="align-top border px-4 py-3 text-gray-900">
												{selectedRegion}
											</td>
											<td className="align-top border px-4 py-3 font-medium text-gray-900">
												{selectedProject.name}
											</td>
											<td className="align-top border px-4 py-3 text-gray-800">
												{selectedProject.scope}
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							{/* Footer */}
							<div className="flex items-center justify-between gap-3 border-t p-4">
								<div className="flex flex-wrap gap-2">
									<span
										className="rounded-full border px-2.5 py-1 text-xs font-medium"
										style={{ borderColor: ORANGE, color: ORANGE }}>
										{selectedProject.sector}
									</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
