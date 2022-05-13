import { useEffect, useState } from "react";

function useFetch(url = '') {
	const [ state, setState ] = useState({
		data: [],
		loading: true,
		error: null
	});
	
	const getFetchData = async (url) => {
		const resFetch = await fetch(url);
		return await resFetch.json();
	};
	
	useEffect(() => {
		getFetchData(url).then(r => {
			// setTimeout(() => {
			// }, 3000);
			setState(oldState => oldState = { ...oldState, data: r, loading: false });
		}).catch(err => {
			setState(oldState => oldState = { ...oldState, error: err });
		});
	}, []);
	
	return state;
}

export default useFetch;