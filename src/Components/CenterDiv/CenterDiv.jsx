import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
const CenterDiv = () => {
	return (
		<div className="grid grid-cols-3 gap-1 items-start sm:flex  md:justify-center sm:gap-3 bg-gray-100 py-8 px-2 drop-shadow lg:gap-20">
			<div className="flex flex-col text-center sm:flex-row items-center gap-2 lg:gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<MdLocationPin className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei  text-base font-medium sm:text-2xl md:text-4xl">
						Locate Us
					</h2>
					<p className="text-gray-700 text-xs sm:text-sm md:text-base">
						Admiralty Way, Lagos, Nigeria.
					</p>
				</div>
			</div>
			<div className="flex flex-col text-center sm:flex-row items-center gap-2 lg:gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<IoMdTime className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-base font-medium sm:text-2xl md:text-4xl">
						Open Hours
					</h2>
					<p className="text-gray-700 text-xs sm:text-sm md:text-base ">
						Mon To Fri 9:00 AM - 9:00 PM
					</p>
				</div>
			</div>
			<div className="flex flex-col text-center sm:flex-row items-center gap-2 lg:gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<FaListCheck className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-base font-medium sm:text-2xl md:text-4xl">
						Reservation
					</h2>
					<p className="text-gray-700 text-xs sm:text-sm md:text-base">
						foodvilla@info.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default CenterDiv;
