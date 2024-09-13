import React from "react";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import ReservationImage from "../../assets/reservation.jpg";
import TitleHeader from "../../Components/TitleHeader";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import Testimonial from "../../Components/Testimonial/Testimonial";

import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const Reservation = () => {
	return (
		<>
			<CustomCursor />;
			<OtherHeader
				backgroundImage={ReservationImage}
				title={"Reservation"}
				subTitle={"Reserve Your Table, Savor the Experience."}
			/>
			<div className="my-20">
				<TitleHeader title={"Reservation"}>
					<h2 className="font-zcool-xiaowei text-2xl sm:text-4xl md:text-5xl mb-14">
						Make A Reservation
					</h2>
				</TitleHeader>
			</div>
			<section className="reservation">
				<div className="container ">
					{/* Reservation Section */}

					<div className="bg-lightPrimary  m-auto px-2 py-10 w-[90%] sm:px-3 sm:w-[80%] md:w-[60%] lg:w-[50%]">
						<h2 className="font-zcool-xiaowei text-center text-2xl">
							Book A Table
						</h2>

						<div className="container flex-col w-full items-center">
							<form className="flex flex-col items-center justify-between gap-5 w-full py-10 ">
								{/* Name Input */}
								<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
									<input
										type="text"
										placeholder="Full Name"
										required
										className="w-full outline-none focus:ring-0  text-gray-600"
									/>
									<IoPersonOutline className="text-primary ml-2" />
								</div>
								{/* Email Input */}
								<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
									<input
										type="email"
										placeholder="Email Address"
										required
										className="w-full outline-none focus:ring-0  text-gray-600"
									/>
									<IoMailOutline className="text-primary ml-2" />
								</div>
								{/* Phone Number Input */}
								<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
									<input
										type="text"
										placeholder="Phone Number"
										required
										className="w-full outline-none focus:ring-0  text-gray-600"
									/>
									<FaPhone className="text-primary ml-2" />
								</div>

								{/* Date and Time Input */}
								<div className="flex items-center w-full  bg-white p-5 drop-shadow-three ">
									<input
										type="datetime-local"
										required
										className="w-full bg-transparent outline-none focus:ring-0 appearance-none text-gray-600"
									/>
									<FaCalendarAlt className="text-primary ml-2" />
								</div>

								{/* Total Person Input */}
								<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
									<input
										type="text"
										placeholder="Total Person"
										required
										className="w-full bg-transparent outline-none focus:ring-0  text-gray-600"
									/>
									<MdPeopleAlt className="text-primary ml-2" />
								</div>
								{/* Message Input */}
								<div className="flex justify-between w-full  bg-white p-5 drop-shadow-three">
									<textarea
										type="text"
										rows="4"
										placeholder="Write Special Guest"
										required
										className="w-full bg-transparent outline-none focus:ring-0  text-gray-600 sm:text-sm resize-none "
									/>
									<HiPencilSquare className="text-primary ml-2" />
								</div>
							</form>

							<div className="flex">
								<button className="primary-btn m-auto ">
									BOOK A TABLE <RiSendPlaneFill />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Testimonial />
			<Footer />
			<Copyright />
		</>
	);
};

export default Reservation;
