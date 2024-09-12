import React from "react";
import ImageOne from "../../assets/brand_1_1.svg";
import ImageTwo from "../../assets/brand_1_2.svg";
import ImageThree from "../../assets/brand_1_3.svg";
import ImageFour from "../../assets/brand_1_4.svg";
import ImageFive from "../../assets/brand_1_5.svg";
import ImageSix from "../../assets/brand_1_6.svg";
import ImageSeven from "../../assets/brand_1_7.svg";
import TitleHeader from "../../Components/TitleHeader";

const CustomBrands = () => {
	return (
		<section className="container mx-auto px-4">
			<TitleHeader title={"Trusted Brands"}>
				<h2 className="text-4xl text-gray-700 font-zcool-xiaowei">
					10000+ Brands Trust Us
				</h2>
			</TitleHeader>
			<div className="flex flex-wrap items-center justify-center py-10 gap-5 md:gap-10">
				<img
					src={ImageOne}
					alt="Brand 1"
					className="w-24 h-24 sm:w-40 sm:h-40 grayscale opacity-70 transition duration-800 hover:grayscale-0 hover:opacity-100"
				/>
				<img
					src={ImageTwo}
					alt="Brand 2"
					className="w-24 h-24 sm:w-40 sm:h-40 grayscale opacity-70 transition duration-800 hover:grayscale-0 hover:opacity-100"
				/>
				<img
					src={ImageThree}
					alt="Brand 3"
					className="w-24 h-24 sm:w-40 sm:h-40 grayscale opacity-70 transition duration-800 hover:grayscale-0 hover:opacity-100"
				/>
				<img
					src={ImageFour}
					alt="Brand 4"
					className="w-24 h-24 sm:w-40 sm:h-40 grayscale opacity-70 transition duration-800 hover:grayscale-0 hover:opacity-100"
				/>
				<img
					src={ImageFive}
					alt="Brand 5"
					className="w-24 h-24 sm:w-40 sm:h-40 grayscale opacity-70 transition duration-800 hover:grayscale-0 hover:opacity-100"
				/>
				<img
					src={ImageSix}
					alt="Brand 6"
					className="w-24 h-24 sm:w-40 sm:h-40 grayscale opacity-70 transition duration-800 hover:grayscale-0 hover:opacity-100"
				/>
				<img
					src={ImageSeven}
					alt="Brand 7"
					className="w-24 h-24 sm:w-40 sm:h-40 grayscale opacity-70 transition duration-800 hover:grayscale-0 hover:opacity-100"
				/>
			</div>
		</section>
	);
};

export default CustomBrands;
