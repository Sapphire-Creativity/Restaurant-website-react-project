// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBr0UN0bxh1Fso0xbbgSvjk8vLjd92dEj4",
	authDomain: "react-project-2-fbaef.firebaseapp.com",
	projectId: "react-project-2-fbaef",
	storageBucket: "react-project-2-fbaef.appspot.com",
	messagingSenderId: "315144895441",
	appId: "1:315144895441:web:4bc6a51783ae525234bef0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
