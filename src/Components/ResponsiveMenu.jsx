import React from "react";
import { links } from "../data";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = () => {
	return (
		<div className="absolute top-20 right-5 z-20 bg-backgroundColor p-20 duration-300">
			<ul className="flex flex-col justify-center items-center gap-10">
				{links.map(({ name, path }, index) => (
					<li key={index}>
						<NavLink
							to={path}
							className="text-gray-700 hover:text-primary duration-300">
							{name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ResponsiveMenu;
