import HeroIntro from "@/components/about/HeroIntro";
import Stats from "@/components/about/Stats";
import Vision from "@/components/about/Vision";
import WhyUs from "@/components/about/WhyUs";
import React from "react";

const page = () => {
	return (
		<>
			<HeroIntro />
			<WhyUs />
			<Vision />
			<Stats />
		</>
	);
};

export default page;
