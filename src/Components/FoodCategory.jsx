import React from "react";
import TitleHeader from "../Components/TitleHeader";
import { foodCategory } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const FoodCategory = () => {
	return (
		<section>
			<TitleHeader title={"Food Category"}>
				<h2 className="flex text-center my-5 font-zcool-xiaowei text-4xl">
					Delicious Food Category
				</h2>
			</TitleHeader>

			{/* Food Carousel */}
			<div className="container py-10">
				<Swiper
					slidesPerView={4} // Default number of slides for desktop
					spaceBetween={40} // Space between each card
					autoplay={{
						delay: 3000, // Delay between auto slides in milliseconds
						disableOnInteraction: false, // Keep autoplay running even after interaction
					}}
					loop={true} // Infinite loop
					pagination={{
						clickable: true,
						bulletClass: "swiper-pagination-bullet", // Default bullet class
						bulletActiveClass: "swiper-pagination-bullet-active", // Active bullet class
					}}
					modules={[Pagination, Autoplay]}
					breakpoints={{
						1200: {
							slidesPerView: 4, // 4 slides for desktop
						},
						1100: {
							slidesPerView: 2, // 4 slides for desktop
						},
						900: {
							slidesPerView: 2, // 2 slides for tablets
						},
						0: {
							slidesPerView: 1, // 1 slide for mobile
						},
					}}
					className="mySwiper">
					{foodCategory.map(({ id, name, description, price, imageUrl }) => (
						<SwiperSlide key={id}>
							<div className="flex flex-col gap-8 justify-center items-center mb-20">
								{" "}
								{/* image-section */}
								<div className="relative w-full">
									<img
										src={imageUrl}
										alt={name}
										className="max-w-full w-55 m-auto"
									/>
									<h5 className="w-8 h-8 p-8 flex items-center justify-center absolute top-2 right-2 rounded-full bg-black text-white">
										{price}
									</h5>
								</div>
								<div className="bg-white py-8 px-4 drop-shadow rounded-b-xl text-center">
									<h2 className="font-zcool-xiaowei text-3xl">{name}</h2>
									<p className="text-gray-800 my-4 text-sm">{description}</p>
									<a
										href="/shop"
										target="_blank"
										rel="noopener noreferrer"
										className="primary-btn">
										VIEW MENU
										<MdOutlineRestaurantMenu />{" "}
									</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default FoodCategory;
