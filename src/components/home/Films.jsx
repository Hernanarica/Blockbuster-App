import { SpinnerCircular } from "spinners-react";
import useFetch from "../../hooks/useFetch";
import Film from "./Film";

function Films() {
	const { data, loading } = useFetch(`${ import.meta.env.VITE_API_URL }?apikey=${ import.meta.env.VITE_API_KEY }&s=Naruto&plot=full`);
	const { Search: films } = data;
	
	return (
		<>
			<section className="films">
				<h3 className="films__title">Todas las películas</h3>
				<form action="#" className="search">
					<label htmlFor="search" className="sr-only">Buscar</label>
					<input type="text" name="search" className="search__input login__form-field" id="search" placeholder="buscar una película" />
					<button className="btn btn--active btn--shrink">Buscar</button>
				</form>
			</section>
			<div className="films-container">
				{
					loading && <SpinnerCircular size={ 100 } color="#fed941" />
				}
				{
					films?.length > 0 && films.map(film => <Film { ...film } key={ film.imdbID } />)
				}
			</div>
		</>
	);
}

export default Films;