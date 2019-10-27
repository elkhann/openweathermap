import React from 'react';
import Cities from './Cities';
import CityAdd from './CityAdd';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Weather = () => {
	const useStyles = makeStyles((theme) => ({
		container: {
			background: '#2053b3'
		}
	}));
	const classes = useStyles();

	return (
		<Container maxWidth="sm" className={classes.container}>
			<CityAdd />
			<Cities />
		</Container>
	);
};

export default Weather;
