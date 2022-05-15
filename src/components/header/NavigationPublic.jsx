import { Link } from "react-router-dom";

function NavigationPublic() {
	return (
		<>
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__item">
						<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Home</Link>
					</li>
					<li className="navigation__item">
						<Link to="/login" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Login</Link>
					</li>
					<li className="navigation__item">
						<Link to="/register" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Register</Link>
					</li>
					<li className="navigation__item">
						<Link to="/our-plans" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Nuestros Planes</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavigationPublic;