import React, { useEffect, useState } from "react";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import SignImage from "../../Pages/Account/signin.jpg";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import CustomCursor from "../../Components/CustomCursor/CustomCursor";

const ProfilePage = () => {

    
	const [userData, setUserData] = useState(null);

	const fetchUserData = async () => {
		auth.onAuthStateChanged(async (user) => {
			console.log(user);
			const docRef = doc(db, "Users", user.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setUserData(docSnap.data());
				console.log(docSnap.data());
			} else {
				console.log("User is not logged in");
			}
		});
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	async function handleLogout() {
		try {
			await auth.signOut();
			window.location.href = "/signin";
			console.log("Logged out");
		} catch (error) {
			console.log("Error Loggin Out: ", error.message);
		}
	}
	return (
		<>
        <CustomCursor/>
			<OtherHeader backgroundImage={SignImage} title={"Welcome!"} />

			<section>
				{userData ? (
					<div className="container">
						<h3 className="font-zcool-xiaowei text-3xl text-center">
							Welcome {userData.firstName}{" "}
						</h3>
						<div className="flex flex-col gap-4 text-center text-xl my-10">
							<p>Email: {userData.email}</p>
							<p>First Name: {userData.firstName}</p>
							<p>Last Name: {userData.lastName}</p>
						</div>
						<div className="flex justify-center">
							<button className="primary-btn w-40 " onClick={handleLogout}>
								Logout
							</button>
						</div>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</section>
		</>
	);
};

export default ProfilePage;
