import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../utilities/Loader";
import DetailItem from "./DetailItem";

function Details() {
	const { id } = useParams();
	const { data, loading } = useFetch(`${ import.meta.env.VITE_API_URL }?apikey=${ import.meta.env.VITE_API_KEY }&i=${ id }`);
	const { imdbID } = data;
	
	return (
		<>
			<section className="wrapper">
				<div className="back-section">
					<Link to="/" aria-label="Volver al home" className="btn btn--outline btn--shrink">
						<i className="icon__back" aria-hidden="true"></i>
						Volver </Link>
				</div>
				{
					loading && <Loader size={ 50 } />
				}
				{
					imdbID && <DetailItem { ...data } />
				}
			</section>
		</>
	);
}

export default Details;