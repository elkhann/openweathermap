import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchByType, itemsHasErrored } from '../store/actions';
import OpenWeather from '../components/OpenWeather';

const OpenWeatherContainer = ({ cities, fetchByType, setError }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(location) {
      const lat = Math.round(location.coords.latitude * 10) / 10;
      const lon = Math.round(location.coords.longitude * 10) / 10;
      const city = {
        coord: {
          lat,
          lon
        }
      };
      const type = 'BY_COORD';

      fetchByType(city, cities, type);
    });
  }, [fetchByType, cities]);

  setError(false);

  return <OpenWeather cities={cities} />;
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchByType: (city, cities, type) => {
      dispatch(fetchByType(city, cities, type));
    },
    setError: error => {
      dispatch(itemsHasErrored(error));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenWeatherContainer);
