import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./lazyLoadingAnimation.css";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/about"));
const Services = lazy(() => import("./Pages/Services/Services"));
const Shop = lazy(() => import("./Pages/Shop/Shop"));
const Reservation = lazy(() => import("./Pages/Reservation/Reservation"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const SignIn = lazy(() => import("./Pages/Account/SignIn"));
const SignUp = lazy(() => import("./Pages/Account/SignUp"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage/ProfilePage"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));

const Loading = () => (
	<div className="loading-animation">
		<div className="spinner-border">
			<div className="spinner-image"></div>
		</div>
		<p className="font-zcool-xiaowei">Loading...</p>
	</div>
);

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/reservation" element={<Reservation />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/profilepage" element={<ProfilePage />} />
					<Route path="/cart" element={<Cart />} />

					<Route path="*" element={<NotFound />} />
				</Routes>

				<ToastContainer />
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
