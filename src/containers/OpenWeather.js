import React from 'react';
import { connect } from 'react-redux';
import { checkCity } from '../store/actions';
import OpenWeather from '../components/OpenWeather';

const OpenWeatherContainer = ({ addCity, cities }) => {
  // useEffect(() => {
  //   addCity('Lviv', cities);
  //   addCity('Yalta', cities);
  // }, []);

  return <OpenWeather />;
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: (city, cities) => {
      dispatch(checkCity(city, cities));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenWeatherContainer);
