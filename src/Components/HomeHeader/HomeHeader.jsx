import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const HomeHeader = () => {
	return (
		<header className="header-container">
			<div className="container flex-col items-center text-center pt-10 md:text-left ml-0 max-w-[750px] lg:max-w-[900px]">
				{/* Text Section */}
				<h2 className="font-great-vibes text-primary text-2xl">
					Discover the Taste of Freshness
				</h2>
				<h1 className="text-white text-5xl font-medium font-zcool-xiaowei leading-normal uppercase md:text-7xl">
					Indulge in a Culinary Journey
				</h1>

				<p className="text-gray-50 my-2 md:max-w-[600px]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cum
					distinctio ex exercitationem sed ad sapiente eius.
				</p>
				<div className="inline-flex items-center gap-5 my-5">
					<a
						href="/reservation"
						target="_blank"
						rel="noopener noreferrer"
						className="primary-btn ">
						BOOK A TABLE <RiSendPlaneFill />
					</a>

					<a
						href="/shop"
						target="_blank"
						rel="noopener noreferrer"
						className="primary-btn ">
						VIEW MENU
						<MdOutlineRestaurantMenu />
					</a>
				</div>
			</div>
		</header>
	);
};

export default HomeHeader;
