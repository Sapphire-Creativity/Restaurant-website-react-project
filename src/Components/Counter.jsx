import React from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiBowlSteamFill } from "react-icons/pi";
import { SiCodechef } from "react-icons/si";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
const Counter = () => {
	return (
		<div className="flex flex-wrap justify-center gap-3 bg-gray-100 py-8 px-2 drop-shadow lg:gap-5 items-start">
			<div className="flex items-center text-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<LiaClipboardListSolid className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">2.8k</h2>
					<p className="text-gray-700">Our Daily Order</p>
				</div>
			</div>
			<div className="flex items-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<SiCodechef className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">28</h2>
					<p className="text-gray-700">Specialist Chef</p>
				</div>
			</div>
			<div className="flex items-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<PiBowlSteamFill className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">139</h2>
					<p className="text-gray-700">Our Menu & Dish</p>
				</div>
			</div>
			<div className="flex items-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<FaPeopleRoof className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">99</h2>
					<p className="text-gray-700">Our Members</p>
				</div>
			</div>
			<div className="flex items-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<FaAward className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">39</h2>
					<p className="text-gray-700">Won the Awards</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
