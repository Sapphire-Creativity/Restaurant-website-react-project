import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { ChefData } from "../../data.js";

import TitleHeader from "../TitleHeader.jsx";
import ImageOne from "../../assets/hat.png";
import ImageTwo from "../../assets/chef-leaf.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import "./Chef.css";

const Chef = () => {
	return (
		<section className="container">
			<div className="chef-container">
				<TitleHeader title={"Our Chef"}>
					<h2 className="font-zcool-xiaowei text-4xl text-center">
						Meet Our Professional Chefs
					</h2>
				</TitleHeader>
				<div className="mt-16">
					<Swiper
						slidesPerView={4}
						spaceBetween={30}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false, // Keep autoplay running even after interaction
						}}
						loop={true} // Infinite loop
						modules={[Autoplay]}
						breakpoints={{
							1300: {
								slidesPerView: 4, // 2 slides for desktop
							},
							1250: {
								slidesPerView: 3, // 2 slides for tablets
							},

							768: {
								slidesPerView: 2, // 2 slides for tablets
							},

							0: {
								slidesPerView: 1, // 1 slide for mobile
							},
						}}
						className="mySwiper w-full">
						{ChefData.map(({ id, name, role, image }) => (
							<SwiperSlide className="chef-data">
								<div className="div-image-one">
									<img src={ImageOne} alt="" />
								</div>

								<div className="div-image-two">
									<img src={ImageTwo} alt="" />
								</div>

								<div className="social-icons">
									<RiTwitterXFill />
									<BiLogoFacebook />
									<AiFillInstagram />
								</div>
								<div className="chef-image">
									<img src={image} alt="" />
								</div>

								<div className="chef-details">
									<h3 className="font-zcool-xiaowei text-3xl">{name}</h3>
									<p className="text-primary font-medium">{role}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Chef;
