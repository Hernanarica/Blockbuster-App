function OurPlansScreen() {
	return (
		<section className="wrapper plans">
			<div className="plans__header">
				<h2 className="plans__header-title">Planes y precios</h2>
				<p className="plans__header-paragraph">Elige el plan que más te convenga y comienza a disfrutar hoy mismo.</p>
			</div>
			<ul className="plans__cards">
				<li tabIndex="1" aria-label="Plan básico" className="card">
					<div className="card__price">$500 <span className="card__price-month">/mes</span>
					</div>
					<div className="card__description">
						<h2 className="card__description-title">Básico</h2>
						<p className="card__description-paragraph">Comienza a ver contenido nuevo cada mes.</p>
					</div>
					<div className="card__benefits">
						<div className="card__benefit">
							<i className="icon__check-primary" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a todas las películas</p>
						</div>
						<div className="card__benefit card__benefit--disabled">
							<i className="icon__delete" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a los nuevos estrenos</p>
						</div>
						<div className="card__benefit card__benefit--disabled">
							<i className="icon__delete" aria-hidden="true"></i>
							<p className="card__benefit-text">Modo offline</p>
						</div>
						<div className="card__benefit card__benefit--disabled">
							<i className="icon__delete" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a la comunidad en Discord</p>
						</div>
					</div>
					<button className="btn">Elegir plan</button>
				</li>
				<li tabIndex="2" aria-label="Plan Intermedio" className="card">
					<div className="card__price">$700 <span className="card__price-month">/mes</span>
					</div>
					<div className="card__description">
						<h2 className="card__description-title">Intermedio</h2>
						<p className="card__description-paragraph">Comienza a ver contenido nuevo cada mes.</p>
					</div>
					<div className="card__benefits">
						<div className="card__benefit">
							<i className="icon__check-primary" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a todas las películas</p>
						</div>
						<div className="card__benefit">
							<i className="icon__check-primary" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a los nuevos estrenos</p>
						</div>
						<div className="card__benefit card__benefit--disabled">
							<i className="icon__delete" aria-hidden="true"></i>
							<p className="card__benefit-text">Modo offline</p>
						</div>
						<div className="card__benefit card__benefit--disabled">
							<i className="icon__delete" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a la comunidad en Discord</p>
						</div>
					</div>
					<button className="btn">Elegir plan</button>
				</li>
				<li tabIndex="3" aria-label="Plan Fan" className="card card--active card--shadow">
					<div className="card__price">$1,000 <span className="card__price-month">/mes</span>
					</div>
					<div className="card__description">
						<h2 className="card__description-title">Fan</h2>
						<p className="card__description-paragraph">Comienza a ver contenido nuevo cada mes.</p>
					</div>
					<div className="card__benefits">
						<div className="card__benefit">
							<i className="icon__check-dark" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a todas las películas</p>
						</div>
						<div className="card__benefit">
							<i className="icon__check-dark" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a los nuevos estrenos</p>
						</div>
						<div className="card__benefit">
							<i className="icon__check-dark" aria-hidden="true"></i>
							<p className="card__benefit-text">Modo offline</p>
						</div>
						<div className="card__benefit card__benefit--disabled">
							<i className="icon__delete" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a la comunidad en Discord</p>
						</div>
					</div>
					<button className="btn btn--outline">Elegir plan</button>
				</li>
				<li tabIndex="4" aria-label="Plan Fan plus" className="card">
					<div className="card__price">$1,200 <span className="card__price-month">/mes</span>
					</div>
					<div className="card__description">
						<h2 className="card__description-title">Fan+</h2>
						<p className="card__description-paragraph">Comienza a ver contenido nuevo cada mes.</p>
					</div>
					<div className="card__benefits">
						<div className="card__benefit">
							<i className="icon__check-primary" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a todas las películas</p>
						</div>
						<div className="card__benefit">
							<i className="icon__check-primary" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a los nuevos estrenos</p>
						</div>
						<div className="card__benefit">
							<i className="icon__check-primary" aria-hidden="true"></i>
							<p className="card__benefit-text">Modo offline</p>
						</div>
						<div className="card__benefit">
							<i className="icon__check-primary" aria-hidden="true"></i>
							<p className="card__benefit-text">Acceso a la comunidad en Discord</p>
						</div>
					</div>
					<button className="btn">Elegir plan</button>
				</li>
			</ul>
		</section>
	);
}

export default OurPlansScreen;