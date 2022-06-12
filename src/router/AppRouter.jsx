import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../views/Home";
import LoginScreen from "../views/Login/Login";
import RegisterScreen from "../views/Register";
import FavoritesScreen from "../components/favorites/FavoritesScreen";
import OurPlansScreen from "../components/ourPlans/OurPlansScreen";
import Details from "../components/details/Details";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useContext } from "react";
import Context from "../context/Context";

function AppRouter() {
	const { authenticated } = useContext(Context);
	
	return (
		<Router>
			<Header authenticated={ authenticated }/>
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