"use client";

import { useMemo, useState } from "react";

export default function ProjectReferencesReadable() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	type Project = {
		name: string;
		scope: string;
		href: string;
		img: string;
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
				},
				{
					name: "Ravileela Granite Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/ravileela-granite-ongole",
					img: placeholderB,
				},
				{
					name: "Midwest Granite Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/midwest-granite-ongole",
					img: placeholderC,
				},
				{
					name: "Aequitas eStones Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/aequitas-estones-ongole",
					img: placeholderA,
				},
				{
					name: "Anjalee Granite Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/anjalee-granite-ongole",
					img: placeholderB,
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
				},
				{
					name: "Bhaskara Agro Chemicals Pvt Ltd",
					scope: "11KV Switchyard, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/bhaskara-agro-chemicals-nalgonda",
					img: placeholderA,
				},
				{
					name: "Amsri Chemicals Pvt Ltd (Panthangi)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/amsri-chemicals-panthangi",
					img: placeholderB,
				},
				{
					name: "Gangothri Fertilizers & Nutrients Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/gangothri-fertilizers-nalgonda",
					img: placeholderC,
				},
				{
					name: "Sri Srinivasa Aluminium Industries (Bhongiri)",
					scope: "LT Panels.",
					href: "/projects/sri-srinivasa-aluminium-bhongiri",
					img: placeholderA,
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
				},
				{
					name: "Novus Green Energy (Shadnagar)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/novus-green-energy-shadnagar",
					img: placeholderC,
				},
				{
					name: "Emory Hospital (Attapur, Medhipatnam)",
					scope: "11KV Switchyard, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/emory-hospital-attapur",
					img: placeholderA,
				},
				{
					name: "Posh Chemicals Pvt Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/posh-chemicals-hyderabad",
					img: placeholderB,
				},
				{
					name: "Supermax Personal Care Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/supermax-personal-care-hyderabad",
					img: placeholderC,
				},
				{
					name: "Gayatri Projects Ltd",
					scope: "LT Panels.",
					href: "/projects/gayatri-projects-hyderabad",
					img: placeholderA,
				},
				{
					name: "Hyderabad Batteries Pvt Ltd",
					scope: "LT Panels.",
					href: "/projects/hyderabad-batteries",
					img: placeholderB,
				},
				{
					name: "Sonali Casting Pvt Ltd",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/sonali-casting-hyderabad",
					img: placeholderC,
				},
				{
					name: "Vishwanath Projects Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/vishwanath-projects-hyderabad",
					img: placeholderA,
				},
				{
					name: "Vasanta Chemicals Pvt Ltd",
					scope: "LT Panels.",
					href: "/projects/vasanta-chemicals-hyderabad",
					img: placeholderB,
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
				},
				{
					name: "Midwest Granite Ltd (Kodad)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/midwest-granite-kodad",
					img: placeholderA,
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
				},
				{
					name: "Shri Hari Ferro Alloys Pvt Ltd (Chegunta)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/shri-hari-ferro-alloys-chegunta",
					img: placeholderC,
				},
				{
					name: "Arch Pharmalaborities Pvt Ltd",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/arch-pharmalaborities-medak",
					img: placeholderA,
				},
				{
					name: "Chalimedia Feeds Pvt Ltd (Karimnagar)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/chalimedia-feeds-karimnagar",
					img: placeholderB,
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
				},
				{
					name: "Satya Stone Pvt Ltd Unit-III (Ongole)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/satya-stone-unit-3-ongole",
					img: placeholderA,
				},
				{
					name: "Siva Stone Pvt Ltd (Ongole)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/siva-stone-ongole",
					img: placeholderB,
				},
				{
					name: "Aequitas Exports Pvt Ltd (Ongole)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/aequitas-exports-ongole",
					img: placeholderC,
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
				},
				{
					name: "APSPHC Ltd (APPA, Gandipet, Hyderabad)",
					scope: "11KV Switchyards, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/ap-sphc-appa-gandipet",
					img: placeholderB,
				},
				{
					name: "APSPHC Ltd (IPS Quarters, Yousufguda, Hyderabad)",
					scope: "11KV Switchyards, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/ap-sphc-ips-yousufguda",
					img: placeholderC,
				},
				{
					name: "APSPHC Ltd (CM Camp Office, Hyderabad)",
					scope: "11KV Switchyard, LT Panels, Cable Laying, Street Lighting.",
					href: "/projects/ap-sphc-cm-camp-office",
					img: placeholderA,
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
				},
				{
					name: "Kooshi Fertilizers Pvt Ltd (Tirupathi)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/kooshi-fertilizers-tirupathi",
					img: placeholderC,
				},
				{
					name: "Haritha Fertilizers Pvt Ltd (Keesara)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/haritha-fertilizers-keesara",
					img: placeholderA,
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
				},
				{
					name: "G P Birla Observatory & Astronomical Research Centre (Hyderabad)",
					scope: "LT Distribution Panel, Bus Duct.",
					href: "/projects/gp-birla-observatory-hyd",
					img: placeholderC,
				},
				{
					name: "Horticulture University (Mulugu, Telangana)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/horticulture-university-mulugu",
					img: placeholderA,
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
				},
				{
					name: "Sri Srinivasa Metal Industries (Keesara)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/sri-srinivasa-metal-industries-keesara",
					img: placeholderC,
				},
				{
					name: "Godavari Form Chemicals Pvt Ltd (Thallada, Khammam Dist.)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/godavari-form-chemicals-thallada",
					img: placeholderA,
				},
				{
					name: "Vijaylakshmi Spintex Ltd (Bibinagar, Nalgonda)",
					scope:
						"33KV Switchyard, 33KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/vijaylakshmi-spintex-bibinagar",
					img: placeholderB,
				},
				{
					name: "Satwik Drugs Pvt Ltd (Kohlar, Karnataka)",
					scope:
						"11KV Switchyard, 11KV Line, HT Panels, Bus Duct, LT Panels, Cable Laying, Cable Terminations, Shed Lighting, Street Lights, Earthing and Liaisoning.",
					href: "/projects/satwik-drugs-kohlar",
					img: placeholderC,
				},
				{
					name: "Laser Events Pvt Ltd (Bangalore)",
					scope: "LT Panels.",
					href: "/projects/laser-events-bangalore",
					img: placeholderA,
				},
				{
					name: "Serwel Electronics Ltd (Pashmylaram, Medak Dist.)",
					scope: "LT Panels.",
					href: "/projects/serwel-electronics-pashmylaram",
					img: placeholderB,
				},
			],
		},
	];

	// ---------- UI Helpers ----------
	const [q, setQ] = useState("");

	const filtered = useMemo(() => {
		const term = q.trim().toLowerCase();
		if (!term) return regions;
		return regions
			.map((r) => ({
				...r,
				projects: r.projects.filter(
					(p) =>
						p.name.toLowerCase().includes(term) ||
						p.scope.toLowerCase().includes(term) ||
						r.title.toLowerCase().includes(term)
				),
			}))
			.filter((r) => r.projects.length > 0);
	}, [q, regions]);

	const anchors = useMemo(
		() =>
			regions.map((r) => ({
				id: r.title
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, "-")
					.replace(/(^-|-$)/g, ""),
				title: r.title,
			})),
		[regions]
	);

	// ---------- Render ----------
	return (
		<section className="relative bg-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
						Project <span style={{ color: ORANGE }}>References</span>
					</h2>
					<p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
						A snapshot of our on‑ground delivery across Telangana, Andhra
						Pradesh, Karnataka and beyond.
					</p>
				</div>

				{/* Quick nav + Search */}
				<div className="mt-6 flex flex-col gap-4 lg:mt-8 lg:flex-row lg:items-center lg:justify-between">
					{/* Region pills (horizontal scroll) */}
					<div className="-mx-2 overflow-x-auto pb-2">
						<div className="flex gap-2 px-2">
							{anchors.map((a, i) => (
								<a
									key={a.id}
									href={`#${a.id}`}
									className="whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
									style={{ borderColor: i % 2 === 0 ? BLUE : ORANGE }}>
									{a.title}
								</a>
							))}
						</div>
					</div>

					{/* Search */}
					<div className="w-full lg:w-80">
						<label className="sr-only" htmlFor="project-search">
							Search projects
						</label>
						<div className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-5 w-5 text-gray-500">
								<path
									fillRule="evenodd"
									d="M10.5 3.75a6.75 6.75 0 1 0 4.263 11.94l3.274 3.274a.75.75 0 1 0 1.06-1.06l-3.274-3.274A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								id="project-search"
								placeholder="Search by name, scope or region..."
								value={q}
								onChange={(e) => setQ(e.target.value)}
								className="w-full border-0 bg-transparent text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none"
							/>
						</div>
					</div>
				</div>

				{/* Regions */}
				<div className="mt-10 space-y-12">
					{filtered.map((region, rIdx) => {
						const anchorId =
							anchors[rIdx]?.id ||
							region.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
						return (
							<section
								key={region.title}
								id={anchorId}
								className="scroll-mt-24">
								{/* Region header */}
								<div className="mb-5 flex items-center justify-between gap-3">
									<h3 className="text-xl font-semibold text-black sm:text-2xl">
										{region.title}
									</h3>
									<div
										className="h-1 flex-1 rounded-full"
										style={{
											background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})`,
										}}
									/>
								</div>

								{/* Cards */}
								<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
									{region.projects.map((p, i) => (
										<article
											key={`${region.title}-${p.name}`}
											className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
											{/* Image */}
											<div className="relative h-40 w-full overflow-hidden">
												<img
													src={p.img}
													alt={p.name}
													className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
												/>
												<div
													aria-hidden
													className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/35"
												/>
												<span
													className="absolute left-4 right-4 top-0 h-[3px] rounded-b-full"
													style={{
														background: `linear-gradient(90deg, ${BLUE} 0%, ${ORANGE} 100%)`,
													}}
												/>
											</div>

											{/* Body */}
											<div className="p-5">
												<h4 className="text-base font-semibold text-black sm:text-lg">
													<a href={p.href} className="hover:underline">
														{p.name}
													</a>
												</h4>
												{/* Scope as tidy chips (auto-split by commas) */}
												<ul className="mt-3 flex flex-wrap gap-2">
													{p.scope.split(",").map((s) => (
														<li
															key={s.trim()}
															className="rounded-full border px-2.5 py-1 text-[11px] font-medium text-gray-700"
															style={{
																borderColor: i % 2 === 0 ? BLUE : ORANGE,
															}}>
															{s.trim()}
														</li>
													))}
												</ul>

												{/* Actions */}
												<div className="mt-4 flex items-center gap-3">
													<a
														href={p.href}
														className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-black transition hover:bg-gray-50">
														View details
													</a>
													<a
														href="/contact"
														className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white transition hover:brightness-95"
														style={{
															backgroundColor: i % 2 === 0 ? BLUE : ORANGE,
														}}>
														Request similar project
													</a>
												</div>
											</div>
										</article>
									))}
								</div>
							</section>
						);
					})}
				</div>

				{/* Back to top */}
				<div className="mt-12 flex justify-center">
					<a
						href="#top"
						className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
						style={{ borderColor: BLUE }}>
						↑ Back to top
					</a>
				</div>
			</div>
		</section>
	);
}
