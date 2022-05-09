function Home() {
	return (
		<main id="root">
			<section className="wrapper main__home-section">
				<h2 className="sr-only">Sección de películas</h2>
				<section className="slider-section">
					<h3 className="sr-only">Sliders de películas</h3>
					<div className="slider">
						<input type="radio" name="image-slide" id="1" hidden />
						<input type="radio" name="image-slide" id="2" hidden />
						<input type="radio" name="image-slide" id="3" hidden />
						<div className="slide">
							<div className="slide__item">
								<h4 className="sr-only">Película de Mulan</h4>
								<picture>
									<source media="(min-width: 768px)" srcSet="./src/assets/imgs/sliders/slider__mulan.png" />
									<img src="./src/assets/imgs/sliders/slider__mulan-mob.png" alt="Película de Mulan" />
								</picture>
								<div className="slide__item-actions">
									<a href="" className="btn btn--active btn--shrink" aria-label="Ver ahora">
										<i className="icon__play" aria-hidden="true"></i>
										<span className="btn__text">VER AHORA</span>
									</a>
									<a href="#" className="btn btn--outline btn--shrink" aria-label="Ver después">
										<i className="icon__plus" aria-hidden="true"></i>
										<span className="btn__text">VER DESPUÉS</span>
									</a>
								</div>
							</div>
							<div className="slide__item">
								<h4 className="sr-only">Película de Raya y el último dragon</h4>
								<picture>
									<source media="(min-width: 768px)" srcSet="./src/assets/imgs/sliders/slider__raya.png" />
									<img src="./src/assets/imgs/sliders/slider__raya-mob.png" alt="Película raya y el último dragón" />
								</picture>
								<div className="slide__item-actions">
									<a href="#" className="btn btn--active btn--shrink" aria-label="Ver ahora">
										<i className="icon__play" aria-hidden="true"></i>
										<span className="btn__text">VER AHORA</span>
									</a>
									<a href="#" className="btn btn--outline btn--shrink" aria-label="Ver después">
										<i className="icon__plus" aria-hidden="true"></i>
										<span className="btn__text">VER DESPUÉS</span>
									</a>
								</div>
							</div>
							<div className="slide__item">
								<h4 className="sr-only">Película de Onward</h4>
								<picture>
									<source media="(min-width: 768px)" srcSet="./src/assets/imgs/sliders/slider__onward.png" />
									<img src="./src/assets/imgs/sliders/slider__onward-mob.png" alt="Película onward" />
								</picture>
								<div className="slide__item-actions">
									<a href="#" className="btn btn--active btn--shrink" aria-label="Ver ahora">
										<i className="icon__play" aria-hidden="true"></i>
										<span className="btn__text">VER AHORA</span>
									</a>
									<a href="#" className="btn btn--outline btn--shrink" aria-label="Ver después">
										<i className="icon__plus" aria-hidden="true"></i>
										<span className="btn__text">VER DESPUÉS</span>
									</a>
								</div>
							</div>
						</div>
						<div className="pagination">
							<label htmlFor="1" className="pagination__item"></label>
							<label htmlFor="2" className="pagination__item"></label>
							<label htmlFor="3" className="pagination__item"></label>
						</div>
					</div>
				</section>
				<section className="films">
					<h3 className="films__title">Todas las películas</h3>
					<form action="#" className="search">
						<label htmlFor="search" className="sr-only">Buscar</label>
						<input type="text" name="search" className="search__input login__form-field" id="search" placeholder="buscar una película" />
						<button className="btn btn--active btn--shrink">Buscar</button>
					</form>
				</section>
				<div className="films-container"></div>
			</section>
		</main>
	);
}

export default Home;