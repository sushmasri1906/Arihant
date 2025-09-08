export default function ProjectHero() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	return (
		<section
			className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] w-full bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg')",
			}}>
			<div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
				<h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl mt-20">
					Our <span style={{ color: ORANGE }}>Projects</span>
				</h1>
			</div>
		</section>
	);
}
