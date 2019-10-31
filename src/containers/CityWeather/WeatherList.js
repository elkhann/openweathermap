import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';

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
    deleteCity(city);
  };

  return (
    <Fragment>
      {city ? (
        <WeatherList onBack={onBack} city={city} onDelete={onDelete} />
      ) : (
        <Redirect to='/' />
      )}
    </Fragment>
  );
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
