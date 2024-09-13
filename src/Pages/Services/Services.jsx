import React from "react";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import Image from "../../assets/services.jpg";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const Services = () => {
	return (
		<>
			<CustomCursor />;
			<OtherHeader
				backgroundImage={Image}
				title={"Services"}></OtherHeader>
			<Footer />
			<Copyright />
		</>
	);
};

export default Services;
