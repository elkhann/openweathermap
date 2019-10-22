import React, { useEffect } from 'react';
import WeatherList from './WeatherList';
import WeatherSearch from './WeatherSearch';

import { connect } from 'react-redux';
import { itemsFetchData } from '../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Weather = ({ city, fetchData }) => {
	useEffect(
		() => {
			if (city !== undefined) {
				console.log(city);
				fetchData(city);
			}
		},
		[ city, fetchData ]
	);

	const useStyles = makeStyles((theme) => ({
		grid: {
			background: '#2053b3'
		}
	}));
	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<Grid container justify="center" alignItems="center" className={classes.grid}>
				{city ? (
					<React.Fragment>
						<WeatherSearch />
						<WeatherList />
					</React.Fragment>
				) : (
					''
				)}
			</Grid>
		</Container>
	);
};

const mapStateToProps = ({ weather }) => {
	return { city: weather.city };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (city) => dispatch(itemsFetchData(city))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
