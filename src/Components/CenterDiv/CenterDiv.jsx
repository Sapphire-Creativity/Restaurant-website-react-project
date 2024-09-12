import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
const CenterDiv = () => {
	return (
		<div className="flex flex-wrap justify-center gap-3 bg-gray-100 py-8 px-2 drop-shadow lg:gap-5 items-start">
			<div className="flex items-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<MdLocationPin className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">Locate Us</h2>
					<p className="text-gray-700">Admiralty Way, Lagos, Nigeria.</p>
				</div>
			</div>
			<div className="flex items-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<IoMdTime className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">Open Hours</h2>
					<p className="text-gray-700">Mon To Fri 9:00 AM - 9:00 PM</p>
				</div>
			</div>
			<div className="flex items-center gap-5 m-2 cursor-pointer">
				<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
					<FaListCheck className="text-white" />
				</div>
				<div className="gap-5">
					<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">
						Reservation
					</h2>
					<p className="text-gray-700">foodvilla@info.com</p>
				</div>
			</div>
		</div>
	);
};

export default CenterDiv;
