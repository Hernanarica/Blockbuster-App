export async function getFilmByID(url) {
	const res = await fetch(url);
	return await res.json();
}