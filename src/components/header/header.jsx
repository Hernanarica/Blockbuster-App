function Header() {
	return (
		<header className="header">
			<div className="header__wrapper wrapper">
				<h1 className="header__title">
					Blockbuster
					<a href="/" aria-label="ir al home">
						<picture className="header__title-image">
							<source media="(min-width: 855px)" srcSet="./src/assets/imgs/logo-desk.png" />
							<img src="./src/assets/imgs/logo-mob.png" alt="Blockbuster" width="214" height="128" />
						</picture>
					</a>
					<span className="badge">Online</span>
				</h1>
				<div className="header__navigation">
					<input type="checkbox" id="check-menu-icon" name="check-menu-icon" />
					<label htmlFor="check-menu-icon" aria-label="botón de menú">
						<i className="icon__menu" aria-hidden="true"></i>
					</label>
					<nav className="navigation">
						<ul className="navigation__list">
							<li className="navigation__item">
								<a href="#" aria-label="Ir a todas las películas" className="navigation__link navigation__link--active">Todas</a>
							</li>
							<li className="navigation__item">
								<a href="#" aria-label="Ir a nuestros planes" className="navigation__link navigation__link--active">Nuestros planes</a>
							</li>
							<li className="navigation__item">
								<a href="#" aria-label="Ir a próximos estrenos" className="navigation__link navigation__link--active">Mis favoritos</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;