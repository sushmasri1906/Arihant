export default function Map() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	// Business name + full address for better map accuracy
	const name = `ACS Arihant Control Systems`;
	const address = `SY. NO. 316, Plot No. 5, Near Aaiyee Matha Temple, Pipeline Road, Subhash Nagar, IDA Jeedimetla, Hyderabad – 500055, India`;
	const fullQuery = `${name}, ${address}`;
	const query = encodeURIComponent(fullQuery);
	const mapsUrl = `https://www.google.com/maps?q=${query}`;
	const embedUrl = `${mapsUrl}&output=embed`;

	return (
		<section id="map" className="relative bg-white py-14 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="mb-6 text-center sm:mb-8">
					<h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
						Find{" "}
						<span style={{ color: ORANGE }}>ACS Arihant Control Systems</span>
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
						Show your office location on the map for easy navigation.
					</p>
				</div>

				{/* Address + actions */}
				<div className="mx-auto mb-6 max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h3 className="text-base font-semibold text-black">
								Office Address
							</h3>
							<address className="mt-1 not-italic text-sm leading-relaxed text-gray-700">
								{name}
								<br />
								{address}
							</address>
						</div>
						<div className="flex flex-wrap gap-2">
							<a
								href={mapsUrl}
								target="_blank"
								rel="noreferrer noopener"
								className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white transition hover:brightness-95"
								style={{ backgroundColor: BLUE }}>
								Open in Google Maps
							</a>
							<a
								href={`${mapsUrl}&dirflg=d`}
								target="_blank"
								rel="noreferrer noopener"
								className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white transition hover:brightness-95"
								style={{ backgroundColor: ORANGE }}>
								Get Directions
							</a>
						</div>
					</div>
				</div>

				{/* Map Embed */}
				<div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
					<div className="relative h-[50vh] w-full sm:h-[60vh]">
						<iframe
							title="ACS Arihant Control Systems – Office Location"
							src={embedUrl}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="absolute inset-0 h-full w-full"
							allowFullScreen
						/>
					</div>
				</div>

				{/* Note */}
				<p className="mt-4 text-center text-xs text-gray-500">
					Tip: Click “Get Directions” to launch your preferred navigation app
					with the address pre‑filled.
				</p>
			</div>
		</section>
	);
}
