import React from "react";
import { Link } from "react-router-dom";

import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import AboutImage from "../../assets/about-image.jpg";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import Image from "../../assets/shop-images/product_1_2.png";
import { IoHome } from "react-icons/io5";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const NotFound = () => {
	return (
		<>
			<CustomCursor />;
			<OtherHeader backgroundImage={AboutImage} title={"ERROR!"} />
			<section>
				<div className="container">
					<div className="flex items-center justify-center">
						<h1 className="font-zcool-xiaowei text-9xl sm:text-BigFont text-black">
							4
						</h1>

						<img src={Image} alt="" className="max-w-full w-28 sm:w-56" />
						<h1 className="font-zcool-xiaowei text-9xl sm:text-BigFont text-black">
							4
						</h1>
					</div>

					<div className="text-center my-10">
						<h2 className="font-zcool-xiaowei text-3xl sm:text-4xl text-gray-700">
							Sorry! Page is not found.
						</h2>

						<p className="text-gray-600 my-5">
							This is a sample page that does not exist or still under
							development.
						</p>
					</div>

					<div className="flex items-center justify-center">
						<Link
							to="/"
							className="primary-btn w-2/3 flex items-center justify-center">
							<IoHome className="mr-2" /> GO TO HOME
						</Link>
					</div>
				</div>
			</section>
			<Footer />
			<Copyright />
		</>
	);
};

export default NotFound;
