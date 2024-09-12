import React from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import "./Footer.css";
const Footer = () => {
	return (
		<section className="footer-container bg-black">
			<div className="inner-footer-container">
				<div className="section-one">
					<Link to="/" className="text-3xl flex items-center gap-1">
						<PiBowlFoodFill className="text-primary" />
						<p className="font-zcool-xiaowei text-3xl">
							Food<span className="text-primary font-semibold">Villa</span>{" "}
						</p>
					</Link>

					<p>
						We believe that great food shouldn't break the bank. That's why we
						offer affordable options without compromising on taste.
					</p>

					<div className="socials-icon">
						<a href="https://facebook.com" target="_blank" rel="noreferrer">
							<FaFacebookF className="social" />
						</a>
						<a href="https://instagram.com" target="_blank" rel="noreferrer">
							<RiInstagramFill className="social" />
						</a>
						<a href="https://twitter.com" target="_blank" rel="noreferrer">
							<FaXTwitter className="social" />
						</a>
						<a href="https://pinterest.com" target="_blank" rel="noreferrer">
							<FaPinterestP className="social" />
						</a>
					</div>
				</div>
				<div className="setion-two">
					<h3 className="font-zcool-xiaowei text-gray-200 text-2xl">
						Explore{" "}
					</h3>
					<div className="link-section">
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/about">About Us</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/services">Services</a>
						</li>

						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/about">Our Chefs</a>
						</li>

						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/shop">Shop</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/reservation">Reservation</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/contact">Contact Us</a>
						</li>
					</div>
				</div>
				<div className="setion-three">
					<h3 className="font-zcool-xiaowei text-gray-200 text-2xl">
						Quick Links
					</h3>
					<div className="link-section">
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/SignUp">Sign Up</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/SignIn">Sign In</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/pricing">Become a Seller</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/terms">Terms & Conditions</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="/privacy">Privacy Policy</a>
						</li>
					</div>
				</div>
				<div className="setion-four">
					<h3 className="font-zcool-xiaowei text-gray-200 text-2xl">
						Get In Touch
					</h3>
					<div className="inner-section">
						<FaMapLocationDot className="footer-icon" />
						<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
					</div>
					<div className="inner-section">
						<IoMdCall className="footer-icon" />
						<p>+2 392 3929 210</p>
					</div>
					<div className="inner-section">
						<MdEmail className="footer-icon" />
						<p>info@organic.com</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
