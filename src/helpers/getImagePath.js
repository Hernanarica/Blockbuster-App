function getImagePath(imageName) {
	return new URL(`../assets/imgs/${ imageName }`, import.meta.url).href;
}

export default getImagePath;