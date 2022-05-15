import { Link } from "react-router-dom";

function NavigationAuth() {
	return (
		<>
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__item">
						<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Home</Link>
					</li>
					<li className="navigation__item">
						<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Favoritos</Link>
					</li>
					<li className="navigation__item">
						<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Contacto</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavigationAuth;