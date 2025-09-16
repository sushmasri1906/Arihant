"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const BLUE = "#0056A6";

const LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [hovered, setHovered] = useState<string | null>(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isDesktop, setIsDesktop] = useState<boolean>(true);

	// Track scroll
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Track viewport to decide desktop vs mobile
	useEffect(() => {
		const mq = window.matchMedia("(min-width: 1024px)");
		const update = () => setIsDesktop(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	// Close drawer on route change
	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	// Palette
	const palette = useMemo(() => {
		if (!isDesktop) {
			// ✅ Mobile behavior
			if (menuOpen) {
				return {
					navBg: "bg-white shadow-md",
					brandPrimary: "text-zinc-900",
					brandSecondary: "text-zinc-500",
					linkBase: "text-zinc-800",
					linkHover: "hover:text-[#0056A6]",
					linkActive: "text-[#0056A6]",
					iconBtn: "text-zinc-700 hover:bg-zinc-100",
					underline: "bg-[#0056A6]",
				};
			}
			if (scrolled) {
				return {
					navBg: "bg-white shadow-md",
					brandPrimary: "text-zinc-900",
					brandSecondary: "text-zinc-500",
					linkBase: "text-zinc-800",
					linkHover: "hover:text-[#0056A6]",
					linkActive: "text-[#0056A6]",
					iconBtn: "text-zinc-700 hover:bg-zinc-100",
					underline: "bg-[#0056A6]",
				};
			}
			// Transparent at top
			return {
				navBg: "bg-transparent",
				brandPrimary: "text-white",
				brandSecondary: "text-white/70",
				linkBase: "text-white/90",
				linkHover: "hover:text-white",
				linkActive: "text-white",
				iconBtn: "text-white hover:bg-white/10",
				underline: "bg-white",
			};
		}

		// ✅ Desktop behavior
		return scrolled || menuOpen
			? {
					navBg:
						"bg-white/90 backdrop-blur-lg shadow-md supports-[backdrop-filter]:backdrop-blur-lg",
					brandPrimary: "text-zinc-900",
					brandSecondary: "text-zinc-500",
					linkBase: "text-zinc-800",
					linkHover: "hover:text-[#0056A6]",
					linkActive: "text-[#0056A6]",
					iconBtn: "text-zinc-700 hover:bg-zinc-100",
					underline: "bg-[#0056A6]",
			  }
			: {
					navBg: "bg-transparent",
					brandPrimary: "text-white",
					brandSecondary: "text-white/70",
					linkBase: "text-white/90",
					linkHover: "hover:text-white",
					linkActive: "text-white",
					iconBtn: "text-white hover:bg-white/10",
					underline: "bg-white",
			  };
	}, [scrolled, menuOpen, isDesktop]);

	return (
		<nav
			className={[
				"fixed top-0 left-0 z-50 w-full h-20 flex items-center transition-all duration-300",
				palette.navBg,
			].join(" ")}
			aria-label="Main navigation">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 lg:px-8">
				{/* Logo */}
				<Link
					href="/"
					className="group inline-flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056A6]">
					<div className="flex items-center">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/w_400,q_auto,f_auto/v1758015372/3_rua9gv.png"
							alt="Arihant Control Systems Logo"
							width={160} // logical size
							height={80}
							className="h-20 w-40 object-contain p-2"
							priority
						/>
					</div>
				</Link>
				{/* Desktop Menu */}
				<div className="hidden items-center gap-x-6 font-medium lg:flex">
					{LINKS.map((link) => {
						const active = pathname === link.href;
						return (
							<motion.div
								key={link.href}
								onMouseEnter={() => setHovered(link.href)}
								onMouseLeave={() => setHovered(null)}
								className="relative px-2 py-1 min-w-16 flex justify-center items-center">
								<Link
									href={link.href}
									className={[
										"transition duration-300",
										active
											? palette.linkActive
											: [palette.linkBase, palette.linkHover].join(" "),
									].join(" ")}>
									{link.label}
								</Link>

								{/* Animated underline */}
								<AnimatePresence>
									{(hovered === link.href || active) && (
										<motion.div
											layoutId="desktop-underline"
											className={`absolute bottom-0 left-0 h-[2px] w-full ${palette.underline}`}
											transition={{
												type: "spring",
												stiffness: 500,
												damping: 30,
											}}
										/>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>
				{/* Mobile Menu Toggle */}
				<button
					onClick={() => setMenuOpen(true)}
					className={[
						"inline-flex items-center justify-center rounded-md p-2 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056A6]",
						palette.iconBtn,
					].join(" ")}
					aria-label="Open menu"
					aria-expanded={menuOpen}
					aria-controls="mobile-drawer">
					<FaBars size={22} />
				</button>
			</div>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{menuOpen && (
					<>
						{/* Backdrop */}
						<motion.button
							type="button"
							className="fixed inset-0 z-[49] bg-black/40 lg:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							onClick={() => setMenuOpen(false)}
							aria-label="Close menu backdrop"
						/>

						{/* Panel */}
						<motion.aside
							id="mobile-drawer"
							className="fixed top-0 right-0 z-[50] h-full w-4/5 max-w-xs bg-white px-6 pt-24 pb-8 shadow-xl lg:hidden"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							aria-modal="true"
							role="dialog">
							{/* Close Button */}
							<button
								onClick={() => setMenuOpen(false)}
								className="absolute top-6 right-6 text-[#0056A6] hover:rotate-90 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056A6] rounded-md"
								aria-label="Close menu">
								<FaTimes size={26} />
							</button>

							{/* Links */}
							<nav className="flex flex-col gap-3">
								{LINKS.map((link) => {
									const active = pathname === link.href;
									return (
										<motion.div
											key={link.href}
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.98 }}>
											<Link
												href={link.href}
												onClick={() => setMenuOpen(false)}
												className={[
													"block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300",
													active
														? "bg-blue-50 text-[#0056A6]"
														: "text-slate-800 hover:bg-slate-100",
												].join(" ")}>
												{link.label}
											</Link>
										</motion.div>
									);
								})}
							</nav>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
}
