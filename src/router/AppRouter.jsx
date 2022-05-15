import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/home/HomeScreen";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import FavoritesScreen from "../components/favorites/FavoritesScreen";
import OurPlansScreen from "../components/ourPlans/OurPlansScreen";
import Details from "../components/details/Details";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function AppRouter() {
	const isAuthenticated = false;
	
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