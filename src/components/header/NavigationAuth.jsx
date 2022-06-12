import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../../context/Context";
import { auth } from "../../firebase/firebase.config";

function NavigationAuth() {
	const { user: { displayName, role } } = useContext(Context);
	
	const handleSignOut = () => {
		signOut(auth).then(() => {
			console.log('Sign-out successful.');
		}).catch((error) => {
			console.log('An error happened.');
		});
	};
	
	return (
		<>
			<nav className="navigation">
				<ul className="navigation__list">
					{ (role === 'admin') && (
						<>
							<li className="navigation__item">
								<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Home</Link>
							</li>
							
							<li className="navigation__item">
								<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Favoritos</Link>
							</li>
							<li className="navigation__item">
								<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Contacto</Link>
							</li>
						</>
					)}
					{ (role === 'finance') && (
						<>
							<li className="navigation__item">
								<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Home</Link>
							</li>
							
							<li className="navigation__item">
								<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Favoritos</Link>
							</li>
						</>
					)}
					{ (role === 'accounting-colombia') && (
						<>
							<li className="navigation__item">
								<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Home</Link>
							</li>
							
							<li className="navigation__item">
								<Link to="/" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Contacto</Link>
							</li>
						</>
					)}
					<li className="navigation__item">
						<span aria-label="Logout" className="navigation__link navigation__link--active" onClick={ handleSignOut }>Logout({ displayName } | { role })</span>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavigationAuth;