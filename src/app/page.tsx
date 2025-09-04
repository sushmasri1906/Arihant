import AboutIntro from "@/components/home/AboutIntro";
import HeroCarousel from "@/components/home/HeroCarousel";
import WhyUs from "@/components/home/WhyUs";
import React from "react";
import ProductsServices from "@/components/home/Manufacturing";
import ServiceIntro from "@/components/home/ServiceIntro";
import MajorProjects from "@/components/home/MajorProjects";

function page() {
	return (
		<>
			<HeroCarousel />
			<AboutIntro />
			<WhyUs />
			<ServiceIntro />
			<ProductsServices />
			<MajorProjects />
		</>
	);
}

export default page;
