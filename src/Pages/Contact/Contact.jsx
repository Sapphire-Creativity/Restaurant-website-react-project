import React from "react";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import AboutImage from "../../assets/about-image.jpg";
import { FaPhone } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import { toast } from "react-toastify";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const Contact = () => {
	const [result, setResult] = React.useState("");
	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "75f849b9-8898-4887-8d2a-3928894856c9");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
			toast.result(" Form Submitted Successfully", {
				position: "bottom-center",
			});

		} else {
			console.log("Error", data);
			setResult(data.message);
			
		}
	};

	return (
		<>
			<CustomCursor />;
			<OtherHeader
				backgroundImage={AboutImage}
				title={"Contact Us"}
				subTitle={"Get in Touch for Fresh Flavors & Friendly Service!"}
			/>
			<section className="">
				<div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
					{/* Content Section */}
					<div className="bg-gray-100 flex flex-col p-10 ">
						<h2 className="font-zcool-xiaowei text-3xl sm:text-4xl text-center">
							Contact Information
						</h2>
						<p className="my-5 text-center">
							Immerse yourself in a sophisticated and inviting ambiance. The
							carefully curated decor sets the stage for intimate dinners,
							celebrations.
						</p>

						<div className="flex flex-col justify-center gap-2  w-full p-2 drop-shadow  items-start">
							<div className="flex flex-col items-center text-center w-full gap-5 m-2 cursor-pointer">
								<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
									<MdLocationPin className="text-white" />
								</div>
								<div className="gap-5">
									<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">
										Locate Us
									</h2>
									<p className="text-gray-700">
										Admiralty Way, Lagos, Nigeria.
									</p>
								</div>
							</div>
							<div className="flex flex-col  items-center text-center w-full gap-5 m-2 cursor-pointer">
								<div className="text-2xl bg-primary p-3 rounded-full lg:p-4 lg:text-4xl">
									<IoMdTime className="text-white" />
								</div>
								<div className="gap-5">
									<h2 className="font-zcool-xiaowei text-3xl lg:text-4xl">
										Open Hours
									</h2>
									<p className="text-gray-700">Mon To Fri 9:00 AM - 9:00 PM</p>
								</div>
							</div>
							<div className="flex flex-col items-center text-center w-full gap-5 m-2 cursor-pointer">
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
					</div>

					{/* Form Section */}

					<div className="container flex-col w-full items-center">
						<form
							onSubmit={onSubmit}
							className="flex flex-col items-center justify-between gap-5 w-full py-10 ">
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

							<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
								<select
									id="dropdown"
									className="bg-white outline-none focus:ring-0 text-gray-700 w-full">
									<option value="" disabled>
										Select Message Subject
									</option>
									<option value="option1">General Enquiries</option>
									<option value="option2">Reservation</option>
									<option value="option3">Customer Care</option>
									<option value="option3">Sales Support</option>
									<option value="option3">Others</option>
								</select>
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
									rows="6"
									placeholder="Type Appointment Note..."
									required
									className="w-full bg-transparent outline-none focus:ring-0  text-gray-600 sm:text-sm resize-none "
								/>
								<HiPencilSquare className="text-primary ml-2" />
							</div>

							<div className="flex">
								<button type="submit" className="primary-btn m-auto w-full">
									SEND A MESSAGE <RiSendPlaneFill />
								</button>
							</div>
							

							<span>{result}</span>

							
						</form>
					</div>
				</div>
			</section>
			<Footer />
			<Copyright />
		</>
	);
};

export default Contact;
