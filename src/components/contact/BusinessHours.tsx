export default function BusinessHours() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	return (
		<section className="relative bg-gray-50 py-14 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-4xl px-6 text-center">
				{/* Header */}
				<h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
					Business <span style={{ color: ORANGE }}>Hours</span>
				</h2>
				<p className="mt-2 text-sm text-gray-600 sm:text-base">
					We are available throughout the week with emergency support on
					Sundays.
				</p>

				{/* Hours table */}
				<div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
					<table className="w-full text-left text-sm sm:text-base">
						<tbody>
							<tr className="border-b border-gray-100">
								<td className="px-6 py-4 font-medium text-black">
									Monday – Saturday
								</td>
								<td className="px-6 py-4 text-gray-700">9:00 AM – 7:00 PM</td>
							</tr>
							<tr>
								<td className="px-6 py-4 font-medium text-black">Sunday</td>
								<td className="px-6 py-4 text-gray-700">
									Closed{" "}
									<span className="ml-2 rounded-full bg-orange-50 px-2 py-0.5 text-xs font-semibold text-orange-700">
										Emergency support available
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* Highlight note */}
				<p className="mt-6 text-xs text-gray-500">
					Emergency breakdown calls and service visits will be addressed even
					during holidays.
				</p>
			</div>
		</section>
	);
}
