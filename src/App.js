import React from 'react';

import Header from './components/Header';
import OpenWeather from './containers/OpenWeather';

const App = () => {
  navigator.geolocation.getCurrentPosition(function(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.coords.accuracy);
  });
  return (
    <div className='App'>
      <Header />
      <OpenWeather />
    </div>
  );
};

export default App;
