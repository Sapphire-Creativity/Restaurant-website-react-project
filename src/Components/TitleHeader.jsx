import React from "react";
import DefaultImage from "../assets/title_shape.png"; // Use a default image

const TitleHeader = ({ title, image = DefaultImage, children }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="text-primary font-great-vibes text-center text-2xl my-4 md:text-4xl">{title}</h2>
			<img src={image} alt="Title decoration" className="flex -mt-5" />
			{children}
		</div>
	);
};

export default TitleHeader;
