"use client";

import Link from "next/link";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="relative text-white bg-[#0056a6]">
			{/* Overlay grid texture */}
			<div
				aria-hidden
				className="absolute inset-0 opacity-10 pointer-events-none"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
					backgroundSize: "24px 24px",
				}}
			/>

			<div className="relative mx-auto max-w-7xl px-6 py-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Brand / About */}
					<div className="space-y-3">
						<Link
							href="/"
							className="group inline-flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056A6]">
							<div className="flex items-center">
								<Image
									src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1757858658/ACS_Logo_PNG_jzlitw.png"
									alt="Arihant Control Systems Logo"
									width={40}
									height={40}
									className="h-20 w-20 object-contain bg-white rounded-md p-1"
									priority
								/>
							</div>
						</Link>
						<p className="text-sm text-white/90 leading-snug">
							Founded in 1989, we manufacture and commission high-reliability
							electrical control panels and turnkey solutions across sectors.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-[#0b2d55] shadow-sm transition hover:bg-white/90">
							Request a Quote <span aria-hidden>→</span>
						</Link>
					</div>

					{/* Solutions */}
					<nav aria-label="Solutions">
						<h3 className="text-base font-semibold">Solutions</h3>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<Link
									href="/services"
									className="hover:text-white text-white/90">
									Panel Design & Manufacturing
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="hover:text-white text-white/90">
									Electrical Contracting (EPC)
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="hover:text-white text-white/90">
									Retrofits & Upgrades
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="hover:text-white text-white/90">
									Industry Projects
								</Link>
							</li>
						</ul>
					</nav>

					{/* Company */}
					<nav aria-label="Company">
						<h3 className="text-base font-semibold">Company</h3>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<Link href="/" className="hover:text-white text-white/90">
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" className="hover:text-white text-white/90">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-white text-white/90">
									Contact
								</Link>
							</li>
							<li>
								<Link href="/terms" className="hover:text-white text-white/90">
									Terms & Conditions
								</Link>
							</li>
						</ul>
					</nav>

					{/* Contact */}
					<div aria-label="Contact information" className="space-y-2">
						<h3 className="text-base font-semibold">Get in Touch</h3>
						<p className="text-sm text-white/90">
							Mon–Sat: 9:30 AM – 6:30 PM IST
						</p>
						<p className="text-sm text-white/90">
							Phone:{" "}
							<Link
								href="tel:+919951119777"
								className="underline underline-offset-2 hover:text-white">
								+91 99511 19777
							</Link>
							,{" "}
							<Link
								href="tel:+919246356924"
								className="underline underline-offset-2 hover:text-white">
								+91 92463 56924
							</Link>
						</p>
						<p className="text-sm text-white/90">
							Email:{" "}
							<Link
								href="mailto:info@arihantcontrols.com"
								className="underline underline-offset-2 hover:text-white">
								info@arihantcontrols.com
							</Link>
						</p>
						<p className="text-sm text-white/90 leading-snug">
							Address: SY. NO. 316, Plot No. 5, Near Aaiyee Matha Temple,
							Pipeline Road, Subhash Nagar, IDA Jeedimetla, Hyderabad – 500055,
							India
						</p>

						{/* Socials */}
						<div className="flex items-center gap-2 pt-1">
							<Social href="#" label="Facebook">
								<FaFacebookF size={15} />
							</Social>
							<Social href="#" label="LinkedIn">
								<FaLinkedinIn size={15} />
							</Social>
							<Social href="#" label="Twitter">
								<FaTwitter size={15} />
							</Social>
							<Social href="#" label="Instagram">
								<FaInstagram size={15} />
							</Social>
						</div>
					</div>
				</div>

				{/* Bottom row */}
				<div className="mt-8 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/80">
					<p>
						© {new Date().getFullYear()} Arihant Control Systems. All rights
						reserved.
					</p>
					<p>
						Developed by{" "}
						<Link
							href="https://hsdev.in"
							target="_blank"
							className="underline hover:text-white">
							HSDev
						</Link>
					</p>
					<ul className="flex flex-wrap items-center gap-3">
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
			className="group inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0b2d55] shadow-sm outline-none transition hover:bg-white/90 focus:ring-2 focus:ring-white/40">
			<span className="sr-only">{label}</span>
			{children}
		</Link>
	);
}
