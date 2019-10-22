import React from 'react';
import { connect } from 'react-redux';
import WeatherListDay from './WeatherListDay';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const WeatherList = ({ weather }) => {
	const useStyles = makeStyles((theme) => ({
		grid: {
			backgroundColor: '#4876c2',
			margin: 8
		}
	}));

	const classes = useStyles();
	// weather.cod === '200'
	return (
		<React.Fragment>
			{true ? (
				weather.list.map((dayData, index) => {
					return (
						<Grid
							key={index}
							item
							xs={10}
							container
							spacing={4}
							justify="center"
							alignItems="center"
							className={classes.grid}
						>
							<WeatherListDay dayData={dayData} />
						</Grid>
					);
				})
			) : (
				'loading'
			)}
		</React.Fragment>
	);
};

const mapStateToProps = ({ weather }) => {
	return { weather };
};

export default connect(mapStateToProps)(WeatherList);
