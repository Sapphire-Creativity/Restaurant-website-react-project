import React from "react";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import AboutImage from "../../assets/about-image.jpg";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import CustomBrands from "../../Components/CustomBrands/CustomBrands";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Chef from "../../Components/Chef/Chef";
import TitleHeader from "../../Components/TitleHeader";
import IconOne from "../../assets/feature_box_1.svg";
import IconTwo from "../../assets/feature_box_2.svg";
import IconThree from "../../assets/feature_box_3.svg";
import IconFour from "../../assets/feature_box_4.svg";
import AboutSection from "../../Components/AboutSection";
import Counter from "../../Components/Counter";
import videoImage from "../../assets/video_1.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import "./about.css";
import { Link } from "react-router-dom";
import DeliverySection from "../../Components/DeliverySection";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const about = () => {
	return (
		<>
			<CustomCursor />;
			<OtherHeader
				backgroundImage={AboutImage}
				title={"About us"}
				subTitle={
					"Where Flavor Meets Passion – Crafting Memorable Culinary Experiences"
				}
			/>
			<section className="container bg-gray-50">
				<TitleHeader title={"Our Restuarant Services"}>
					<h2 className="text-3xl md:text-4xl  text-center font-zcool-xiaowei">
						Our Commitment to Excellence
					</h2>
				</TitleHeader>

				<div className="list-items-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-28">
					{/* list-item */}
					<div className="p-10 relative cursor-pointer flex flex-col text-center items-center bg-white drop-shadow-two transition-all duration-500 hover:bg-black hover:-translate-y-2 hover:shadow-xl transform w-full group">
						<div className="icon-container m-auto absolute -top-10 w-20 h-20 bg-gray-100 flex justify-center items-center rounded-full transition-all duration-500 group-hover:bg-white group-hover:rotate-180 group-hover:border group-hover:border-gray-300 group-hover:spin">
							<img
								src={IconOne}
								alt=""
								className="w-10 h-10 transition-all duration-500 group-hover:fill-black"
							/>
						</div>
						<h3 className="font-zcool-xiaowei text-2xl mt-12 text-gray-800 group-hover:text-white">
							Discount Voucher
						</h3>
						<p className="text-gray-600 mt-2">
							Indulge in a gourmet journey with a menu Our chefs use the finest
							ingredients.
						</p>
					</div>

					{/* list-item */}
					<div className="p-10 relative cursor-pointer flex flex-col text-center items-center bg-white drop-shadow-two transition-all duration-500 hover:bg-black hover:-translate-y-2 hover:shadow-xl transform w-full group">
						<div className="icon-container m-auto absolute -top-10 w-20 h-20 bg-gray-100 flex justify-center items-center rounded-full transition-all duration-500 group-hover:bg-white group-hover:rotate-180 group-hover:border group-hover:border-gray-300 group-hover:spin">
							<img
								src={IconTwo}
								alt=""
								className="w-10 h-10 transition-all duration-500 group-hover:fill-black"
							/>
						</div>
						<h3 className="font-zcool-xiaowei text-2xl mt-12 text-gray-800  group-hover:text-white">
							Original Recipes
						</h3>
						<p className="text-gray-600 mt-2">
							Indulge in a gourmet journey with a menu Our chefs use the finest
							ingredients.
						</p>
					</div>

					{/* list-item */}
					<div className="p-10 relative cursor-pointer flex flex-col text-center items-center bg-white drop-shadow-two transition-all duration-500 hover:bg-black hover:-translate-y-2 hover:shadow-xl transform w-full group">
						<div className="icon-container m-auto absolute -top-10 w-20 h-20 bg-gray-100 flex justify-center items-center rounded-full transition-all duration-500 group-hover:bg-white group-hover:rotate-180 group-hover:border group-hover:border-gray-300 group-hover:spin">
							<img
								src={IconThree}
								alt=""
								className="w-10 h-10 transition-all duration-500 group-hover:fill-black"
							/>
						</div>
						<h3 className="font-zcool-xiaowei text-2xl mt-12 text-gray-800 group-hover:text-white">
							100% Fresh Foods
						</h3>
						<p className="text-gray-600 mt-2">
							Indulge in a gourmet journey with a menu Our chefs use the finest
							ingredients.
						</p>
					</div>

					{/* list-item */}
					<div className="p-10 relative cursor-pointer flex flex-col text-center items-center bg-white drop-shadow-two transition-all duration-500 hover:bg-black hover:-translate-y-2 hover:shadow-xl transform w-full group">
						<div className="icon-container m-auto absolute -top-10 w-20 h-20 bg-gray-100 flex justify-center items-center rounded-full transition-all duration-500 group-hover:bg-white group-hover:rotate-180 group-hover:border group-hover:border-gray-300 group-hover:spin">
							<img
								src={IconFour}
								alt=""
								className="w-10 h-10 transition-all duration-500 group-hover:fill-black"
							/>
						</div>
						<h3 className="font-zcool-xiaowei text-2xl mt-12 text-gray-800 group-hover:text-white">
							Serve On Table
						</h3>
						<p className="text-gray-600 mt-2">
							Indulge in a gourmet journey with a menu Our chefs use the finest
							ingredients.
						</p>
					</div>
				</div>
			</section>
			<AboutSection />
			<Chef />
			<Counter />
			<section className="center-background">
				<div className="flex flex-col relative items-center justify-center w-full px-5 md:w-5/6 p-0">
					{/* Title Header */}
					<TitleHeader
						title={"Planning a Date?"}
						className="text-white text-xl md:text-2xl"></TitleHeader>

					{/* Image and Play Icon */}
					<div className="relative w-full flex flex-col items-center justify-center mt-8">
						{/* Play Icon */}
						<FaPlay className="absolute inset-0 m-auto w-20 h-20 text-xs rounded-full text-center bg-white text-primary shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out cursor-pointer" />
						{/* Image */}
						<img
							src={videoImage}
							alt="Video Thumbnail"
							className="w-full object-cover"
						/>
					</div>

					{/* Book a Table Button */}
					<Link to="/reservation" className="primary-btn md:inline-flex mt-6">
						BOOK A TABLE <RiSendPlaneFill className="ml-2" />
					</Link>
				</div>
			</section>
			<Testimonial />
			<DeliverySection />
			<CustomBrands />
			<Footer />
			<Copyright />
		</>
	);
};

export default about;
