import { apiKey, apiUrl5Day } from '../../api/openweather';

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

export const itemsFetchData = (city) => {
	return async function(dispatch) {
		console.log('City', city);
		const fullUrl = `${apiUrl5Day}?q=${city}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
		console.log(fullUrl, city);
		const response = await fetch(fullUrl);

		if (!response.ok) {
			dispatch(itemsIsLoading(false));
			dispatch(itemsHasErrored(true));
			throw Error(response.statusText);
		}
		dispatch(itemsIsLoading(false));
		const json = await response.json();
		const data = { cod: json.cod, city: json.city.name, list: json.list };
		dispatch(itemsFetchDataSuccess(data));
	};
};

export function setCity(city) {
	console.log('SET_CITY', city);
	return {
		type: 'SET_CITY',
		city
	};
}
