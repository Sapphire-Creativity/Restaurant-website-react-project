import React from "react";
import TitleHeader from "./TitleHeader";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const Reservation = () => {
	return (
		<section className="reservation py-20">
			<TitleHeader
				title={"Book A Table"}
				className="flex items-center justify-center text-center">
				<h2 className="font-zcool-xiaowei text-5xl text-white text-center">
					Hassle-Free Table Reservations
				</h2>
				<p className="text-gray-300 my-2 text-center text-sm lg:max-w-3xl">
					Indulge in a gourmet journey with a menu that showcases a fusion of
					flavors. Our chefs use the finest ingredients to create dishes
				</p>
			</TitleHeader>

			<div className="container flex-col w-full items-center pt-10 lg:flex">
				<form className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full max-w-3xl">
					{/* Phone Number Input */}
					<div className="flex items-center w-full border border-gray-300 p-3">
						<input
							type="text"
							placeholder="Phone Number"
							required
							className="w-full bg-transparent outline-none focus:ring-0  text-gray-300"
						/>
						<FaPhone className="text-primary ml-2" />
					</div>

					{/* Date and Time Input */}
					<div className="flex items-center w-full border border-gray-300 p-3 ">
						<input
							type="datetime-local"
							required
							className="w-full bg-transparent outline-none focus:ring-0 appearance-none text-gray-300"
						/>
						<FaCalendarAlt className="text-primary ml-2" />
					</div>

					{/* Total Person Input */}
					<div className="flex items-center w-full border border-gray-300 p-3">
						<input
							type="number"
							placeholder="Total Person"
							required
							className="w-full bg-transparent outline-none focus:ring-0  text-gray-300"
						/>
						<MdPeopleAlt className="text-primary ml-2" />
					</div>
				</form>

				<div className="flex items-center justify-center">
					<a
						href="/reservation"
						target="_blank"
						rel="noopener noreferrer"
						className="primary-btn mt-5 w-full sm:w-ful">
						BOOK NOW <RiSendPlaneFill />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Reservation;
