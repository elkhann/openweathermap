import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchByType } from '../store/actions';
import OpenWeather from '../components/OpenWeather';

const OpenWeatherContainer = ({ cities, fetchByType }) => {
	useEffect(
		() => {
			navigator.geolocation.getCurrentPosition(function(location) {
				const lat = Math.round(location.coords.latitude);
				const lon = Math.round(location.coords.longitude);
				const city = {
					coord: {
						lat,
						lon
					}
				};
				const type = 'BY_COORD';

				fetchByType(city, cities, type);
			});
		},
		[ fetchByType ]
	);

	return <OpenWeather />;
};

const mapStateToProps = ({ cities }) => {
	return { cities };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchByType: (city, cities, type) => {
			dispatch(fetchByType(city, cities, type));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenWeatherContainer);
