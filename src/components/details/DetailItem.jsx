function DetailItem({ Title, Plot, Runtime, Genre, Released, imdbRating, Poster }) {
	return (
		<article className="detail__container">
			<div className="detail__description-area-1">
				<div className="detail__description-area-2">
					<div className="detail__description">
						<h2 className="detail__title">
							<span className="sr-only">Detalle de la película</span> { Title }
						</h2>
						<p className="detail__paragraph">
							{ Plot }
						</p>
						<div className="detail__info">
							<time dateTime="PT${data.Runtime.replace(' ', '').toUpperCase()}">{ Runtime ? Runtime : 'No disponible' }</time>
							<div className="detail__genres">
								<span className="badge badge--active">{ Genre ? Genre.replaceAll(',', ' - ') : 'No disponible' }</span>
							</div>
							<time dateTime="${data.Released}">${ Released }</time>
						</div>
					</div>
				</div>
				<div className="detail__actions">
					<a href="/" className="btn btn--active" aria-label="Ver ahora">
						<i className="icon__play" aria-hidden="true"></i>
						VER AHORA
					</a>
					<a href="/" className="btn btn--outline" aria-label="Ver después">
						<i className="icon__plus" aria-hidden="true"></i>
						VER DESPUÉS
					</a>
				</div>
			</div>
			<div className="detail__image">
				<div className="film__item" tabIndex="0" aria-label="Poster de la película">
					<div className="film__rankin">
						<i className="icon__star" aria-hidden="true"></i>
						<span>${ imdbRating }</span>
					</div>
					<img src={ Poster } alt={ Title } width="220" height="330" />
				</div>
			</div>
		</article>
	);
}

export default DetailItem;