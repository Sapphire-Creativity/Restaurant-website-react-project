import React from "react";
import TitleHeader from "./TitleHeader";
import { foodMenu } from "../data";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const FoodMenu = () => {
	return (
		<>
			<div className="py-40">
				<section className="foodmenu flex relative overflow-y-scroll justify-center items-center">
					<div className="menu-list bg-backgroundColor flex flex-col justify-center items-center absolute top-0 bottom-0 w-10/12 h-screen max-h-full pt-10 px-4 cursor-pointer lg:w-9/12 lg:justify-center lg:items-center lg:h-screen lg:px-52">
						<TitleHeader title={"Our Menu"}>
							<h2 className="font-zcool-xiaowei text-3xl text-center">
								Explore Our Delicious Food Menu
							</h2>
						</TitleHeader>

						{foodMenu.map(({ id, name, description, price, imageUrl }) => (
							<div
								key={id}
								className="flex justify-between items-center w-full my-4 group">
								<div className="item-section flex flex-col items-center text-center lg:flex lg:items-start relative">
									<div className="flex gap-4 items-center w-full">
										{/* Image Section */}
										<div className="image max-w-full w-20 lg:w-50 object-cover object-center relative">
											<img src={imageUrl} alt={name} className="rounded-full" />
											<MdAddShoppingCart className="absolute inset-0 m-auto text-black bg-white bg-opacity-70 hover:bg-black hover:text-white rounded-full text-sm p-2 hidden group-hover:flex justify-center items-center w-12 h-12  duration-500" />
										</div>
										<div className="menu-content text-left">
											<h2 className="font-zcool-xiaowei text-2xl lg:text-4xl group-hover:text-primary duration-300">
												{name}
											</h2>
											<p className="text-gray-800 text-xs lg:text-sm">
												{description}
											</p>
										</div>
									</div>
								</div>
								<div className="price">
									<h2 className="font-zcool-xiaowei text-2xl lg:text-4xl group-hover:text-primary duration-300">
										{price}
									</h2>
								</div>
							</div>
						))}
					</div>
				</section>
				<div className="flex items-center justify-center py-10 w-full bg-backgroundColor">
					<a
						href="/shop"
						target="_blank"
						rel="noopener noreferrer"
						className="primary-btn">
						VIEW ALL MENU
						<MdOutlineRestaurantMenu />
					</a>
				</div>
			</div>
		</>
	);
};

export default FoodMenu;
