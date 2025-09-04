import AboutIntro from "@/components/home/AboutIntro";
import HeroCarousel from "@/components/home/HeroCarousel";
import WhyUs from "@/components/home/WhyUs";
import React from "react";
import ProductsServices from "@/components/home/Manufacturing";

function page() {
	return (
		<>
			<HeroCarousel />
			<AboutIntro />
			<WhyUs />
			<ProductsServices />
		</>
	);
}

export default page;
