import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { checkCity } from '../store/actions';
import Error from './Error';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const CityAdd = ({ addCity, cities }) => {
	const [ cityValue, setCityValue ] = useState('');
	const inputChange = (e) => {
		const cityValue = e.target.value;
		setCityValue(cityValue);
	};

	const onAdd = (e) => {
		e.preventDefault();
		const city = cityValue.trim();
		if (city) {
			addCity(city, cities);
		}
		setCityValue('');
	};

	useEffect(() => {
		addCity('Lviv', cities);
		addCity('Yalta', cities);
	}, []);

	const useStyles = makeStyles((theme) => ({
		cardAddGrid: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(2)
		},
		root: {
			color: '#fff',
			background: '#4876c2',
			display: 'flex',
			alignItems: 'center'
		},
		input: {
			color: '#fff',
			marginLeft: theme.spacing(1),
			flex: 1
		},
		iconButton: {
			padding: 10,
			color: '#fff'
		},
		divider: {
			height: 28,
			margin: 4
		}
	}));

	const classes = useStyles();

	return (
		<Grid container className={classes.cardAddGrid}>
			<Grid item xs={12}>
				<Card>
					<form onSubmit={(e) => onAdd(e)}>
						<Paper className={classes.root}>
							<InputBase
								value={cityValue}
								className={classes.input}
								placeholder="Enter City"
								inputProps={{ 'aria-label': 'add city' }}
								onChange={(e) => inputChange(e)}
							/>

							<Divider className={classes.divider} orientation="vertical" />
							<IconButton
								onClick={(e) => onAdd(e)}
								color="primary"
								className={classes.iconButton}
								aria-label="directions"
							>
								Add
							</IconButton>
						</Paper>
					</form>
				</Card>
			</Grid>

			<Error />
		</Grid>
	);
};

const mapStateToProps = ({ cities }) => {
	return { cities };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCity: (city, cities) => {
			dispatch(checkCity(city, cities));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CityAdd);
