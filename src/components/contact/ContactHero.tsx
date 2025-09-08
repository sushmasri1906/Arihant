export default function ProjectHero() {
	const BLUE = "#0056A6";
	const ORANGE = "#FF7A1A";

	return (
		<section
			className="relative w-full h-[60vh] sm:h-[68vh] lg:h-[78vh] bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg')",
			}}>
			{/* Overlay */}
			<div
				className="absolute inset-0"
				style={{
					background: `
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)),
            linear-gradient(90deg, rgba(0,86,166,0.28), rgba(255,122,26,0.25))
          `,
				}}
			/>

			{/* Content */}
			<div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
				{/* Heading */}
				<h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
					Get <span style={{ color: ORANGE }}>in Touch</span>
				</h1>

				{/* Subheading */}
				<p className="mt-4 max-w-2xl text-sm text-blue-100/95 sm:text-base md:text-lg">
					We&apos;re here to power your projects with reliable electrical solutions.
					Reach out for inquiries, quotations, or support — our team responds
					promptly.
				</p>

			</div>
		</section>
	);
}
