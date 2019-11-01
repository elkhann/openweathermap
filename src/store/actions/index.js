import { apiKey, apiUrl5Day } from '../../api/openweather';
import moment from 'moment';
import 'moment/locale/ru';

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

export function itemsFetchDataSuccess(bool) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    success: bool
  };
}

export function addCity(data) {
  return {
    type: 'ADD_CITY',
    data
  };
}

export const deleteCity = ({ city }) => {
  return function(dispatch) {
    return dispatch({
      type: 'DELETE_CITY',
      city
    });
  };
};

export function checkCity(city, cities) {
  return function(dispatch) {
    dispatch(itemsHasErrored(false));

    let cityName = '',
      countryName = '',
      checkToMatchCoord = '',
      hasError = '';

    const capitalize = cityName => {
      return cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
    };

    if (city && city.cityName) {
      [cityName, countryName] = city.cityName.split(/[ ,]+/);
      cityName = capitalize(cityName);
    }

    const checkToMatchName = cities.find(item => {
      return item.city === cityName;
    });

    if (checkToMatchName) {
      const error = `${checkToMatchName.city} alredy added`;
      return dispatch(itemsHasErrored(error));
    }

    if (city.coord) {
      checkToMatchCoord = cities.find(item => {
        return (
          (item.coord.lat, item.coord.lon) === (city.coord.lat, city.coord.lon)
        );
      });
    }

    if (checkToMatchCoord) {
      hasError = 'allready fetched';
    }

    return {
      ...city,
      cityName: cityName,
      countryName: countryName ? `,${countryName}` : '',
      hasError
    };
  };
}

export const fetchData = url => {
  return async function(dispatch) {
    const response = await fetch(url);
    dispatch(itemsIsLoading(true));
    if (!response.ok) {
      dispatch(itemsIsLoading(false));
      return dispatch(itemsHasErrored(response.statusText));
    }
    dispatch(itemsIsLoading(false));
    const json = await response.json();
    const data = {
      cod: json.cod,
      id: json.city.id,
      city: json.city.name,
      country: json.city.country,
      coord: {
        lat: Math.round(json.city.coord.lat * 10) / 10,
        lon: Math.round(json.city.coord.lon * 10) / 10
      },
      dayWeather: {
        date: moment.unix(json.list[0].dt).format('D MMMM'),
        temp: Math.round(json.list[0].main.temp),
        iconId: json.list[0].weather[0].id,
        description: json.list[0].weather[0].description
      },
      listWeather: json.list.map(item => {
        return {
          id: item.dt,
          date: moment.unix(item.dt).format('D MMMM'),
          time: moment.unix(item.dt).format('HH:mm'),
          temp: Math.round(item.main.temp),
          iconId: item.weather[0].id,
          description: item.weather[0].description
        };
      })
    };
    dispatch(itemsFetchDataSuccess(true));
    dispatch(addCity(data));
  };
};

export const fetchByType = (city, cities, type) => {
  return function(dispatch) {
    city = dispatch(checkCity(city, cities));
    if (!city.hasError) {
      switch (type) {
        case 'BY_CITY':
          const query = city.cityName + city.countryName;
          const urlWithName = `${apiUrl5Day}?q=${query}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
          return dispatch(fetchData(urlWithName));

        case 'BY_COORD':
          const lat = city.coord.lat;
          const lon = city.coord.lon;
          const urlWithCoord = `${apiUrl5Day}?lat=${lat}&lon=${lon}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
          return dispatch(fetchData(urlWithCoord));

        default:
          return dispatch(itemsHasErrored('Dont city type'));
      }
    }
  };
};
