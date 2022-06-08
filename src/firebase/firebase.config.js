import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCdus1r5EC_HvlfGockEKYXcjlNVlMtmMo",
	authDomain: "blockbuster-d6eb5.firebaseapp.com",
	projectId: "blockbuster-d6eb5",
	storageBucket: "blockbuster-d6eb5.appspot.com",
	messagingSenderId: "694973347526",
	appId: "1:694973347526:web:6e7fe9e6e015c721cac9c7"
};

const app                   = initializeApp(firebaseConfig);
export const auth           = getAuth();
export const googleProvider = new GoogleAuthProvider();