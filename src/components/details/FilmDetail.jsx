import { SpinnerCircular } from "spinners-react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function FilmDetail() {
	const { id } = useParams();
	const { data, loading } = useFetch(`${ import.meta.env.VITE_API_URL }?apikey=${ import.meta.env.VITE_API_KEY }&i=${ id }`);
	
	return (
		<>
			{
				loading && <SpinnerCircular size={ 50 } color="#fed941" />
			}
			{
				<section className="wrapper">
					<div className="back-section">
						<Link to="/" aria-label="Volver al home" className="btn btn--outline btn--shrink">
							<i className="icon__back" aria-hidden="true"></i>
							Volver </Link>
					</div>
					<article className="detail__container">
						<div className="detail__description-area-1">
							<div className="detail__description-area-2">
								<div className="detail__description">
									<h2 className="detail__title">
										<span className="sr-only">Detalle de la película</span> { data.Title }
									</h2>
									<p className="detail__paragraph">
										{ data.Plot }
									</p>
									<div className="detail__info">
										<time dateTime="PT${data.Runtime.replace(' ', '').toUpperCase()}">{ data.Runtime ? data.Runtime : 'No disponible' }</time>
										<div className="detail__genres">
											<span className="badge badge--active">{ data.Genre ? data.Genre.replaceAll(',', ' - ') : 'No disponible' }</span>
										</div>
										<time dateTime="${data.Released}">${ data.Released }</time>
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
									<span>${ data.imdbRating }</span>
								</div>
								<img src={ data.Poster } alt={ data.Title } width="220" height="330" />
							</div>
						</div>
					</article>
				</section>
			}
		</>
	);
}

export default FilmDetail;