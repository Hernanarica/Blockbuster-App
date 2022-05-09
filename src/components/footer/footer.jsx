function Footer() {
	return (
		<footer>
			<div className="wrapper__footer">
				<div className="footer__list-container">
					<ul className="footer__list">
						<li className="footer__list-item">
							<a href="" aria-label="Ir al home" className="footer__list-link link--active">HOME</a>
						</li>
						<li className="footer__list-item">
							<a href="" className="footer__list-link link--active">INICIA SESIÓN</a>
						</li>
						<li className="footer__list-item">
							<a href="" aria-label="Ir a registrarme" className="footer__list-link link--active">REGÍSTRATE PARA RECIBIR NOTICIAS</a>
						</li>
					</ul>
				</div>
				<div className="footer__list-container">
					<h2 className="footer__list-title">OBTENER AYUDA</h2>
					<ul className="footer__list">
						<li className="footer__list-item">
							<a href="" aria-label="Ir a nuestros planes" className="footer__list-link link">Nuestros planes</a>
						</li>
						<li className="footer__list-item">
							<a href="" aria-label="Ir a opciones de pago" className="footer__list-link link">Opciones de pago</a>
						</li>
					</ul>
				</div>
				<div className="footer__list-container">
					<h2 className="footer__list-title">LO NUEVO</h2>
					<ul className="footer__list">
						<li className="footer__list-item">
							<a href="" aria-label="Ir a próximos estrenos" className="footer__list-link link">Próximos estrenos</a>
						</li>
						<li className="footer__list-item">
							<a href="" aria-label="Ir a películas más valoradas" className="footer__list-link link">Más valoradas</a>
						</li>
					</ul>
				</div>
				<div className="footer__social-container">
					<ul className="footer__social">
						<li className="footer__social-item">
							<a href="https://twitter.com" rel="noopener noreferrer" className="footer__social-link" target="_blank" aria-label="Ir a twitter">
								<img src="./src/assets/imgs/icon__twitter.png" alt="Icon Twitter" width="48" height="48" />
							</a>
						</li>
						<li className="footer__social-item">
							<a href="https://www.facebook.com" rel="noopener noreferrer" className="footer__social-link" target="_blank" aria-label="Ir a facebook">
								<img src="./src/assets/imgs/icon__facebook.png" alt="Icon Facebook" width="48" height="48" />
							</a>
						</li>
						<li className="footer__social-item">
							<a href="https://www.youtube.com" rel="noopener noreferrer" className="footer__social-link" target="_blank" aria-label="Ir a youtube">
								<img src="./src/assets/imgs/icon__youtube.png" alt="Icon Youtube" width="48" height="48" />
							</a>
						</li>
						<li className="footer__social-item">
							<a href="https://www.instagram.com" rel="noopener noreferrer" className="footer__social-link" target="_blank" aria-label="Ir a instagram">
								<img src="./src/assets/imgs/icon__instagram.png" alt="Icon Instagram" width="48" height="48" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;