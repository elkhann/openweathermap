import React from 'react';

import Header from './components/Header';
import OpenWeather from './containers/OpenWeather';

const App = () => {
	return (
		<div className="App">
			<Header />
			<OpenWeather />
		</div>
	);
};

export default App;
