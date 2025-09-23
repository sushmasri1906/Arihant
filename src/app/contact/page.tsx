import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import BusinessHours from "@/components/contact/BusinessHours";
import Map from "@/components/contact/Map";
import Cta from "@/components/contact/Cta";
import React from "react";

function page() {
	return (
		<>
			<ContactHero />
			<ContactInfo />
			<BusinessHours />
			<Cta />
			<Map />
		</>
	);
}

export default page;
