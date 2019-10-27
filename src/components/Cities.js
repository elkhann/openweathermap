import React from 'react';
import { connect } from 'react-redux';
import City from './City';
import { itemsFetchData } from '../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Weather = ({ cities, fetchData }) => {
	const useStyles = makeStyles((theme) => ({
		cardGrid: {
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2)
		},
		card: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			background: '#4876c2'
		}
	}));

	const classes = useStyles();

	return (
		<Grid container spacing={4} className={classes.cardGrid}>
			{cities ? (
				cities.map((city, index) => {
					console.log(city);
					return (
						<Grid item xs={6} key={city + index}>
							<Card className={classes.card}>
								<City city={city} index={index} fetchData={fetchData} />
							</Card>
						</Grid>
					);
				})
			) : (
				''
			)}
		</Grid>
	);
};

const mapStateToProps = ({ cities }) => {
	return { cities: cities };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (city, country, index) => dispatch(itemsFetchData(city, country, index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
