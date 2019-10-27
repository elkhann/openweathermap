import { combineReducers } from 'redux';

import cities from './cities';
import fetch from './fetch';

export default combineReducers({
	cities,
	fetch
});
