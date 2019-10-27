const initialState = [];

const cities = (state = initialState, action) => {
	switch (action.type) {
		case 'ITEMS_FETCH_DATA_SUCCESS':
			return [ ...state, action.data ];
		case 'DELETE_CITY':
			console.log('DELETE_CITY');
			return [ ...state ];

		default:
			return state;
	}
};

export default cities;
