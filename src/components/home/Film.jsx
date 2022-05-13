import { Link } from "react-router-dom";

function Film({ imdbID: id, Title: title, Poster: poster }) {
	return (
		<div>
			<Link to={ `/detail/${ id }` }>
				<article className="film__item">
					<h4 className="sr-only"></h4>
					<img src={ poster  } alt={ title } className="film__image" width="220" height="330" />
				</article>
			</Link>
			<button className="btn btn--outline">
				<i className="icon__plus"></i>
				Agregar
			</button>
		</div>
	);
}

export default Film;