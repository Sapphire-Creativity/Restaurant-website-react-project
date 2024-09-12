import React from "react";
import Image from "../assets/delivery_1.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiSealCheckFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const DeliverySection = () => {
	return (
		<section className="container bg-lightPrimary">
			<div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2">
				<div className=" ">
					<div className="items-start justify-start">
						<h3 className="font-great-vibes text-3xl text-primary">
							Food Delivery
						</h3>
						<h2 className="font-zcool-xiaowei text-4xl  text-left my-4 w-5/6 md:w-5/6 md:text-6xl">
							Where Good Food Meets Fast Delivery
						</h2>
					</div>

					<p className="text-gray-600 my-5 md:text-lg md:w-5/6">
						Indulge in a gourmet journey with a menu that showcases a fusion of
						flavors. Our chefs use the finest ingredients to create dishes that
						are not just meals but unforgettable experiences.
					</p>

					<div className="flex flex-col py-2 w-full md:w-5/6">
						{/* List items section */}
						<div className="flex-col items-center">
							<div className="flex items-center justify-start p-5 gap-5 m-3 bg-white drop-shadow-two ">
								<PiSealCheckFill className="text-primary text-3xl" />
								<h3 className="font-zcool-xiaowei text-gray-700 text-xl">
									{" "}
									Delivery In 30 Minutes
								</h3>
							</div>

							<div className="flex items-center justify-start p-5 gap-5  m-3  bg-white drop-shadow-two ">
								<PiSealCheckFill className="text-primary text-3xl" />
								<h3 className="font-zcool-xiaowei text-gray-700 text-xl">
									Free Shipping $50.00
								</h3>
							</div>
						</div>

						{/* List items section */}
						<div className="flex-col items-center">
							<div className="flex items-center justify-start p-5 gap-5  m-3 bg-white drop-shadow-two ">
								<PiSealCheckFill className="text-primary text-3xl" />
								<h3 className="font-zcool-xiaowei text-gray-700 text-xl">
									{" "}
									Delivery On Doorstep
								</h3>
							</div>
							<div className="flex items-center justify-start p-5 gap-5  m-3 bg-white drop-shadow-two ">
								<PiSealCheckFill className="text-primary text-3xl" />
								<h3 className="font-zcool-xiaowei text-gray-700 text-xl">
									On the Way Tracking
								</h3>
							</div>
						</div>
					</div>
					<Link to="/shop" className="primary-btn mt-10">
						ORDER NOW <HiArrowLongRight />
					</Link>
				</div>

				<div>
					<img src={Image} alt="" className="max-w-full h-auto" />
				</div>
			</div>
		</section>
	);
};

export default DeliverySection;
