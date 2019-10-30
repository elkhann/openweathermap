import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchByType } from '../../store/actions';
import CityAdd from '../../components/Cities/CityAdd';

const CityAddContainer = ({ addCity, cities }) => {
	const [ cityValue, setCityValue ] = useState('');
	const inputChange = (e) => {
		const cityValue = e.target.value;
		setCityValue(cityValue);
	};

	const onAdd = (e) => {
		e.preventDefault();
		const city = { name: cityValue.trim() };
		const type = 'BY_CITY';
		if (city) {
			addCity(city, cities, type);
		}
		setCityValue('');
	};

	return <CityAdd inputChange={inputChange} onAdd={onAdd} cityValue={cityValue} />;
};

const mapStateToProps = ({ cities }) => {
	return { cities };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCity: (city, cities, type) => {
			dispatch(fetchByType(city, cities, type));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CityAddContainer);
