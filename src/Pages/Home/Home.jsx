import React from "react";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import CenterDiv from "../../Components/CenterDiv/CenterDiv";
import AboutSection from "../../Components/AboutSection";
import FoodCategory from "../../Components/FoodCategory";
import Counter from "../../Components/Counter";
import FoodMenu from "../../Components/FoodMenu";
import Reservation from "../../Components/Reservation";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Chef from "../../Components/Chef/Chef";
import CustomBrands from "../../Components/CustomBrands/CustomBrands";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const Home = () => {
	return (
		<>
			<CustomCursor />
			<HomeHeader />
			<CenterDiv />
			<AboutSection />
			<FoodCategory />
			<Counter />
			<FoodMenu />
			<Reservation />
			<Testimonial />
			<Chef />
			<CustomBrands />
			<Footer />
			<Copyright />
		</>
	);
};

export default Home;
