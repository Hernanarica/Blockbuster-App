import Films from "./Films";
import Slider from "./Slider";

function HomeScreen() {
	return (
		<main id="root">
			<section className="wrapper main__home-section">
				<h2 className="sr-only">Sección de películas</h2>
				<section>
					<h3 className="sr-only">Sliders de películas</h3>
					<Slider />
				</section>
				<Films />
			</section>
		</main>
	);
}

export default HomeScreen;