import React, { useState } from 'react';
import { connect } from 'react-redux';

import { checkCity } from '../../store/actions';
import CityAdd from '../../components/Cities/CityAdd';

const CityAddContainer = ({ addCity, cities }) => {
  const [cityValue, setCityValue] = useState('');
  const inputChange = e => {
    const cityValue = e.target.value;
    setCityValue(cityValue);
  };

  const onAdd = e => {
    e.preventDefault();
    const city = cityValue.trim();
    if (city) {
      addCity(city, cities);
    }
    setCityValue('');
  };

  return (
    <CityAdd inputChange={inputChange} onAdd={onAdd} cityValue={cityValue} />
  );
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
)(CityAddContainer);
