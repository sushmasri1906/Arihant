import AboutIntro from "@/components/home/AboutIntro";
import HeroCarousel from "@/components/home/HeroCarousel";
import WhyUs from "@/components/home/WhyUs";
import React from "react";
import ProductsServices from "@/components/home/Manufacturing";
import ServiceIntro from "@/components/home/ServiceIntro";
import MajorProjects from "@/components/home/MajorProjects";
import Products from "@/components/home/Products";
import Client from "@/components/home/Client";

function page() {
	return (
		<div className="bg-neutral-50">
			<HeroCarousel />
			<AboutIntro />
			<WhyUs />
			<ServiceIntro />
			<ProductsServices />
			<MajorProjects />
			<Products />
			<Client />
		</div>
	);
}

export default page;
