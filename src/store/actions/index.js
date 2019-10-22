import { url } from '../../api/openweather';

export function itemsHasErrored(bool) {
	return {
		type: 'ITEMS_HAS_ERRORED',
		hasErrored: bool
	};
}

export function itemsIsLoading(bool) {
	return {
		type: 'ITEMS_IS_LOADING',
		isLoading: bool
	};
}

export function itemsFetchDataSuccess(items) {
	return {
		type: 'ITEMS_FETCH_DATA_SUCCESS',
		items
	};
}

export function itemsFetchData(url) {
	return (dispatch) => {
		dispatch(itemsIsLoading(true));

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(itemsIsLoading(false));

				return response;
			})
			.then((response) => response.json())
			.then((items) => dispatch(itemsFetchDataSuccess(items)))
			.catch(() => dispatch(itemsHasErrored(true)));
	};
}

export const fetchWeatherRequest = async () => {
	const apiCall = await fetch(url);
	const json = await apiCall.json();
	const data = { cod: json.cod, city: json.city.name, list: json.list };
	return {
		type: 'FETCH',
		payload: data
	};
};
