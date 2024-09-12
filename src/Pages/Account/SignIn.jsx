import React, { useState } from "react";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import SignImage from "../../Pages/Account/signin.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("Login Successfully!");
			window.location.href = "/profilepage";
			toast.success("You are logged in Successfully!", {
				position: "top-center",
			});
		} catch (error) {
			toast.success(error.message, {
				position: "bottom-center",
			});
		}
	};

	return (
		<>
			<OtherHeader
				backgroundImage={SignImage}
				title={"Sign In"}
				subTitle={"Welcome! Please sign in to your Account"}
			/>

			<section className="container">
				<div className=" flex flex-col items-center justify-between gap-5 m-auto w-full sm:w-[80%] md:w-[60%] lg:w-[50%] py-20 px-10 bg-white drop-shadow-three">
					<form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
						<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
							<input
								type="text"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full outline-none border-0 focus:ring-0  text-gray-600 bg-transparent"
							/>

							<IoMailOutline className="text-primary ml-2" />
						</div>

						<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full outline-none focus:ring-0  text-gray-600"
							/>

							<RiLockPasswordFill className="text-primary ml-2" />
						</div>

						<div className="flex justify-center w-full">
							<button className="primary-btn w-full" type="submit">
								Sign In <RiSendPlaneFill />
							</button>
						</div>
					</form>

					<p className="mt-5">
						Don't Have an Account?
						<a href="./SignUp" className="text-primary font-bold">
							{" "}
							Sign up
						</a>
					</p>
				</div>
			</section>

			<Footer />
			<Copyright />
		</>
	);
};

export default SignIn;
