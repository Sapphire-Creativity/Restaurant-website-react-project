import React from "react";
import TitleHeader from "./TitleHeader";
import ImageOne from "../assets/about_1_1.jpg";
import ImageTwo from "../assets/menu_1.jpg";
const AboutSection = () => {
	return (
		<section>
			<TitleHeader title={"What Makes us Special"}>
				<h2 className="flex text-center my-5 font-zcool-xiaowei text-4xl lg:max-w-[600px]">
					A Culinary Oasis for Those Who Seek the Extraordinary
				</h2>
			</TitleHeader>
			<div className="container grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 py-8">
				{/* About Images Section */}
				<div className="images flex flex-col relative">
					<img src={ImageOne} alt="" className="max-w-full w-fit m-auto" />
					{/* <img src={ImageTwo} alt="" className="max-w-full absolute left-52 w-30 top-20" /> */}
				</div>

				{/* About Text Section */}
				<div className="flex flex-col gap-5">
					<h2 className="font-zcool-xiaowei text-4xl font-medium text-center lg:text-left">
						About Our Story
					</h2>
					<p className="text-gray-700 my-4 text-center lg:text-left">
						Indulge in a gourmet journey with menu that showcases a fusion of
						flavor. Our chefs use the finest ingredients to create dishes that
						are not just meals but unforgettable experiences.
					</p>

					<div className="flex flex-col text-center items-center justify-between py-6 border-t-2 border-b-2 gap-8 sm:flex sm:text-left">
						<div>
							<h3 className="font-zcool-xiaowei text-3xl">1996</h3>

							<p className="text-gray-700 mt-3">
								We believe that great food shouldn't break the bank.
							</p>
						</div>
						<div>
							<h3 className="font-zcool-xiaowei text-3xl">2024</h3>

							<p className="text-gray-700 mt-3">
								Enjoy your quick meal in a casual and friendly setting.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
