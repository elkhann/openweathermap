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

const capitalize = (name) => {
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export function checkCity(city, cities) {
	return function(dispatch) {
		console.log('check', city);
		dispatch(itemsHasErrored(false));

		let name = '',
			country = '';

		if (city && city.name) {
			[ name, country ] = city.name.split(/[ ,]+/);
			name = capitalize(name);
		}

		const checkToMatchName = cities.find((item) => {
			return item.city === name;
		});

		if (checkToMatchName) {
			const error = `${checkToMatchName.city} alredy added`;
			return dispatch(itemsHasErrored(error));
			// throw Error(error);
		}

		let checkToMatchCoord = '';
		if (city.coord) {
			checkToMatchCoord = cities.find((item) => {
				return (item.coord.lat, item.coord.lon) === (city.coord.lat, city.coord.lon);
			});
		}

		let hasError = '';
		if (checkToMatchCoord) {
			hasError = 'allready fetch';
		}

		const newCity = { ...city, name: name, country: country ? `,${country}` : '', hasError };

		return newCity;
	};
}

export const fetchData = (url) => {
	return async function(dispatch) {
		console.log('startfetch: ', url);
		const response = await fetch(url);
		dispatch(itemsIsLoading(true));
		if (!response.ok) {
			dispatch(itemsIsLoading(false));
			dispatch(itemsHasErrored(response.statusText));
			throw Error(response.statusText);
		}
		dispatch(itemsIsLoading(false));
		const json = await response.json();
		const data = {
			cod: json.cod,
			city: json.city.name,
			country: json.city.country,
			coord: { lat: Math.round(json.city.coord.lat), lon: Math.round(json.city.coord.lon) },
			list: json.list
		};
		dispatch(itemsFetchDataSuccess(data));
	};
};

export const fetchByType = (city, cities, type) => {
	return function(dispatch) {
		console.log('start: ', city, type);
		city = dispatch(checkCity(city, cities));
		console.log('here: ', city, type);
		if (!city.hasError) {
			switch (type) {
				case 'BY_CITY':
					const name = city.name;
					const urlWithName = `${apiUrl5Day}?q=${name}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
					return dispatch(fetchData(urlWithName));

				case 'BY_COORD':
					console.log('before fetch by coord');
					const lat = city.coord.lat;
					const lon = city.coord.lon;
					const urlWithCoord = `${apiUrl5Day}?lat=${lat}&lon=${lon}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
					return dispatch(fetchData(urlWithCoord));

				default:
					return 'dont city type';
			}
		}
	};
};
