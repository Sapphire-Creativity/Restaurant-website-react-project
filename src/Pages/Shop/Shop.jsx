import React from "react";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import ShopImage from "../../assets/shop.jpg";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import { SlArrowDown } from "react-icons/sl";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { shopImages } from "../../data";
import { moreShopImages } from "../../data";
import { shopImagesCarousel } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import CustomBrands from "../../Components/CustomBrands/CustomBrands";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const Shop = () => {
	return (
		<>
			<CustomCursor />;
			<OtherHeader
				backgroundImage={ShopImage}
				title={"Shop"}
				subTitle={"Fresh Flavors, Delivered to Your Doorstep!"}
			/>
			<section className="container">
				{/* Shop Container */}
				<div>
					<div className="flex flex-col gap-5 justify-between items-center bg-lightPrimary p-5 sm:flex sm:flex-row sm:gap-0">
						<div>
							<h3 className="text-base">Shop Items</h3>
						</div>

						<div className="flex items-center justify-between gap-5 text-sm bg-white p-3 drop-shadow-two">
							<h3>Default Sorting</h3>
							<SlArrowDown />
						</div>
					</div>

					{/* Shop Items */}

					<div className="py-10 grid gap-1 grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{shopImages.map(({ id, name, price, imageUrl }) => (
							<div
								className="relative group flex flex-col items-center text-4xl justify-center"
								key={id}>
								<div className="flex flex-col items-center justify-center gap-3 absolute top-5 right-5 z-10 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
									<FaRegEye className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
									<MdOutlineAddShoppingCart className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
									<IoMdHeartEmpty className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
								</div>

								<div className="bg-lightPrimary p-5 md:p-10 ">
									<img
										src={imageUrl}
										alt=""
										className="m-auto max-w-full w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-two"
									/>
								</div>

								<div className="flex flex-col text-center justify-center py-5">
									<h2 className="font-zcool-xiaowei text-gray-700 text-2xl mb-2">
										{name}
									</h2>
									<p className="text-primary font-semibold text-xl">{price}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="container bg-gray-50">
				<div className="">
					<div className="flex flex-col gap-5 justify-between items-center p-2 sm:flex sm:flex-row sm:gap-0">
						<h3 className="text-3xl font-zcool-xiaowei">Special Offer</h3>
					</div>

					{/* Food Carousel */}
					<div className="container py-10">
						<Swiper
							slidesPerView={4} // Default number of slides for desktop
							spaceBetween={15} // Space between each card
							autoplay={{
								delay: 3000, // Delay between auto slides in milliseconds
								disableOnInteraction: false, // Keep autoplay running even after interaction
							}}
							loop={true} // Infinite loop
							modules={[Pagination, Autoplay]}
							breakpoints={{
								1200: {
									slidesPerView: 4, // 4 slides for desktop
								},
								1100: {
									slidesPerView: 2, // 4 slides for desktop
								},
								900: {
									slidesPerView: 2, //  2 slides for tablets
								},
								0: {
									slidesPerView: 1, // 1 slide for mobile
								},
							}}
							className="mySwiper">
							{shopImagesCarousel.map(
								({ id, name, price, slashedPrice, imageUrl }) => (
									<SwiperSlide key={id}>
										<div
											className="relative group flex flex-col items-center text-4xl justify-center"
											key={id}>
											<div className="flex flex-col items-center justify-center gap-3 absolute top-5 right-5 z-10 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
												<FaRegEye className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
												<MdOutlineAddShoppingCart className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
												<IoMdHeartEmpty className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
											</div>

											<div className="bg-lightPrimary w-full p-5 md:p-10">
												<img
													src={imageUrl}
													alt=""
													className="m-auto max-w-full w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-two"
												/>
											</div>

											<div className="flex flex-col text-center justify-center py-5">
												<h2 className="font-zcool-xiaowei text-gray-700 text-2xl mb-2">
													{name}
												</h2>

												<div className="flex items-center gap-2 justify-center text-center">
													<p className="text-primary font-semibold text-xl">
														{price}
													</p>
													<p className="text-gray-500 text-sm line-through">
														{slashedPrice}
													</p>
												</div>

												<div className="text-xs flex items-center justify-center m-auto text-center text-primary">
													{Array.from({ length: 5 }, (_, index) => (
														<span key={index}>
															{index < shopImagesCarousel.rating ? (
																<FaStar className="text-center" />
															) : (
																<FaRegStar className="text-center" />
															)}
														</span>
													))}
												</div>
											</div>
										</div>
									</SwiperSlide>
								)
							)}
						</Swiper>
					</div>
				</div>
			</section>
			<section className="container">
				{/* Shop Container */}
				<div>
					{/* Shop Items */}

					<div className="py-10 grid gap-1 grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{moreShopImages.map(({ id, name, price, imageUrl }) => (
							<div
								className="relative group flex flex-col items-center text-4xl justify-center"
								key={id}>
								<div className="flex flex-col items-center justify-center gap-3 absolute top-5 right-5 z-10 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
									<FaRegEye className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
									<MdOutlineAddShoppingCart className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
									<IoMdHeartEmpty className="p-2 bg-white text-gray-500 hover:bg-primary hover:text-white transform hover:scale-110 duration-300 shadow-md text-4xl" />
								</div>

								<div className="bg-lightPrimary p-5 md:p-10 ">
									<img
										src={imageUrl}
										alt=""
										className="m-auto max-w-full w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-two"
									/>
								</div>

								<div className="flex flex-col text-center justify-center py-5">
									<h2 className="font-zcool-xiaowei text-gray-700 text-2xl mb-2">
										{name}
									</h2>
									<p className="text-primary font-semibold text-xl">{price}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<CustomBrands />
			<Footer />
			<Copyright />
		</>
	);
};

export default Shop;
