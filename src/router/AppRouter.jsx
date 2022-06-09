import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import HomeScreen from "../views/Home";
import LoginScreen from "../views/Login/Login";
import RegisterScreen from "../views/Register";
import FavoritesScreen from "../components/favorites/FavoritesScreen";
import OurPlansScreen from "../components/ourPlans/OurPlansScreen";
import Details from "../components/details/Details";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { auth, db } from "../firebase/firebase.config";

function AppRouter() {
	const isAuthenticated = false;
	
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			// camino 1(Grabamos en el displayNAme de googleProvider el rol del usuario)
			// console.log(user.displayName);
			
			// Camino 2(En base al uid obtenemos los datos del usuario de firestore)
			const docRef = doc(db, `usuarios/${ user.uid }`);
			const docSnap = await getDoc(docRef);
			
			if (docSnap.exists()) {
				console.log("Document data:", docSnap.data());
			} else {
				console.log("No such document!");
			}
		
			
		} else {
			// User is signed out
		}
	});
	
	return (
		<Router>
			<Header isAuthenticated={ isAuthenticated }/>
			<main>
				<Routes>
					<Route path="/" element={ <HomeScreen /> } />
					<Route path="/login" element={ <LoginScreen /> } />
					<Route path="/detail/:id" element={ <Details /> } />
					<Route path="/register" element={ <RegisterScreen /> } />
					<Route path="/our-plans" element={ <OurPlansScreen /> } />
					<Route path="/favorites" element={ <FavoritesScreen /> } />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default AppRouter;