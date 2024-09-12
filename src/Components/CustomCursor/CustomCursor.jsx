import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		const handleMouseMove = (event) => {
			setPosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		const handleMouseDown = () => {
			setIsClicked(true);
		};

		const handleMouseUp = () => {
			setIsClicked(false);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	return (
		<div>
			<div
				className={`custom-cursor ${isClicked ? "click" : ""}`}
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
			/>
			<div
				className={`custom-cursor-border ${isClicked ? "click-border" : ""}`}
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
			/>
		</div>
	);
};

export default CustomCursor;
