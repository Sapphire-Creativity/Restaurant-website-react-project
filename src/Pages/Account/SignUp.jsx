import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
import SignImage from "../../Pages/Account/signin.jpg";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";

import { setDoc, doc } from "firebase/firestore";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const SignUp = () => {
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			await createUserWithEmailAndPassword(auth, email, password);

			const user = auth.currentUser;
			console.log(user);
			if (user) {
				await setDoc(doc(db, "Users", user.uid), {
					email: user.email,
					firstName: firstName,
					lastName: lastName,
				});
			}
			console.log("Registered");
			toast.success("Registered Successfully!", {
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
			<CustomCursor />;
			<OtherHeader
				backgroundImage={SignImage}
				title={"Sign Up"}
				subTitle={"Welcome! Please create your Account"}
			/>
			<section className="container">
				<div className=" flex flex-col items-center justify-between gap-5 m-auto w-full sm:w-[80%] md:w-[60%] lg:w-[50%] py-20 px-10 bg-white drop-shadow-three">
					<form
						onSubmit={handleRegister}
						className="flex flex-col gap-5 w-full">
						<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
							<input
								type="text"
								placeholder="First Name"
								value={firstName}
								onChange={(e) => setfirstName(e.target.value)}
								required
								className="w-full outline-none border-0 focus:ring-0  text-gray-600 bg-transparent"
							/>
							<IoPersonOutline className="text-primary ml-2" />
						</div>

						<div className="flex items-center w-full  bg-white p-5 drop-shadow-three">
							<input
								type="text"
								placeholder="Last Name"
								value={lastName}
								onChange={(e) => setlastName(e.target.value)}
								required
								className="w-full outline-none border-0 focus:ring-0  text-gray-600 bg-transparent"
							/>

							<IoPersonOutline className="text-primary ml-2" />
						</div>
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
								Sign Up <RiSendPlaneFill />
							</button>
						</div>
					</form>

					<p className="mt-5">
						Already Have an Account?
						<a href="./SignIn" className="text-primary font-bold">
							{" "}
							Sign In
						</a>
					</p>
				</div>
			</section>
			<Footer />
			<Copyright />
		</>
	);
};

export default SignUp;
