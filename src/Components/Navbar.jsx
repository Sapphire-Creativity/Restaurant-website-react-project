import React, { useState } from "react";

import { PiBowlFoodFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";
import { RiSendPlaneFill } from "react-icons/ri";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RiMenu5Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);

	return (
		<>
			<nav className="navbar">
				<div className="w-full flex items-center justify-between ">
					{/* Logo section */}
					<div>
						<Link to="/" className="text-4xl flex items-center gap-1">
							<PiBowlFoodFill className="text-primary" />
							<p className="font-zcool-xiaowei text-3xl">
								Food<span className="text-primary font-semibold">Villa</span>{" "}
							</p>
						</Link>
					</div>

					{/* Menu section */}
					<div className="">
						<ul
							className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
							{links.map(({ name, path }, index) => (
								<li key={index}>
									<NavLink
										to={path}
										className={({ isActive }) => (isActive ? "active-nav" : "")}
										onClick={() => setIsNavShowing(false)}>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					<div className="flex gap-2 sm:gap-10 items-center">
						{/* Icons section */}

						<div className="flex items-center justify-between gap-5">
							<CiSearch className="text-4xl text-black border border-black hover:border-primary hover:bg-primary hover:text-white duration-500 p-2 rounded-full" />

							<a
								href="/signup"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsNavShowing(false)}>
								<RiAccountPinCircleLine className="text-4xl text-black border border-black hover:border-primary hover:bg-primary hover:text-white duration-500 p-2 rounded-full" />
							</a>
							{/* Mobile Hamburger Section */}
							<button
								className="toggle-btn"
								onClick={() => setIsNavShowing((prev) => !prev)}>
								{isNavShowing ? <MdOutlineClose /> : <RiMenu5Line />}
							</button>
						</div>

						{/* Button section */}
						<a
							href="/reservation"
							target="_blank"
							rel="noopener noreferrer"
							className="primary-btn hidden md:inline-flex">
							BOOK A TABLE <RiSendPlaneFill />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
