const initialState = [
	{
		cityName: 'Simferopol',
		country: 'ua',
		weatherData: {},
		isLoading: false
	},
	{ cityName: 'Yalta', weatherData: {}, isLoading: false }
];

const addCity = (state, action) => {
	console.log('ADD_CITY');
	const newStateForAdd = [ ...state ];
	newStateForAdd.push({
		cityName: action.city,
		weatherData: {},
		isLoading: false
	});
	return [ ...newStateForAdd ];
};

const cities = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CITY':
			return addCity(state, action);
		case 'DELETE_CITY':
			console.log('DELETE_CITY');
			return [ ...state ];
		case 'ITEMS_IS_LOADING':
			const newStateForLoading = [ ...state ];
			newStateForLoading[action.index].isLoading = action.isLoading;
			return [ ...newStateForLoading ];
		case 'ITEMS_FETCH_DATA_SUCCESS':
			const newState = [ ...state ];
			newState[action.index].weatherData = action.data;
			return [ ...newState ];

		default:
			return state;
	}
};

export default cities;
