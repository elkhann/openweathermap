import { apiKey, apiUrl5Day } from '../../api/openweather';

export function itemsHasErrored(error) {
	return {
		type: 'ITEMS_HAS_ERRORED',
		hasError: error
	};
}

export function itemsIsLoading(bool) {
	return {
		type: 'ITEMS_IS_LOADING',
		isLoading: bool
	};
}

export function itemsFetchDataSuccess(data) {
	return {
		type: 'ITEMS_FETCH_DATA_SUCCESS',
		data
	};
}

export const itemsFetchData = (city) => {
	return async function(dispatch) {
		console.log(`Fetch on ${city}`);
		const fullUrl = `${apiUrl5Day}?q=${city}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
		const response = await fetch(fullUrl);
		dispatch(itemsIsLoading(true));
		if (!response.ok) {
			dispatch(itemsIsLoading(false));
			dispatch(itemsHasErrored(response.statusText));
			throw Error(response.statusText);
		}
		dispatch(itemsIsLoading(false));
		const json = await response.json();
		const data = { cod: json.cod, city: json.city.name, country: json.city.country, list: json.list };
		dispatch(itemsFetchDataSuccess(data));
	};
};

export function checkCity(cityValue, cities) {
	return function(dispatch) {
		dispatch(itemsHasErrored(false));
		const capitalize = (cityValue) => {
			return cityValue.charAt(0).toUpperCase() + cityValue.slice(1).toLowerCase();
		};

		const [ cityName, countryName = '' ] = cityValue.split(/[ ,]+/);
		const normalizeCityName = capitalize(cityName);

		const checkToMatch = cities.find((item) => {
			return item.city === normalizeCityName;
		});

		if (checkToMatch) {
			const error = `${checkToMatch.city} alredy added`;
			dispatch(itemsHasErrored(error));
			throw Error(error);
		}
		const city = `${normalizeCityName}${countryName ? `,${countryName}` : ''}`;
		dispatch(itemsFetchData(city));
	};
}
