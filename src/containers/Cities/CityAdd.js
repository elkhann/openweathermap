import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchByType } from '../../store/actions';
import CityAdd from '../../components/Cities/CityAdd';

const CityAddContainer = ({ addCity, cities }) => {
  const [cityValue, setCityValue] = useState('');
  const handleChange = e => {
    const cityValue = e.target.value;
    setCityValue(cityValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const city = { cityName: cityValue.trim() };
    const type = 'BY_CITY';
    if (city.cityName) {
      addCity(city, cities, type);
      setCityValue('');
    }
  };

  return (
    <CityAdd
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cityValue={cityValue}
    />
  );
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: (city, cities, type) => {
      dispatch(fetchByType(city, cities, type));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityAddContainer);
