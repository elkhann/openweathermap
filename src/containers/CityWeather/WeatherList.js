import React from 'react';

import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import WeatherList from '../../components/CityWeather/WeatherList';

const WeatherListContainer = ({ cities }) => {
  const history = useHistory();
  let { id } = useParams();

  const city = cities.find(city => {
    return city.city === id;
  });

  return <WeatherList history={history} city={city} />;
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

export default connect(mapStateToProps)(WeatherListContainer);
