import getImagePath from "../../helpers/getImagePath";
import { Link } from "react-router-dom";
import NavigationPublic from "./NavigationPublic";
import NavigationAuth from "./NavigationAuth";

function Header({ authenticated }) {
	return (
		<header className="header">
			<div className="header__wrapper wrapper">
				<h1 className="header__title">
					Blockbuster
					<Link to="/" aria-label="ir al home">
						<picture className="header__title-image">
							<source media="(min-width: 855px)" srcSet={ getImagePath('logo-desk.png') } />
							<img src={ getImagePath('logo-mob.png') } alt="Blockbuster" width="214" height="128" />
						</picture>
					</Link>
				</h1>
				<div className="header__navigation">
					<input type="checkbox" id="check-menu-icon" name="check-menu-icon" />
					<label htmlFor="check-menu-icon" aria-label="botón de menú">
						<i className="icon__menu" aria-hidden="true"></i>
					</label>
					{
						authenticated ? <NavigationAuth /> : <NavigationPublic />
					}
				</div>
			</div>
		</header>
	);
}

export default Header;