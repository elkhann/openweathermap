import {
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS
} from '../constants/';

const initialState = {
  hasError: false,
  isLoading: false,
  success: false
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return { ...state, hasError: action.hasError };
    case ITEMS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case ITEMS_FETCH_DATA_SUCCESS:
      return { ...state, success: action.success };
    default:
      return state;
  }
};

export default fetch;
