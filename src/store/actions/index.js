import { apiKey, apiUrl5Day } from '../../api/openweather';

export function addCity(city) {
  return {
    type: 'ADD_CITY',
    city
  };
}

export function itemsHasErrored(bool, index) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
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

export const itemsFetchData = (city, country, index) => {
  return async function(dispatch) {
    const counryStr = country ? `,${country}` : '';
    console.log(`Fetch on ${city}${counryStr}`);
    const fullUrl = `${apiUrl5Day}?q=${city}${counryStr}&units=metric&cnt=15&lang=ru&APPID=${apiKey}`;
    const response = await fetch(fullUrl);
    dispatch(itemsIsLoading(true, index));
    if (!response.ok) {
      dispatch(itemsIsLoading(false, index));
      dispatch(itemsHasErrored(true, index));
      throw Error(response.statusText);
    }
    dispatch(itemsIsLoading(false, index));
    const json = await response.json();
    const data = { cod: json.cod, city: json.city.name, list: json.list };
    dispatch(itemsFetchDataSuccess(data, index));
  };
};
