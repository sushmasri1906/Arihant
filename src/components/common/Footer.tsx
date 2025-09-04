"use client";

import Link from "next/link";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";

const BLUE = "#0056a6";

export default function Footer() {
	return (
		<footer className="relative text-white">
			{/* Background: solid brand + soft gradient overlay for depth */}
			<div
				aria-hidden
				className="absolute inset-0"
				style={{
					background: `linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), ${BLUE}`,
				}}
			/>
			{/* Subtle grid texture */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-10"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
					backgroundSize: "24px 24px",
				}}
			/>

			{/* Main */}
			<div className="relative">
				<div className="mx-auto max-w-7xl px-6 py-12">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-4">
						{/* Brand / About */}
						<div className="space-y-4">
							<h2 className="text-2xl font-bold tracking-tight">
								Arihant Control Systems
							</h2>
							<p className="text-sm leading-relaxed text-white/90">
								Founded in 1989, we manufacture and commission high-reliability
								electrical control panels and turnkey solutions across sectors.
							</p>
							<div className="pt-2">
								<Link
									href="/contact"
									className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-4 py-2 text-sm font-semibold text-[#0b2d55] shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
									aria-label="Request a quote">
									Request a Quote
									<span aria-hidden>→</span>
								</Link>
							</div>
						</div>

						{/* Solutions */}
						<nav aria-label="Solutions">
							<h3 className="text-lg font-semibold">Solutions</h3>
							<ul className="mt-4 space-y-2 text-sm">
								<li>
									<Link
										href="/services"
										className="text-white/90 transition hover:text-white">
										Panel Design & Manufacturing
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="text-white/90 transition hover:text-white">
										Electrical Contracting (EPC)
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="text-white/90 transition hover:text-white">
										Retrofits & Upgrades
									</Link>
								</li>
								<li>
									<Link
										href="/projects"
										className="text-white/90 transition hover:text-white">
										Industry Projects
									</Link>
								</li>
							</ul>
						</nav>

						{/* Company */}
						<nav aria-label="Company">
							<h3 className="text-lg font-semibold">Company</h3>
							<ul className="mt-4 space-y-2 text-sm">
                                <li>
									<Link
										href="/"
										className="text-white/90 transition hover:text-white">
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="text-white/90 transition hover:text-white">
										About Us
									</Link>
								</li>

								<li>
									<Link
										href="/contact"
										className="text-white/90 transition hover:text-white">
										Contact
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="text-white/90 transition hover:text-white">
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</nav>

						{/* Contact */}
						<div aria-label="Contact information" className="space-y-4">
							<h3 className="text-lg font-semibold">Get in Touch</h3>
							<p className="text-sm text-white/90">
								Mon–Sat: 9:30 AM – 7:00 PM IST
							</p>
							<p className="text-sm text-white/90">
								Phone:{" "}
								<Link
									href="tel:+910000000000"
									className="underline underline-offset-4 transition hover:text-white">
									+91-00000-00000
								</Link>
							</p>
							<p className="text-sm text-white/90">
								Email:{" "}
								<Link
									href="mailto:info@arihantcontrols.com"
									className="underline underline-offset-4 transition hover:text-white">
									info@arihantcontrols.com
								</Link>
							</p>
							<p className="text-sm text-white/90">
								Address: Plot 42, Industrial Estate, Hyderabad, India
							</p>

							{/* Socials */}
							<div className="pt-2">
								<div className="flex items-center gap-3">
									<Social href="#" label="Facebook">
										<FaFacebookF size={16} />
									</Social>
									<Social href="#" label="LinkedIn">
										<FaLinkedinIn size={16} />
									</Social>
									<Social href="#" label="Twitter">
										<FaTwitter size={16} />
									</Social>
									<Social href="#" label="Instagram">
										<FaInstagram size={16} />
									</Social>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom row */}
					<div className="mt-10 border-t border-white/15 pt-6">
						<div className="flex flex-col items-center justify-between gap-4 text-xs text-white/80 md:flex-row">
							<p>
								© {new Date().getFullYear()} Arihant Control Systems. All rights
								reserved.
							</p>
							<ul className="flex flex-wrap items-center gap-4">
								<li>
									<Link href="/privacy" className="hover:text-white">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="/terms" className="hover:text-white">
										Terms of Service
									</Link>
								</li>
								<li>
									<Link href="/contact" className="hover:text-white">
										Support
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

function Social({
	href,
	label,
	children,
}: {
	href: string;
	label: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			aria-label={label}
			className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b2d55] shadow-sm outline-none ring-white/0 transition hover:bg-white/90 focus:ring-2">
			<span className="sr-only">{label}</span>
			{children}
		</Link>
	);
}
