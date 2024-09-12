import React from "react";
import TitleHeader from "../TitleHeader";
import { FaStar, FaRegStar } from "react-icons/fa"; // Icons for full, half, and empty stars
import { testimonials } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
	return (
		<section>
			<div className="container">
				<TitleHeader title={"Testimonials"}>
					<h2 className="font-zcool-xiaowei text-gray-700 text-center text-3xl">
						What Our Customer Say About Our Foods
					</h2>
				</TitleHeader>

				<div className="py-20">
					<Swiper
						slidesPerView={2}
						spaceBetween={30}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false, // Keep autoplay running even after interaction
						}}
						loop={true} // Infinite loop
						modules={[Autoplay]}
						breakpoints={{
							1200: {
								slidesPerView: 2, // 2 slides for desktop
							},
							900: {
								slidesPerView: 2, // 2 slides for tablets
							},
							0: {
								slidesPerView: 1, // 1 slide for mobile
							},
						}}
						className="mySwiper w-full">
						{testimonials.map((testimonial) => (
							<SwiperSlide
								key={testimonial.id}
								className="testimonial-card flex flex-col relative items-center justify-start gap-3 px-4 py-4 rounded-md bg-white drop-shadow mb-20">
								{/* Image container */}
								<div className="w-24 h-24 flex items-center justify-center m-auto rounded-full border-4 border-white shadow-lg  ">
									<img
										src={testimonial.imageUrl}
										alt={testimonial.name}
										className="object-cover object-center w-full h-full rounded-full"
									/>
								</div>

								<div>
									{/* Testimonial content */}
									<p className="text-xm text-center text-gray-500 mt-5 text-sm">
										{testimonial.testimonial}
									</p>
									<h3 className="font-zcool-xiaowei text-gray-800 text-center text-2xl mt-5">
										{testimonial.name}
									</h3>
									<p className="text-primary text-xm text-center text-xs">
										{testimonial.title}
									</p>
									<div className=" flex items-center justify-center m-auto my-2 text-center text-primary">
										{Array.from({ length: 5 }, (_, index) => (
											<span key={index}>
												{index < testimonial.rating ? (
													<FaStar className="text-center" />
												) : (
													<FaRegStar className="text-center" />
												)}
											</span>
										))}
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
