import React from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiBowlSteamFill } from "react-icons/pi";
import { SiCodechef } from "react-icons/si";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
const Counter = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center gap-2 sm:gap-4 lg:gap-5 bg-gray-100 py-8 px-4 drop-shadow items-start">
			{/* First item */}
			<div className="flex flex-col sm:flex-row items-center text-center gap-3 sm:gap-5 m-2 cursor-pointer">
				<div className="text-xl sm:text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<LiaClipboardListSolid className="text-white" />
				</div>
				<div className="flex flex-col gap-1">
					<h2 className="font-zcool-xiaowei text-2xl sm:text-3xl lg:text-4xl">
						2.8k
					</h2>
					<p className="text-gray-700 text-sm sm:text-base">Our Daily Order</p>
				</div>
			</div>

			{/* Second item */}
			<div className="flex flex-col sm:flex-row items-center text-center gap-3 sm:gap-5 m-2 cursor-pointer">
				<div className="text-xl sm:text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<SiCodechef className="text-white" />
				</div>
				<div className="flex flex-col gap-1">
					<h2 className="font-zcool-xiaowei text-2xl sm:text-3xl lg:text-4xl">
						28
					</h2>
					<p className="text-gray-700 text-sm sm:text-base">Specialist Chef</p>
				</div>
			</div>

			{/* Third item */}
			<div className="flex flex-col sm:flex-row items-center text-center gap-3 sm:gap-5 m-2 cursor-pointer">
				<div className="text-xl sm:text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<PiBowlSteamFill className="text-white" />
				</div>
				<div className="flex flex-col gap-1">
					<h2 className="font-zcool-xiaowei text-2xl sm:text-3xl lg:text-4xl">
						139
					</h2>
					<p className="text-gray-700 text-sm sm:text-base">Our Menu & Dish</p>
				</div>
			</div>

			{/* Fourth item */}
			<div className="flex flex-col sm:flex-row items-center text-center gap-3 sm:gap-5 m-2 cursor-pointer">
				<div className="text-xl sm:text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<FaPeopleRoof className="text-white" />
				</div>
				<div className="flex flex-col gap-1">
					<h2 className="font-zcool-xiaowei text-2xl sm:text-3xl lg:text-4xl">
						99
					</h2>
					<p className="text-gray-700 text-sm sm:text-base">Our Members</p>
				</div>
			</div>

			{/* Fifth item */}
			<div className="flex flex-col sm:flex-row items-center text-center gap-3 sm:gap-5 m-2 cursor-pointer">
				<div className="text-xl sm:text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<FaAward className="text-white" />
				</div>
				<div className="flex flex-col gap-1">
					<h2 className="font-zcool-xiaowei text-2xl sm:text-3xl lg:text-4xl">
						39
					</h2>
					<p className="text-gray-700 text-sm sm:text-base">Won the Awards</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
