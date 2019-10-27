const initialState = [
	{
		cityName: 'Simferopol',
		country: 'ua',
		weatherData: {},
		hasErrored: false,
		isLoading: false
	},
	{ cityName: 'Yalta', weatherData: {}, hasErrored: false, isLoading: false }
];

const addCity = (state, action) => {
	console.log('ADD_CITY');
	const newStateForAdd = [ ...state ];
	newStateForAdd.push({
		cityName: action.city,
		weatherData: {},
		hasErrored: false,
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
		case 'ITEMS_HAS_ERRORED':
			console.log('ITEMS_HAS_ERRORED');
			const newStateForError = [ ...state ];
			newStateForError[action.index].hasErrored = action.hasErrored;
			return [ ...newStateForError ];
		case 'ITEMS_IS_LOADING':
			console.log('ITEMS_IS_LOADING');
			const newStateForLoading = [ ...state ];
			newStateForLoading[action.index].isLoading = action.isLoading;
			return [ ...newStateForLoading ];
		case 'ITEMS_FETCH_DATA_SUCCESS':
			console.log('ITEMS_FETCH_DATA_SUCCESS');
			const newState = [ ...state ];
			newState[action.index].weatherData = action.data;
			return [ ...newState ];

		default:
			return state;
	}
};

export default cities;
