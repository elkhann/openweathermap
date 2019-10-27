const initialState = {
	hasError: false,
	isLoading: false
};

const fetch = (state = initialState, action) => {
	switch (action.type) {
		case 'ITEMS_HAS_ERRORED':
			return { ...state, hasError: action.hasError };
		case 'ITEMS_IS_LOADING':
			return { ...state, isLoading: action.isLoading };
		default:
			return state;
	}
};

export default fetch;
