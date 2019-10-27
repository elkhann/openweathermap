import { apiKey, apiUrl5Day } from '../../api/openweather';

export function itemsHasErrored(error, index = 0) {
	console.log(error);
	return {
		type: 'ITEMS_HAS_ERRORED',
		hasErrored: error,
		index
	};
}

export function itemsIsLoading(bool, index) {
	return {
		type: 'ITEMS_IS_LOADING',
		isLoading: bool,
		index
	};
}

export function itemsFetchDataSuccess(data, index) {
	return {
		type: 'ITEMS_FETCH_DATA_SUCCESS',
		data,
		index
	};
}

export function addCity(city) {
	return {
		type: 'ADD_CITY',
		city
	};
}

export const itemsFetchData = (city, country, index) => {
	return async function(dispatch) {
		const counryStr = country ? `,${country}` : '';
		console.log(`Fetch on ${city}${counryStr}`);
		const fullUrl = `${apiUrl5Day}?q=${city}${counryStr}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
		const response = await fetch(fullUrl);
		dispatch(itemsIsLoading(true, index));
		if (!response.ok) {
			dispatch(itemsIsLoading(false, index));
			dispatch(itemsHasErrored(response.statusText, index));
			throw Error(response.statusText);
		}
		dispatch(itemsIsLoading(false, index));
		const json = await response.json();
		const data = { cod: json.cod, city: json.city.name, list: json.list };
		dispatch(itemsFetchDataSuccess(data, index));
	};
};

export function checkCity(value, cities) {
	return function(dispatch) {
		const capitalize = (value) => {
			return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
		};
		const normalizeCity = capitalize(value);
		const checkToMatch = cities.find((item) => {
			return capitalize(item.cityName) === normalizeCity;
		});

		if (checkToMatch) {
			dispatch(itemsHasErrored(`City ${checkToMatch.cityName} alredy existed`));
			throw Error(`City ${checkToMatch.cityName} alredy existed`);
		}
		const city = normalizeCity;
		dispatch(addCity(city));
	};
}
