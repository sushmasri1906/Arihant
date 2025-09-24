"use client";

import { motion } from "framer-motion";

const clients = [
	"M/s AZAD ENGINEERING LTD",
	"M/s MIDWEST NEOSTONE LTD",
	"M/s SRP MINERALS PVT LTD",
	"M/s MTAR TECHNOLOGIES PVT LTD",
	"M/s TGPHC LTD",
	"M/s PATIL GROUP (Patil Rail Infrastructure Pvt Ltd)",
	"M/s SYN- FINECHEM Laboratories Pvt Ltd",
	"M/s Synthokem Labs Pvt Ltd",
	"M/s SRR Projects Pvt Ltd",
	"M/s Bharath Dynamics Ltd",
	"M/s QUARTZKRAFT LLP, Ongole SEZ, A.P",
	"M/s Ravileela Granite Ltd, Ongole SEZ, A.P",
	"M/s CHEMIC LIFE SCIENCES PVT LTD, Nalgonda Dist.",
	"M/s SYN FINE DRUGS PVT LTD, Jeedimetla, Hyderabad.",
	"M/s NOVUS GREEN ENERGY, Shadnagar, Hyderabad.",
	"M/s MIDWEST GRANITE LTD, Warangal Dist.",
	"M/s MIDWEST GRANITE LTD, KODAD.",
	"M/s MIDWEST GRANITE LTD, Ongole SEZ, A.P",
	"M/s Aequitas eSTONES PVT LTD, Ongole SEZ, A.P",
	"M/s Anjalee Granite Pvt Ltd, Ongole SEZ, A.P",
	"M/s HORTICULTURE UNIVERSITY, Mulugu, Telangana",
	"M/s 100BED MCH, Koppal, Karnataka",
	"M/s G P Birla Observatory and Astronomical Research Centre, Hyderabad.",
	"M/s Parle Agro Pvt Ltd, Pashmylaram, Medak Dist.",
	"M/s Granite Mart Pvt Ltd, Keesaragutta",
	"M/s Satya Exports Pvt Ltd Unit-II, Ongole, Prakasam Dist.",
	"M/s Satya Stone Pvt Ltd Unit-III, Ongole, Prakasam Dist.",
	"M/s Siva Stone Pvt Ltd, Ongole, Prakasam Dist.",
	"M/s Aequitas Exports Pvt Ltd, Ongole, Prakasam Dist.",
	"M/s Shri Hari Ferro Alloys Pvt Ltd, Chegunta, Medak Dist.",
	"M/s APSPHC Ltd, Srikakulam.",
	"M/s APSPHC Ltd, APPA, Gandipet, Hyderabad.",
	"M/s APSPHC Ltd, IPS Quarters, Yousufguda, Hyderabad.",
	"M/s APSHC Ltd, CM CAMP Office, Hyderabad",
	"M/s Maheshwari Fertilizers Pvt Ltd, Dhamancherla",
	"M/s Bhaskara Agro Chemicals Pvt Ltd, Choutuppal, Nalgonda Dist.",
	"M/s Amsri Chemicals Pvt Ltd, Panthangi, Nalgonda Dist",
	"M/s Emory Hospital, Athapur, Medhipatnam.",
	"M/s Gangothri Fertilizers & Nutrients Pvt Ltd, Nalgonda Dist.",
	"M/s Chalimedia Feeds Pvt Ltd, Karimnagar.",
	"M/s A P Irrigation, Miryalaguda.",
	"M/s Arch Pharmalaborities Pvt Ltd, Medak Dist.",
	"M/s Vidyuth Control Systems Pvt Ltd, Medchal, R.R Dist.",
	"M/s Vijaylakshmi Spintex Ltd, Bibinagar, Nalgonda Dist.",
	"M/s Sri Srinivasa Aluminium Industries, Bhongiri, Nalgonda Dist.",
	"M/s Sri Srinivasa Metal Industries, Keesara",
	"M/s Godavari Form Chemicals Pvt Ltd, Thallada, Khammam Dist.",
	"M/s Kooshi Fertilizers Pvt Ltd, Thirupathi.",
	"M/s Haritha Fertilizers Pvt Ltd, Keesara",
	"M/s Posh Chemicals Pvt Ltd, Jeedimetla, Hyderabad.",
	"M/s Supermax Personal Care Ltd, Jeedimetla, Hyderabad.",
	"M/s Gayatri Projects Ltd, Hyderabad.",
	"M/s Hyderabad Batteries Pvt Ltd, Jeedimetla, Hyderabad",
	"M/s Sonali Casting Pvt Ltd, Jeedimetla, Hyderabad.",
	"M/s Vishwanath Projects Ltd, Hyderabad.",
	"M/s Satwik Drugs Pvt Ltd, Kohlar, Karnataka",
	"M/s Laser Events Pvt Ltd, Bengalore.",
	"M/s Serwel Electronics Ltd, Pashamylaram, Medak Dist.",
	"M/s Vasanta Chemicals Pvt Ltd, Jeedimetla, Hyderabad.",
];

export default function Client() {
	return (
		<section className="relative py-16 bg-white">
			{/* Decorative Accent */}
			<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>

			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
					Our <span className="text-orange-500">Valued</span>{" "}
					<span className="text-blue-600">Clients</span>
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2">
					{clients.map((client, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.02 }}
							className="relative p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition group">
							{/* Left Highlight bar */}
							<div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-blue-600 rounded-l-xl opacity-70 group-hover:opacity-100 transition"></div>

							<p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition">
								{client}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
