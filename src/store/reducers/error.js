const initialState = false;

const cities = (state = initialState, action) => {
	switch (action.type) {
		case 'ITEMS_HAS_ERRORED':
			return action.error;
		default:
			return state;
	}
};

export default cities;
