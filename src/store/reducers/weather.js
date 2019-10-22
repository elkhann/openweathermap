const initialState = {
	weatherData: '',
	hasErrored: '',
	isLoading: '',
	city: 'Simferopol'
};

const weather = (state = initialState, action) => {
	switch (action.type) {
		case 'ITEMS_HAS_ERRORED':
			console.log('ITEMS_HAS_ERRORED');
			return { ...state, hasErrored: action.hasErrored };
		case 'ITEMS_IS_LOADING':
			console.log('ITEMS_IS_LOADING');
			return { ...state, isLoading: action.isLoading };
		case 'ITEMS_FETCH_DATA_SUCCESS':
			console.log('ITEMS_FETCH_DATA_SUCCESS');
			return { ...state, weatherData: action.items };
		case 'SET_CITY':
			return { ...state, city: action.city };
		default:
			return state;
	}
};

export default weather;
