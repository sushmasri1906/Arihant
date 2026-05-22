export default function ProjectHero() {
	const ORANGE = "#FF7A1A";

	return (
		<section
			className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] w-full bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1779443929/ChatGPT_Image_May_22_2026_03_28_30_PM_fufw4q.png')",
			}}>
			<div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
				<h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl mt-20">
					Our <span style={{ color: ORANGE }}>Projects</span>
				</h1>
			</div>
		</section>
	);
}
