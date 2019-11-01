import { ADD_CITY, DELETE_CITY } from '../constants/';

const initialState = [];

const cities = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return [...state, action.data];
    case DELETE_CITY:
      const newState = [...state];
      const index = newState.findIndex(item => {
        return item.city === action.city;
      });
      newState.splice(index, 1);
      return [...newState];

    default:
      return state;
  }
};

export default cities;
