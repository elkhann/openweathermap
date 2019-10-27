import { combineReducers } from 'redux';

import cities from './cities';
import error from './error';

export default combineReducers({
	cities,
	error
});
