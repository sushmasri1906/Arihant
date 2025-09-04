import React from "react";
import HeroIntro from "@/components/about/HeroIntro";
import WhyUs from "@/components/about/WhyUs";
import Vision from "@/components/about/Vision";
import Stats from "@/components/about/Stats";

function page() {
	return (
		<div>
			<HeroIntro />
			<WhyUs />
            <Vision />
            <Stats/>

		</div>
	);
}

export default page;
