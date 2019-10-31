import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { deleteCity } from '../../store/actions';
import WeatherList from '../../components/CityWeather/WeatherList';

const WeatherListContainer = ({ cities, deleteCity }) => {
  const history = useHistory();
  let { id } = useParams();

  const city = cities.find(city => {
    return city.city === id;
  });

  const onBack = () => {
    history.push('/');
  };

  const onDelete = city => {
    history.push('/');
    deleteCity(city);
  };

  return <WeatherList onBack={onBack} city={city} onDelete={onDelete} />;
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCity: city => {
      dispatch(deleteCity(city));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherListContainer);
